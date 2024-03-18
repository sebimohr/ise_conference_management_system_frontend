import React from "react";
import {Button} from "@nextui-org/react";
import {
  AcademicCapIcon,
  ArrowLeftEndOnRectangleIcon,
  BookOpenIcon,
  CogIcon,
  HomeIcon,
  UserIcon
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="border-solid border-r-primary border-2 h-dvh space-y-4">
      <Button className={"w-full"} variant={"flat"} color={"default"} startContent={<HomeIcon/>}>
        Home
      </Button>
      <Button className={"w-full"} variant={"flat"} color={"default"} startContent={<BookOpenIcon/>}>
        Papers
      </Button>
      <Button className={"w-full"} variant={"flat"} color={"default"} startContent={<AcademicCapIcon/>}>
        Reviews
      </Button>
      <hr className="my-2 border-blue-gray-50"/>
      <Button className={"w-full"} variant={"flat"} color={"default"} startContent={<UserIcon/>}>
        Profile
      </Button>
      <Button className={"w-full"} variant={"flat"} color={"default"} startContent={<CogIcon/>}>
        Settings
      </Button>
      <Button className={"w-full"} variant={"flat"} color={"default"} startContent={<ArrowLeftEndOnRectangleIcon/>}>
        Logout
      </Button>
    </div>
  );
}
