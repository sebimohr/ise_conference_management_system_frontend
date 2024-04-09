import React from "react";
import {Card, CardBody, CardHeader, Chip, Divider} from "@nextui-org/react";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";
import {DocumentIcon} from "@heroicons/react/24/outline";
import {router} from "next/client";

export default function PaperCard(props: { paperDto: PaperDto, isReviewable: boolean }) {
  return (
    <Card
      isBlurred
      isPressable
      onPress={() => router.push((props.isReviewable ? '/reviews/review/' : '/paper/') + props.paperDto.id)}
      className="w-full space-y-5 p-4"
      radius="lg">
      <CardHeader className="flex gap-3">
        <DocumentIcon
          height={40}
          width={40}
          radius="sm"
        />
        <div className="flex flex-col">
          <p className="text-md">{props.paperDto.title}</p>
          <div className="flex flex-row space-2">
            {props.paperDto
                  .keywords
                  .map(keyword => <Chip variant="flat">{keyword}</Chip>)}
          </div>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className={"text-sm"}>{props.paperDto.paperAbstract}</p>
        {/*  TODO: add rating when props.isReviewable is false */}
      </CardBody>
    </Card>);
}
