import React from "react";
import Headline from "@/app/components/review/headline";
import PaperList from "@/app/components/review/paperList";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";
import ApiServiceMock from "@/app/api/ApiServiceMock";

export default function ReviewListPage(props: { state: ReviewStateEnum }) {
  // TODO: check paper fetching

  let currentSiteName: string;
  let paperList: PaperDto[];

  switch (props.state) {
    case ReviewStateEnum.open:
      currentSiteName = "Open";
      paperList = ApiServiceMock.openReviewsMock;
      break;
    case ReviewStateEnum.draft:
      currentSiteName = "Draft";
      paperList = ApiServiceMock.draftReviewsMock;
      break;
    case ReviewStateEnum.submitted:
      currentSiteName = "Submitted";
      paperList = ApiServiceMock.submittedReviewsMock;
      break;
  }

  return (
    <div>
      <Headline headline={`Your ${currentSiteName} Reviews`}/>
      <PaperList papers={paperList}
                 isReviewable={props.state in [ReviewStateEnum.draft, ReviewStateEnum.open]}/>
    </div>
  );
}
