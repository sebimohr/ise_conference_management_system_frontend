import React from "react";
import ReviewListPage from "@/app/components/review/reviewListPage";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {getReviewList} from "@/app/helpers/fetchReviewHelper";

const pageState = ReviewStateEnum.open

export default async function Page() {
  const data = await getReviewList(pageState)

  return (
    <div>
      <ReviewListPage state={pageState} paperList={data}/>
    </div>
  );
}
