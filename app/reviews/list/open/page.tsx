import React from "react";
import ReviewListPage from "@/app/components/review/reviewListPage";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export default function Page() {
  return (
    <div>
      <ReviewListPage state={ReviewStateEnum.open}/>
    </div>
  );
}
