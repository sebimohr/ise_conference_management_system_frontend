import React from "react";
import ReviewForm from "@/app/components/review/reviewForm";
import { getSingleReview } from "@/app/helpers/fetchReviewHelper";
import dynamic from "next/dynamic";

// importing pdfViewer component dynamically, as it's a client component
const PdfViewerClient = dynamic(
  () => import("@/app/components/review/pdfView"),
  { ssr: false }
);

/**
 * The review page for editing and submitting reviews.
 */
export default async function Page({
  params,
}: {
  params: { reviewId: string };
}) {
  const currentReviewDto = await getSingleReview(params.reviewId);

  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <PdfViewerClient paper={currentReviewDto.paper.pdf} />
      <ReviewForm currentReview={currentReviewDto} />
    </div>
  );
}
