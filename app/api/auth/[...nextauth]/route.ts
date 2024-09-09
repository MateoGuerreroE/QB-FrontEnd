import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

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
          return response.data;
        } catch (error: unknown) {
          return null;
        }
      },
    }),
  ],
  callbacks: {}, // TODO IMPLEMENT HERE TYPED SESSION AND JWT BASED ON DATA STRUCT,
  // CONSIDER HERE MFA FLAG FOR SECOND AUTH STEP
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
