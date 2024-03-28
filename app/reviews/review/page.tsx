import React from "react";
import PdfView from "@/app/reviews/review/pdfView";
import ReviewForm from "@/app/reviews/review/reviewForm";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 w-full space-x-4">
      <PdfView/>
      <ReviewForm/>
    </div>
  );
}
