import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // TODO ADD AXIOS FETCH HERE TO BACKEND.
        return { user: "Hello", id: "1", email: "hellomoto@email.com" };
      },
    }),
  ],
  callbacks: {}, // TODO IMPLEMENT HERE TYPED SESSION AND JWT BASED ON DATA STRUCT,
  // CONSIDER HERE MFA FLAG FOR SECOND AUTH STEP
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
