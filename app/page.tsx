import React from "react";
import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-stretch w-full h-full space-y-4">
      <Image
        className="object-cover w-64 aspect-square mb-4"
        radius={"full"}
        alt="profilePhoto"
        isZoomed={true}
        src="https://app.requestly.io/delay/2000/https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <p className="text-2xl mb-4">Hello USERNAME</p>
      <p className="text-xl">You currently have __X__ papers to review. </p>
    </div>
  )
}
