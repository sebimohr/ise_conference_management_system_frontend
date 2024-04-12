'use client'

import React from "react";
import PdfView from "@/app/components/review/pdfView";
import ReviewForm from "@/app/components/review/reviewForm";
import ApiServiceMock from "@/app/api/ApiServiceMock";

export default function Page({params}: { params: { paperId: string } }) {
  // const [isLoading, setIsLoading] = useState(true);

  let currentReviewDto = ApiServiceMock.singleReviewMock;

  console.log(params.paperId);

  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <PdfView paper={currentReviewDto.paper.pdf}/> {/* TODO: replace paper with pdf, also in component*/}
      <ReviewForm currentReview={currentReviewDto}/>
    </div>
  );
}
