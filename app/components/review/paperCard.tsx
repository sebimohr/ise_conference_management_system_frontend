import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Link} from "@nextui-org/react";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";
import {DocumentIcon} from "@heroicons/react/24/outline";

export default function PaperCard(props: { paperDto: PaperDto, isReviewable: boolean }) {
  let redirectURL = (props.paperDto ? '/reviews/review/' : '/paper/') + props.paperDto.id

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
          <p className="text-md">{props.paperDto.title}</p>
          <div className="flex flex-row gap-2">
            {props.paperDto
                  .keywords
                  .map(keyword => <Chip key={keyword} variant="flat">{keyword}</Chip>)
            }
          </div>
          <p className={"text-sm text-start"}>Author: {props.paperDto.submissionAuthor}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className={"text-sm"}>{props.paperDto.paperAbstract}</p>
        {/*  TODO: add rating when props.isReviewable is false */}
      </CardBody>
      <CardFooter className={"h-16"}>
        <Button className={"w-full h-full"}
                as={Link}
                href={redirectURL}>{props.isReviewable ? "Start Review" : "Show Reviews"}</Button>
      </CardFooter>
    </Card>);
}
