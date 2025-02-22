// NextJS
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Services
import { signIn } from "@services/auth";

export const authOptions: NextAuthOptions = {
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token as never;
            return session;
        },
    },
    pages: {
        error: "/",
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return;

                const { email, password } = credentials;

                const res = await signIn();

                const user = res?.data?.find((user: IUser) => user.email === email && user.password === password);

                console.log(user);

                if (!user) throw new Error("Invalid credentials");

                return user;
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};
