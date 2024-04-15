'use client'

import React, {useEffect} from "react";
import PdfView from "@/app/components/review/pdfView";
import ReviewForm from "@/app/components/review/reviewForm";
import {GET} from "@/app/reviews/review/route";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";
import ApiServiceMock from "@/app/api/ApiServiceMock";

export default function Page({params}: { params: { reviewId: string } }) {
  const currentReviewDto = ApiServiceMock.singleReviewMock;

  useEffect(() => {
    GET(params.reviewId).then(async res => {
      let data = await res.json() as ReviewPaperDto
      console.log(data)
    })
  })

  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <PdfView paper={currentReviewDto.paper.pdf}/> {/* TODO: replace paper with pdf, also in component*/}
      <ReviewForm currentReview={currentReviewDto}/>
    </div>
  );
}
