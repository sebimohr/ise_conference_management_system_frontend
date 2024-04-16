import React from "react";
import Headline from "@/app/components/review/headline";
import ReviewPaperList from "@/app/components/review/reviewPaperList";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";

export default async function ReviewListPage(props: { state: ReviewStateEnum, paperList: ReviewPaperDto[] }) {
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
      {
        props.paperList.length > 0 ?
          <ReviewPaperList paperList={props.paperList}/> :
          <p>No reviews available at the moment.</p>
      }
    </div>
  );
}
