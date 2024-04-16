import React from "react";
import { ReviewPaperDto } from "@/app/api/dataStructure/ReviewPaperDto";
import ReviewCard from "@/app/components/paper/reviewCard";

/**
 * This list shows all the reviews for the current paper.
 */
export default function PaperReviewsList(props: {
  reviewList: ReviewPaperDto[];
}) {
  return (
    <div className={"h-[750px] overflow-auto"}>
      <div className="flex flex-col gap-8">
        {props.reviewList.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
}
