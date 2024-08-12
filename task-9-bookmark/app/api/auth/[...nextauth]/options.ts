import { signIn } from "next-auth/react";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiBaseUrl } from "next-auth/client/_utils";

export const options: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
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
            console.log("the user it ", user);
            return {
              id: user.data.id,
              email: user.data.email,
              name: user.data.name,
              role: user.data.role,
              profileComplete: user.data.profileComplete,
              accessToken: user.data.accessToken,
              refreshToken: user.data.refreshToken,
            };
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
      console.log("this is from sign in", user);
      return true;
    },
    async jwt({ token, user }) {
      console.log("this is from jwt", user);
      console.log("this is token form jwt ", token);
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session = {
        ...session,
        ...token,
      };
      console.log("this is from session", session);

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
