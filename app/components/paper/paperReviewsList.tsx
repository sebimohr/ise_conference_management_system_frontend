import React from "react";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";

export default function PaperReviewsList(props: { reviewList: ReviewPaperDto[] }) {
  return (
    <div className="flex gap-8">
      {props.reviewList.map(review => <></>)}
    </div>
  );
}
