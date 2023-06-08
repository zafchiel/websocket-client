import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { io, Socket } from "socket.io-client"

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:4000"
)

interface BearState {
  socket: Socket
}

export const useSocketStore = create<BearState>()(
  devtools(
    persist(
      (set, get) => ({
        socket,
      }),
      {
        name: "socket-storage",
      }
    )
  )
)
