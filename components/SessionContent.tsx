"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import Image from "next/image"

export default function SessionContent() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <>
        <Button onClick={() => signIn()}>Sign In</Button>
      </>
    )
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Profile</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="p-3">
          {session.user?.image && (
            <DropdownMenuItem className="flex items-center justify-center">
              <Image
                alt="profile-pic"
                src={session?.user?.image as string}
                className="h-16 w-16 rounded-full"
                height={50}
                width={50}
              />
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>{session?.user?.name}</DropdownMenuItem>
          <DropdownMenuItem>{session?.user?.email}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <Button className="w-full" onClick={() => signOut()}>
            Sign Out
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
