"use client"

import { useSocketStore } from "@/lib/store"
import { FormEvent, useRef, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import RoomsList from "@/components/RoomsList"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"
import { Sun, Moon } from "lucide-react"

export default function HomePage() {
  const socket = useSocketStore((state) => state.socket)
  const [roomName, setRoomName] = useState("")
  const { theme, setTheme } = useTheme()

  const { toast } = useToast()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputRef.current?.value) {
      toast({
        variant: "destructive",
        title: "Please provide username",
      })
      inputRef.current?.focus()
      return
    }

    if (!roomName) {
      toast({
        variant: "destructive",
        title: "Please select room",
      })
      return
    }

    const username = inputRef.current?.value

    socket.emit("join_room", { username, roomName })

    router.push(`/room/${roomName}`)
  }

  return (
    <main className="flex h-screen w-full items-center justify-around">
      <div className="fixed left-5 top-5 ">
        <Toggle
          variant="outline"
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </Toggle>
      </div>
      <RoomsList />
      <section className=" text-black">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input type="text" placeholder="Enter your name" ref={inputRef} />
          <Select onValueChange={(field) => setRoomName(field)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Rooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full">
            Join
          </Button>
        </form>
      </section>
    </main>
  )
}
