"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

/**
 * Shows a single reviewer comment.
 */
export default function ReviewCommentComponent(props: {
  reviewComment: string;
  id: number;
}) {
  return (
    <Card key={props.id} className={"m-4"}>
      <CardHeader>
        <div className={"flex flex-col"}>
          <p className="text-md">Comment #{props.id}</p>
        </div>
      </CardHeader>
      <CardBody>{props.reviewComment}</CardBody>
    </Card>
  );
}
