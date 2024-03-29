"use client"

import { ReactNode, useEffect, useRef, createContext } from "react"
import styles from "./cursor.module.css"

export interface CursorEventsContextInterface {
  mouseOverEvent: () => void
  mouseOutEvent: () => void
}

export const CursorEventsContext =
  createContext<CursorEventsContextInterface | null>(null)

export default function CustomCursor({ children }: { children: ReactNode }) {
  const dot = useRef<HTMLDivElement | null>(null)
  const dotOutline = useRef<HTMLDivElement | null>(null)

  const delay: number = 18

  const cursorVisible = useRef<boolean>(true)
  const cursorEnlarged = useRef<boolean>(false)

  const endX = useRef<number>(0)
  const endY = useRef<number>(0)
  const _x = useRef<number>(0)
  const _y = useRef<number>(0)

  const requestRef = useRef<number | null>(null)

  const toggleCursorVisibility = (): void => {
    if (!dot.current || !dotOutline.current) return

    if (cursorVisible.current) {
      dot.current.style.opacity = "1"
      dotOutline.current.style.opacity = "1"
    } else {
      dot.current.style.opacity = "0"
      dotOutline.current.style.opacity = "0"
    }
  }

  const toggleCursorEnlargment = (): void => {
    if (!dot.current || !dotOutline.current) return

    if (cursorVisible.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)"
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)"
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)"
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)"
    }
  }

  const mouseOverEvent = () => {
    cursorEnlarged.current = true

    toggleCursorEnlargment()
  }
  const mouseOutEvent = () => {
    cursorEnlarged.current = false
    cursorVisible.current = false

    toggleCursorEnlargment()
  }

  const mouseMoveEvent = (e: MouseEvent) => {
    cursorVisible.current = true
    toggleCursorVisibility()

    endX.current = e.pageX
    endY.current = e.pageY

    if (!dot.current || !dotOutline.current) return
    dot.current.style.top = endY.current + "px"
    dot.current.style.left = endX.current + "px"
  }

  const outlineAnimation = () => {
    _y.current += (endY.current - _y.current) / delay
    _x.current += (endX.current - _x.current) / delay

    if (!dot.current || !dotOutline.current) return
    dotOutline.current.style.top = _y.current + "px"
    dotOutline.current.style.left = _x.current + "px"

    requestRef.current = requestAnimationFrame(outlineAnimation)
  }

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent)
    document.addEventListener("mouseup", mouseOutEvent)
    document.addEventListener("mousemove", mouseMoveEvent)

    outlineAnimation()

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent)
      document.removeEventListener("mouseup", mouseOutEvent)
      document.removeEventListener("mousemove", mouseMoveEvent)

      cancelAnimationFrame(requestRef.current as number)
    }
  }, [])

  return (
    <CursorEventsContext.Provider
      value={{
        mouseOverEvent,
        mouseOutEvent,
      }}
    >
      <div className={styles.outline} ref={dotOutline}></div>
      <div className={styles.dot} ref={dot}></div>
      {children}
    </CursorEventsContext.Provider>
  )
}
