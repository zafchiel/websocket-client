"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"

export default function SessionContent() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Button onClick={() => signIn()}>Sign In</Button>
      </>
    )
  }

  return (
    <>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  )
}
