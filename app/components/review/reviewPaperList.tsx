// 'use client'

import React from "react";
import PaperCard from "@/app/components/review/paperCard";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";

export default function ReviewPaperList(props: { reviewState: ReviewStateEnum, paperList: ReviewPaperDto[] }) {
  const isReviewable = props.reviewState in [ReviewStateEnum.draft, ReviewStateEnum.open];

  return (
    <div className={"grid mt-8 w-full gap-4 place-content-stretch lg:grid-cols-2"}>
      {props.paperList.map(paperDto =>
                             <PaperCard key={paperDto.id}
                                        reviewPaperDot={paperDto}
                                        isReviewable={isReviewable}/>
      )}
    </div>
  );
}
