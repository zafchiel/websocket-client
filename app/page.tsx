"use client"

import { FormEvent, useState } from "react"
import { io } from "socket.io-client"

export default function HomePage() {
  const [message, setMessage] = useState("")
  const socket = io("http://localhost:3001")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    socket.emit("chat message", message)
    setMessage("")
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col text-black">
        <div className="h-80 w-80 bg-gray-500"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-gray-500">
            Send
          </button>
        </form>
      </div>
    </main>
  )
}
