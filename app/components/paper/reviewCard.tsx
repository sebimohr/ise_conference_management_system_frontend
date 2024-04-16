"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ReviewPaperDto } from "@/app/api/dataStructure/ReviewPaperDto";

/**
 * The reviewCard shows one review.
 */
export default function ReviewCard(props: { review: ReviewPaperDto }) {
  const paperAccepted = () => {
    if (props.review.rating < 0) {
      return " bg-rose-100";
    } else if (props.review.rating == 0) {
      return " bg-amber-100";
    } else {
      return " bg-teal-100";
    }
  };

  return (
    <Card
      key={props.review.id}
      className={"w-full space-y-5 p-4" + paperAccepted()}
      isHoverable={true}
      radius="lg"
    >
      <CardHeader className="flex gap-3">
        <PencilSquareIcon height={40} width={40} radius="sm" />
        <div className="flex flex-col ps-2 gap-2">
          <p className="text-md">
            Author: {props.review.user ? props.review.user.email : "You"}
          </p>
          <p className={"text-sm text-start"}>
            Date: {props.review.reviewDate.toString().slice(0, 10)}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className={"text-sm"}>{props.review.reviewDetails}</p>
      </CardBody>
      <CardFooter>
        <p className="text-md">Rating: {props.review.rating}</p>
      </CardFooter>
    </Card>
  );
}
