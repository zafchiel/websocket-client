import NextAuth, { NextAuthOptions } from "next-auth"
import RedditProvider from "next-auth/providers/reddit"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Adapter } from "next-auth/adapters"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
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
    // ----------- NEED DOMAIN NAME FOR IT TO WORK ---------------- //
    //   EmailProvider({
    //     server: {
    //       host: process.env.EMAIL_SERVER_HOST as string,
    //       port: process.env.EMAIL_SERVER_PORT as string,
    //       auth: {
    //         user: process.env.EMAIL_SERVER_USER as string,
    //         pass: process.env.EMAIL_SERVER_PASSWORD as string,
    //       },
    //     },
    //     from: process.env.EMAIL_FROM as string,
    //   }),
  ],
  pages: {
    signIn: "/signin",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
