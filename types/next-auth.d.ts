import { Role } from "@prisma/client";
import type NextAuth, { User } from "next-auth";
import "next-auth/jwt";

type UserId = string;

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: Role;
      user: User & {
        id: UserId;
      };
    };
  }
}
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: UserId;
    role: Role;
  }
}
