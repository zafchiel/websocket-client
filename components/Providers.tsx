"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "./ui/toaster"
import CustomCursor from "@/components/CustomCursor"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <CustomCursor>
          <ThemeProvider attribute="class">
            <Toaster />

            {children}
          </ThemeProvider>
        </CustomCursor>
      </SessionProvider>
    </>
  )
}
