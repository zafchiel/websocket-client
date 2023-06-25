import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import ThemeProviderWrapper from "@/components/ThemeProvider"
import CustomCursor from "@/components/CustomCursor"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "WebSocket App",
  description: "Experimental app featuring websocket implementation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, `overflow-hidden`)}>
        <ThemeProviderWrapper>
          <CustomCursor>{children}</CustomCursor>
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
