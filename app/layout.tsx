import { Inter } from "next/font/google"
import Provider from "@/components/Providers"
import Header from "@/components/Header"
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
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
