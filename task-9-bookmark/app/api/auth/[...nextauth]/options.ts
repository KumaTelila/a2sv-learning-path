import { signIn } from "next-auth/react";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiBaseUrl } from "next-auth/client/_utils";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const res = await fetch("https://akil-backend.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const user = await res.json();

          if (res.ok && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
      
      async signIn({ user, account, profile, email, credentials }) {
          return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token = {
                    ...token,
                    ...user,
                };
            }
            return token;
        },
        async session({ session, token }) {
          session.user = token;
          return session;
        },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    error: "/auth/login",
    signOut: "/",
  },
};
