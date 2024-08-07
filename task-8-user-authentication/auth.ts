import { AuthOptions, getServerSession } from "next-auth";

const authOptions: AuthOptions = {
providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
]
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }
