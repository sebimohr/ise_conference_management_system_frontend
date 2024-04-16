"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

/**
 * The providers, currently only including the NextUI provider that includes the router.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
