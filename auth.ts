import authConfig from "@/auth.config"
import prisma from "@/prisma/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})
