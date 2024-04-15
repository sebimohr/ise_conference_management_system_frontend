import React from "react";
import {getPaperWithAllReviews} from "@/app/helpers/fetchReviewHelper";
import dynamic from "next/dynamic";
import PaperReviewsList from "@/app/components/paper/paperReviewsList";

// importing pdfViewer component dynamically, as it's a client component
const PdfViewerClient = dynamic(() => import ("@/app/components/review/pdfView"), {ssr: false})

export default async function Page({params}: { params: { paperId: string } }) {
  const currentReviewDto = await getPaperWithAllReviews(params.paperId)

  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <PdfViewerClient paper={currentReviewDto[0].paper.pdf}/>
      <PaperReviewsList/>
    </div>
  );
}
