"use client"

import { ChangeEvent, useState } from "react"
import SignInEmailButton from "@/components/SignInEmailButton"
import { Input } from "@/components/ui/input"

export default function SignInEmail() {
  const [email, setEmail] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => [
    setEmail(e.target.value),
  ]

  return (
    <div className="w-full">
      <Input
        className="mb-2 w-full"
        value={email}
        onChange={handleChange}
        type="email"
        placeholder="example@example.com"
      />
      <SignInEmailButton email={email} />
    </div>
  )
}
