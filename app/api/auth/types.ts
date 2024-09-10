import { ISODateString, User } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export interface SignedUserResponse extends User {
  token: string;
}

export interface CustomJWT extends Record<string, unknown>, DefaultJWT {
  token: string;
}
