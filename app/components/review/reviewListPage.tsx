import React from "react";
import Headline from "@/app/components/review/headline";
import ReviewPaperList from "@/app/components/review/reviewPaperList";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";
import ApiService from "@/app/api/ApiService";
import ApiServiceMock from "@/app/api/ApiServiceMock";

export default async function ReviewListPage(props: { state: ReviewStateEnum }) {
  // TODO: check paper fetching
  const apiService = ApiService.getInstance();
  let paperList: PaperDto[] = ApiServiceMock.openReviewsMock;

  // await apiService.getReviewsEndpoint(props.state)
  //                 .then(data => paperList = data);

  let currentSiteName = () => {
    switch (props.state) {
    case ReviewStateEnum.open:
      return "Open";
    case ReviewStateEnum.draft:
      return "Draft";
    case ReviewStateEnum.submitted:
      return "Submitted";
    }
  }

  return (
    <div className={"pt-8"}>
      <Headline headline={`Your ${currentSiteName()} Reviews`}/>
      <ReviewPaperList reviewState={props.state}/>
    </div>
  );
}
