import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// NextAuth configuration
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // This runs after successful sign in
    async session({ session, token }) {
      // Add user ID to session so we can use it in our app
      session.user.id = token.sub;
      return session;
    },
