import SignInButton from "@/components/SignInButton"

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <section className="flex w-44 flex-col items-center justify-center gap-5">
        <SignInButton provider="google" className="w-full">
          Sign-In with Google
        </SignInButton>
        <SignInButton provider="reddit" className="w-full">
          Sign-In with Reddit
        </SignInButton>
      </section>
    </main>
  )
}
