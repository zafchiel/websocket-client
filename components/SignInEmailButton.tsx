import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

export default function SignInEmailButton({ email }: { email: string }) {
  return (
    <Button className="w-full" onClick={() => signIn("email", { email })}>
      Send magic sign in link
    </Button>
  )
}
