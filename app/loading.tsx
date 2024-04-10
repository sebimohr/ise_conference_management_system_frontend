'use client'

import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className={"h-full w-full flex justify-center items-center"}>
      <CircularProgress size={"lg"} aria-label="Loading..."/>
    </div>
  );
}
