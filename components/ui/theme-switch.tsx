"use client"

import { useState, useEffect, useContext } from "react"
import {
  CursorEventsContext,
  CursorEventsContextInterface,
} from "../CustomCursor"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"
import { Sun, Moon } from "lucide-react"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const cursorEvents = useContext(
    CursorEventsContext
  ) as CursorEventsContextInterface

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Toggle
      onMouseOver={cursorEvents.mouseOverEvent}
      onMouseOut={cursorEvents.mouseOutEvent}
      variant="outline"
      onClick={() => {
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }}
    >
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </Toggle>
  )
}

export default ThemeSwitch
