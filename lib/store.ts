import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { io, Socket } from "socket.io-client"

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:4000"
)

interface SocketState {
  socket: Socket
}

export const useSocketStore = create<SocketState>()(
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

interface RoomsState {
  roomsList: string[]
  updateRooms: (rooms: string[]) => void
}

export const useRoomsStore = create<RoomsState>()((set) => ({
  roomsList: [],
  updateRooms: (rooms) => set({ roomsList: rooms }),
}))

interface SelectedRoom {
  selectedRoom: string
  selectRoom: (room: string) => void
}

export const useSelectedRoom = create<SelectedRoom>()((set) => ({
  selectedRoom: "",
  selectRoom: (room) => set({ selectedRoom: room }),
}))
