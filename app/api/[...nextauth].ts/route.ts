import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    // RedditProvider({
    //   clientId: process.env.REDDIT_CLIENT_ID as string,
    //   clientSecret: process.env.REDDIT_CLIENT_SECRET as string,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
})

export { handler as GET, handler as POST }
