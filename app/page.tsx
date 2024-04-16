import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

/**
 * The homepage.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-stretch w-full h-full space-y-4">
      <UserCircleIcon className="object-cover w-64 h-64 mb-4" radius={"full"} />
      <p className="text-2xl mb-4">Hello USERNAME</p>
      <p className="text-xl">You currently have X papers to review. </p>
    </div>
  );
}
