import { io, Socket } from "socket.io-client"

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:4000"
)

type Props = {
  params: { roomName: string }
}

function RoomPage({ params: { roomName } }: Props) {
  return <div>{roomName}</div>
}

export default RoomPage
