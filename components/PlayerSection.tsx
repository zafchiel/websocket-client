"use client"

import { useSocketStore, useRoomsStore, useSelectedRoom } from "@/lib/store"
import { FormEvent, useEffect, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PlayerSection() {
  const socket = useSocketStore((state) => state.socket)
  const rooms = useRoomsStore((state) => state.roomsList)
  const updateRooms = useRoomsStore((state) => state.updateRooms)
  const selectedRoom = useSelectedRoom((state) => state.selectedRoom)
  const selectRoom = useSelectedRoom((state) => state.selectRoom)

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

    if (!selectedRoom) {
      toast({
        variant: "destructive",
        title: "Please select room",
      })
      return
    }

    const username = inputRef.current?.value

    socket.emit("join_room", { username, selectedRoom })

    router.push(`/room/${selectedRoom}`)
  }

  useEffect(() => {
    socket.on("receive_rooms", async (data) => {
      const { rooms } = await data
      updateRooms(rooms)
    })
  }, [socket])

  return (
    <section className=" text-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Enter your name"
          ref={inputRef}
          className="text-primary"
        />
        <Select
          value={selectedRoom}
          defaultValue="light"
          onValueChange={(field) => selectRoom(field)}
        >
          <SelectTrigger className="w-full text-primary">
            <SelectValue placeholder="Rooms" />
          </SelectTrigger>
          <SelectContent>
            {rooms.map((room) => (
              <SelectItem key={room} value={room}>
                {room}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">
          Join
        </Button>
      </form>
    </section>
  )
}
