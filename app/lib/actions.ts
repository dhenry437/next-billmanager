"use server";

import { signOut } from "@/auth";

export const signOutAsync = async () => {
  await signOut({ redirectTo: "/" });
};
