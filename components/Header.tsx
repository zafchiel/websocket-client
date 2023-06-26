import ThemeSwitch from "@/components/ui/theme-switch"
import SessionContent from "./SessionContent"

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex h-fit items-center justify-between p-5">
      <ThemeSwitch />
      <SessionContent />
    </div>
  )
}
