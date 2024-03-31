import React from "react";
import PdfView from "@/app/reviews/review/pdfView";
import ReviewForm from "@/app/reviews/review/reviewForm";

export default function Page() {
  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <PdfView/>
      <ReviewForm/>
    </div>
  );
}
