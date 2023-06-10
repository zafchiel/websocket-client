"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"
import { Sun, Moon } from "lucide-react"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Toggle
      variant="outline"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Toggle>
  )
}

export default ThemeSwitch
