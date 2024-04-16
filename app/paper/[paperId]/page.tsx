import React from "react";
import {getPaperWithAllReviews} from "@/app/helpers/fetchReviewHelper";
import dynamic from "next/dynamic";
import PaperReviewsList from "@/app/components/paper/paperReviewsList";

// importing pdfViewer component dynamically, as it's a client component
const PdfViewerClient = dynamic(
  () => import("@/app/components/review/pdfView"),
  { ssr: false }
);

/**
 * The single paper page.
 */
export default async function Page({
  params,
}: {
  params: { paperId: string };
}) {
  const reviewList = await getPaperWithAllReviews(params.paperId);
  console.log(reviewList);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="w-full gap-4">
        <p className="text-center text-3xl">{reviewList[0].paper.title}</p>
      </div>
      <div className="grid w-full space-x-4 lg:grid-cols-2">
        <PdfViewerClient paper={reviewList[0].paper.pdf} />
        <PaperReviewsList reviewList={reviewList} />
      </div>
    </div>
  );
}
