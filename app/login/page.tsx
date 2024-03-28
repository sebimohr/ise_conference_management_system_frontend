'use client'

import React from "react";
import {Button, Input} from "@nextui-org/react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";

export default function Page() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full h-full flex flex-col items-center justify-stretch space-y-8 pt-16">
      <p className="text-2xl">Please Log In</p>
      <form className="flex flex-col space-y-4 w-1/3 min-w-80 h-auto items-center justify-center">
        <Input
          isClearable
          label="Email"
          variant="flat"
          placeholder="Enter your email"
          startContent={
            <EnvelopeIcon className="h-5"/>
          }
          type="email"
          className="w-full"
        />
        <Input
          label="Password"
          variant="flat"
          placeholder="Enter your password"
          startContent={
            <LockClosedIcon className="h-5"/>
          }
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (<EyeSlashFilledIcon/>) : (<EyeFilledIcon/>)}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
        />
        <Button
          className="w-1/2 w-min-80"
          color="default"
          variant="flat">
          Login
        </Button>
      </form>
    </div>
  );
}
