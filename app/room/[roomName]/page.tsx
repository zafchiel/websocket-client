"use client"

import { useSocketStore } from "@/lib/store"
import { useEffect, useState } from "react"

type Props = {
  params: { roomName: string }
}

function RoomPage({ params: { roomName } }: Props) {
  const socket = useSocketStore((state) => state.socket)
  const [username, setUsername] = useState("")
  const [roomUsers, setRoomUsers] = useState<User[]>([])

  useEffect(() => {
    socket.on("welcome_message", async (data) => {
      await data
      setUsername(data.username)
    })

    socket.on("join_message", async (data) => {
      await data
      console.log(data.message)
    })

    socket.on("room_users", async (data) => {
      await data
      setRoomUsers(data)
    })
  }, [socket])
  return (
    <main className="flex h-screen items-center justify-center">
      <section className="flex flex-col gap-5">
        <div>
          <h1>{username + " Welcome to " + roomName}</h1>
        </div>
        <div>
          <h3>Current room users:</h3>
          {roomUsers.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default RoomPage
