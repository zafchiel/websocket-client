import SignInButton from "@/components/SignInButton"
import Google from "@/assets/icons/Google"
import Reddit from "@/assets/icons/Reddit"
import SignInEmail from "@/components/SignInEmail"

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <section className="flex w-52 flex-col items-center justify-center gap-5 md:w-full md:max-w-2xl">
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
        <div className="flex w-full items-center justify-evenly gap-3 before:block before:h-px before:w-auto before:grow before:bg-primary after:block after:h-px after:w-auto after:grow after:bg-primary">
          OR
        </div>
        <SignInEmail />
      </section>
    </main>
  )
}
