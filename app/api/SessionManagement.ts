"use server";

import { cookies } from "next/headers";
import { AUTH_SESSION_KEY } from "@/app/api/Constants";

/**
 * This function sets a new cookie for authentication.
 *
 * @param sessionData: The authentication key.
 */
export async function setSessionData(sessionData: any) {
  // TODO: encrypt sessionData
  cookies().set(AUTH_SESSION_KEY, sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10, // 10 min
    path: "/",
  });
}

/**
 * This function gets the session key for authentication with the backend.
 *
 * @returns The authentication key.
 */
export const getAuthSessionKey = async () => {
  return cookies().get(AUTH_SESSION_KEY)?.value;
};

/**
 * This funciton removes the authentication key cookie..
 */
export const removeAuthSessionKey = async () => {
  cookies().delete(AUTH_SESSION_KEY);
};
