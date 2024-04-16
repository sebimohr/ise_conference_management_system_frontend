import React from "react";
import {getPaperWithAllReviews} from "@/app/helpers/fetchReviewHelper";
import dynamic from "next/dynamic";
import PaperReviewsList from "@/app/components/paper/paperReviewsList";

// importing pdfViewer component dynamically, as it's a client component
const PdfViewerClient = dynamic(() => import ("@/app/components/review/pdfView"), {ssr: false})

export default async function Page({params}: { params: { paperId: string } }) {
  const reviewList = await getPaperWithAllReviews(params.paperId)

  return (
    <div className="flex w-full gap-4">
      <div className="w-full gap-4">
        <p>{reviewList[0].paper.title}</p>
        {/* TODO: Add paper details */}
      </div>
      <div className="grid w-full space-x-4 lg:grid-cols-2">
        <PdfViewerClient paper={reviewList[0].paper.pdf}/>
        <PaperReviewsList reviewList={reviewList}/>
      </div>
    </div>
  );
}
