import { useEffect } from "react"
import { Socket } from "socket.io-client"

type Props = {
  socket: Socket
}

export default function RoomsList({ socket }: Props) {
  useEffect(() => {}, [socket])
  return <div>RoomsList</div>
}
