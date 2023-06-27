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
    <>
      <div className="relative w-full">
        <div className="absolute top-full mt-2 rounded-md bg-red-500 p-2 font-bold tracking-wide">
          <p>it will not work, I need a domain</p>
          <p>Sign in with OAuth instead</p>
        </div>
        <Input
          className="mb-2 w-full"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="example@example.com"
        />
        <SignInEmailButton email={email} />
      </div>
    </>
  )
}
