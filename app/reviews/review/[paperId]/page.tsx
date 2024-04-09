// 'use client'

import React from "react";
import PdfView from "@/app/components/review/pdfView";
import ReviewForm from "@/app/components/review/reviewForm";
import {Skeleton} from "@nextui-org/react";
import {getDataForPaperReview} from "@/app/reviews/dataFetchingHelper";

export default async function Page({params}: { params: { paperId: string } }) {
  // const [isLoading, setIsLoading] = useState(true);

  let currentReviewDto = await getDataForPaperReview(params.paperId).then(reviewDto => {
    // setIsLoading(false);
    return reviewDto;
  });

  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <Skeleton isLoaded={true}>
        <PdfView paper={currentReviewDto.paper.paperAbstract}/> // TODO: replace paper with pdf, also in component
        <ReviewForm currentReview={currentReviewDto}/>
      </Skeleton>
    </div>
  );
}
