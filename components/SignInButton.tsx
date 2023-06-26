"use client"

import { ReactNode } from "react"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignInButton({
  provider,
  className,
  children,
}: {
  provider: string
  className: string
  children: ReactNode
}) {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") as string

  return (
    <Button
      onClick={() => signIn(provider, { callbackUrl: callbackUrl })}
      className={className}
    >
      {children}
    </Button>
  )
}
