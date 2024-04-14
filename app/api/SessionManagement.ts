'use server'

import {cookies} from 'next/headers'
import {AUTH_SESSION_KEY} from "@/app/api/Constants";

export async function setSessionData(sessionData: any) {
  // TODO: encrypt sessionData
  cookies().set(AUTH_SESSION_KEY, sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 10, // 10 min
    path: '/',
  })
}

export const getAuthSessionKey = async () => {
  return cookies().get(AUTH_SESSION_KEY)?.value;
}

export const removeAuthSessionKey = async () => {
  cookies().delete(AUTH_SESSION_KEY);
}
