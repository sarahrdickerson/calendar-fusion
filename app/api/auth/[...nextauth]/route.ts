import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


import prisma from "@/app/libs/prismadb";
import { PrismaClient, User } from '@prisma/client'; // Import your Prisma client and User type

// const prisma = new PrismaClient(); // Instantiate Prisma Client


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                  scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
                  access_type: "offline",
                //   prompt: "consent",
                }
            },
        }),
    ],
    // debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    },
    secret: process.env.JWT_SECRET as string,
    pages: {
        signIn: "/",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
