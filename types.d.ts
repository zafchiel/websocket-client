interface ServerToClientEvents {
  on(event: string, callback: (data: any) => void)
  emit(event: string, data: any)
}

interface ClientToServerEvents {
  join_room: ({ username: string, roomName: string }) => void
}

interface User {
  id: string
  username: string
  room: string
}
