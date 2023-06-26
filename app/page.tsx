"use client"

import { useSocketStore, useRoomsStore } from "@/lib/store"
import { FormEvent, useRef, useEffect, useState, useContext } from "react"
import {
  CursorEventsContext,
  CursorEventsContextInterface,
} from "@/components/CustomCursor"
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
import BubbleWrapper from "@/components/BubbleWrapper"

export default function HomePage() {
  const socket = useSocketStore((state) => state.socket)
  const updateRooms = useRoomsStore((state) => state.updateRooms)
  const [roomName, setRoomName] = useState("light")
  const [roomsList, setRoomsList] = useState<string[]>([])

  const cursorEvents = useContext(
    CursorEventsContext
  ) as CursorEventsContextInterface

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

  useEffect(() => {
    socket.on("receive_rooms", async (data) => {
      const { rooms } = await data
      setRoomsList(rooms)
      updateRooms(rooms)
    })
  }, [socket])

  return (
    <>
      <BubbleWrapper />
      <main className="flex h-screen w-full items-center justify-around">
        <div className="min-h-[400px]">
          <RoomsList setRoomName={setRoomName} />
        </div>
        <section className=" text-black">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Enter your name"
              ref={inputRef}
              className="text-primary"
            />
            <Select
              value={roomName}
              defaultValue="light"
              onValueChange={(field) => setRoomName(field)}
            >
              <SelectTrigger className="w-full text-primary">
                <SelectValue placeholder="Rooms" />
              </SelectTrigger>
              <SelectContent>
                {roomsList.map((room) => (
                  <SelectItem key={room} value={room}>
                    {room}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              type="submit"
              className="w-full"
              onMouseOver={cursorEvents.mouseOverEvent}
              onMouseOut={cursorEvents.mouseOutEvent}
            >
              Join
            </Button>
          </form>
        </section>
      </main>
    </>
  )
}
