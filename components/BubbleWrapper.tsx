import { MouseEvent, useEffect, useRef } from "react"
import styles from "./bubbles.module.css"

export default function BubbleWrapper() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const createBubble = (y: number) => {
    const bubble: HTMLDivElement = document.createElement("div")
    bubble.className = styles.bubble
    bubble.style.top = `${y}px`

    return bubble
  }

  useEffect(() => {
    const handleMouse = (event: MouseEvent<HTMLDivElement>) => {
      const bubble: HTMLDivElement = createBubble(event.clientY)
      wrapperRef.current?.appendChild(bubble)

      setTimeout(() => {
        wrapperRef.current?.removeChild(bubble)
      }, 2000)
    }
    window.onmousemove = (e: any) => handleMouse(e)
  }, [])

  return <div ref={wrapperRef} className="fixed inset-y-0 left-0"></div>
}
