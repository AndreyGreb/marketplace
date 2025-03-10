import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'

if (!process.env.GOOGLE_CLIENT_ID) {
  throw 'google client id is missing'
}

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
