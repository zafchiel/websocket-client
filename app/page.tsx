"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { io, Socket } from "socket.io-client"
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

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:4000"
)

export default function HomePage() {
  const [username, setUsername] = useState("")
  const [roomName, setRoomName] = useState("")

  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    socket.emit("join_room", { username, roomName })

    router.push(`/room/${roomName}`)
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <RoomsList socket={socket} />
      <div className="flex flex-col text-black">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
      </div>
    </main>
  )
}
