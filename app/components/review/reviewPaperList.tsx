// 'use client'

import React from "react";
import PaperCard from "@/app/components/review/paperCard";
import { ReviewStateEnum } from "@/app/api/dataStructure/ReviewStateEnum";
import { ReviewPaperDto } from "@/app/api/dataStructure/ReviewPaperDto";

/**
 * Shows cards for all viewable or reviewable reviews.
 */
export default function ReviewPaperList(props: {
  paperList: ReviewPaperDto[];
}) {
  const isReviewable =
    props.paperList[0].reviewState == ReviewStateEnum.draft ||
    props.paperList[0].reviewState == ReviewStateEnum.open;

  return (
    <div
      className={"grid mt-8 w-full gap-4 place-content-stretch lg:grid-cols-2"}
    >
      {props.paperList.map((paperDto) => (
        <PaperCard
          key={paperDto.id}
          reviewPaperDto={paperDto}
          isReviewable={isReviewable}
        />
      ))}
    </div>
  );
}
