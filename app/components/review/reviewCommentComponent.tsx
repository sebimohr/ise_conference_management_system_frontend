'use client'

import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/react";

export default function ReviewCommentComponent(props: {reviewComment: ReviewComment}) {
  return (
    <Card key={props.reviewComment.id}>
      <CardHeader>
        <div className={"flex flex-col"}>
          <p className="text-md">{props.reviewComment.author}</p>
          <p className="text-small">{props.reviewComment.date.toDateString()}</p>
        </div>
      </CardHeader>
      <CardBody>
        {props.reviewComment.comment}
      </CardBody>
    </Card>
  );
}
