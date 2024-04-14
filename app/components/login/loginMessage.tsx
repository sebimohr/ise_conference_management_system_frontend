'use client'

import React from "react";
import {Card, CardBody} from "@nextui-org/react";

export default function LoginMessage(props: { message: string }) {
  return (
    <Card className={"w-full bg-red-300"}>
      <CardBody>
        <p>{props.message}</p>
      </CardBody>
    </Card>);
}
