"use client";

import React from "react";
import { CircularProgress } from "@nextui-org/react";

/**
 * The page that gets displayed when the app is loading.
 * For example on async sites that request data from the backend.
 */
export default function Loading() {
  return (
    <div className={"h-full w-full flex justify-center items-center"}>
      <CircularProgress size={"lg"} aria-label="Loading..." />
    </div>
  );
}
