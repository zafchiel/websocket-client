"use client"

import { useRoomsStore, useSelectedRoom } from "@/lib/store"
import { useContext } from "react"
import { CursorEventsContext } from "./CustomCursor"
import { cn } from "@/lib/utils"

export default function RoomsList() {
  const selectRoom = useSelectedRoom((state) => state.selectRoom)
  const selectedRoom = useSelectedRoom((state) => state.selectedRoom)
  const rooms = useRoomsStore((state) => state.roomsList)
  const cursorEvents = useContext(CursorEventsContext)

  return (
    <section className="flex flex-col items-center justify-start gap-2">
      <div>
        <h2>Rooms List</h2>
      </div>
      {rooms.map((room, index) => (
        <div
          onMouseEnter={cursorEvents?.mouseOverEvent}
          onMouseLeave={cursorEvents?.mouseOutEvent}
          key={index}
          onClick={() => selectRoom(room)}
          className={cn(
            "felx w-24 cursor-pointer items-center justify-center rounded-md border p-1 font-bold uppercase tracking-wide hover:bg-slate-600",
            {
              "bg-slate-400": room === selectedRoom,
            }
          )}
        >
          <p className="text-center">{room}</p>
        </div>
      ))}
    </section>
  )
}
