import { useSocketStore } from "@/lib/store"
import { useEffect, useState, Dispatch, SetStateAction } from "react"

type Props = {
  setRoomName: Dispatch<SetStateAction<string>>
}

export default function RoomsList({ setRoomName }: Props) {
  const socket = useSocketStore((state) => state.socket)
  const [roomsList, setRoomsList] = useState<string[]>([])

  useEffect(() => {
    socket.on("receive_rooms", async (data) => {
      const { rooms } = await data
      setRoomsList(rooms)
    })
  }, [socket])

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <div>
        <h2>Rooms List</h2>
      </div>
      <div>
        <ul>
          {roomsList.map((room) => (
            <li key={room} onClick={() => setRoomName(room)}>
              {room}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
