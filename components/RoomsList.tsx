import { useSocketStore } from "@/lib/store"
import { useEffect } from "react"

export default function RoomsList() {
  const socket = useSocketStore((state) => state.socket)

  useEffect(() => {
    socket.on("receive_rooms", async (data) => {
      const { rooms } = await data
      console.log(rooms)
    })
  }, [socket])

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <div>
        <h2>Rooms List</h2>
      </div>
      <div>
        <ul>
          <li>ROOM NAME</li>
          <li>ROOM NAME</li>
          <li>ROOM NAME</li>
          <li>ROOM NAME</li>
          <li>ROOM NAME</li>
          <li>ROOM NAME</li>
        </ul>
      </div>
    </section>
  )
}
