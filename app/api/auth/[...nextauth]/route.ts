import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Adapter } from "next-auth/adapters"

const prisma = new PrismaClient()

const handler = NextAuth({
  adapter: <Adapter>PrismaAdapter(prisma),
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID as string,
      clientSecret: process.env.REDDIT_CLIENT_SECRET as string,
    }),
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
