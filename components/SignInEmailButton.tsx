import { Button } from "./ui/button"
import { signIn } from "next-auth/react"
import { Wand2 } from "lucide-react"

export default function SignInEmailButton({ email }: { email: string }) {
  return (
    <Button
      className="flex w-full items-center justify-center gap-2"
      onClick={() => signIn("email", { email })}
    >
      <Wand2 />
      Send magic sign in link
    </Button>
  )
}
