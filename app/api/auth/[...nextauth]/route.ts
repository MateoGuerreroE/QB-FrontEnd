import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { UserData } from "@/app/types/UserData";
import { CustomJWT, SignedUserResponse } from "../types";

const handler = NextAuth({
  providers: [
    // CONSIDER HERE MFA FLAG FOR SECOND AUTH STEP

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Correo electrónico",
          type: "text",
          placeholder: "ejemplo@email.com",
        },
        password: { label: "Contraseña", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        const { email, password } = credentials || {};
        if (!email || !password) {
          return null;
        }
        const url = process.env.BE_URL + "/auth/login";
        try {
          const { data: response } = await axios.post(url, {
            emailAddress: email,
            password,
          });
          const user: UserData = response.data;
          return {
            id: user.userId,
            email: user.emailAddress,
            token: user.token,
          };
        } catch (error: unknown) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = (user as SignedUserResponse).token;
      }
      return token;
    },
    session: ({ session, token }): Session => {
      session.user = {
        name: token.sub,
        email: token.email,
        // @ts-ignore
        accessToken: token.accessToken as CustomJWT,
      };
      return session;
    },
  }, // TODO IMPLEMENT HERE TYPED SESSION AND JWT BASED ON DATA STRUCT,
  // CONSIDER HERE MFA FLAG FOR SECOND AUTH STEP
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
