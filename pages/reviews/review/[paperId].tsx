import React from "react";
import {ApiServiceInstance} from "@/app/api/ApiServiceInstance";
import {SingleReviewDto} from "@/app/api/dataStructure/SingleReviewDto";
import PdfView from "@/app/reviews/components/pdfView";
import ReviewForm from "@/app/reviews/components/reviewForm";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const paperId = context.params!.paperId as string;
  const apiService = ApiServiceInstance.getInstance();

  let currentReviewDto: SingleReviewDto = await apiService.getSingleReviewEndpoint(paperId)
                                                          .then((value: SingleReviewDto) => currentReviewDto = value);

  // will be passed to the page component as props
  return {props: {currentReviewDto}};
}

export default function Page(props: { currentReviewDto: SingleReviewDto }) {
  return (
    <div className="grid w-full space-x-4 lg:grid-cols-2">
      <PdfView paper={props.currentReviewDto.paper.paperAbstract}/> // TODO: replace paper with pdf, also in component
      <ReviewForm currentReview={props.currentReviewDto}/>
    </div>
  );
}
