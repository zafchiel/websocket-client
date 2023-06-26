"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </SessionProvider>
    </>
  )
}
