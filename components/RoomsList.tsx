import { useRoomsStore } from "@/lib/store"
import { Dispatch, SetStateAction } from "react"

type Props = {
  setRoomName: Dispatch<SetStateAction<string>>
}

export default function RoomsList({ setRoomName }: Props) {
  const rooms = useRoomsStore((state) => state.roomsList)

  return (
    <section className="flex flex-col items-center justify-start gap-2">
      <div>
        <h2>Rooms List</h2>
      </div>
      {rooms.map((room) => (
        <div
          key={room}
          onClick={() => setRoomName(room)}
          className="cursor-pointer rounded-md border p-1"
        >
          {room}
        </div>
      ))}
    </section>
  )
}
