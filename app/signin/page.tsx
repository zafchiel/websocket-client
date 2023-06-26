import SignInButton from "@/components/SignInButton"
import Google from "@/assets/icons/Google"
import Reddit from "@/assets/icons/Reddit"

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <section className="flex w-52 flex-col items-center justify-center gap-5">
        <SignInButton
          provider="google"
          className="flex w-full items-center justify-center gap-2"
        >
          <Google size={24} />
          Sign-In with Google
        </SignInButton>
        <SignInButton
          provider="reddit"
          className="flex w-full items-center justify-center gap-2"
        >
          <Reddit size={25} />
          Sign-In with Reddit
        </SignInButton>
      </section>
    </main>
  )
}
