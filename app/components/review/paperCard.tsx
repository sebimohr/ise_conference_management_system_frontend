import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Link} from "@nextui-org/react";
import {DocumentIcon} from "@heroicons/react/24/outline";
import {ROUTE_REVIEWS} from "@/app/components/home/routes";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";

export default function PaperCard(props: { reviewPaperDot: ReviewPaperDto, isReviewable: boolean }) {
  const redirectURL = (props.isReviewable ? `${ROUTE_REVIEWS}/review/` : '/paper/') + props.reviewPaperDot.id
  const paper = props.reviewPaperDot.paper


  return (
    <Card
      className="w-full space-y-5 p-4"
      radius="lg">
      <CardHeader className="flex gap-3">
        <DocumentIcon
          height={40}
          width={40}
          radius="sm"
        />
        <div className="flex flex-col ps-2 gap-2">
          <p className="text-md">{paper.title}</p>
          <div className="flex flex-row gap-2">
            {paper.keywords
                  .map(keyword => <Chip key={keyword} variant="flat">{keyword}</Chip>)
            }
          </div>
          <p className={"text-sm text-start"}>Author: {paper.submissionAuthor}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className={"text-sm"}>{paper.paperAbstract}</p>
        {/*  TODO: add rating when props.isReviewable is false */}
      </CardBody>
      <CardFooter className={"h-16"}>
        <Button className={"w-full h-full"}
                as={Link}
                href={redirectURL}>{props.isReviewable ? "Start Review" : "Show Reviews"}</Button>
      </CardFooter>
    </Card>);
}
