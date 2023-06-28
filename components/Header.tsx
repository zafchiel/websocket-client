import { Suspense } from "react"
import ThemeSwitch from "@/components/ui/theme-switch"
import SessionContent from "./SessionContent"
import Link from "next/link"
import { Skeleton } from "./ui/skeleton"

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex h-fit items-center justify-between p-5">
      <Suspense fallback={<Skeleton className="h-10 w-10" />}>
        <ThemeSwitch />
      </Suspense>
      <div>
        <Link href="/" className="text-4xl font-extrabold">
          LOGO
        </Link>
      </div>
      <Suspense fallback={<Skeleton className="h-10 w-20" />}>
        <SessionContent />
      </Suspense>
    </div>
  )
}
