import RoomsList from "@/components/RoomsList"
import BubbleWrapper from "@/components/BubbleWrapper"
import PlayerSection from "@/components/PlayerSection"

export default function HomePage() {
  return (
    <>
      <BubbleWrapper />
      <main className="flex h-screen w-full flex-col items-center justify-around md:flex-row">
        <PlayerSection />
        <RoomsList />
      </main>
    </>
  )
}
