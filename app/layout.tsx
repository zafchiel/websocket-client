import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import ThemeProviderWrapper from "@/components/ThemeProvider"

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
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
