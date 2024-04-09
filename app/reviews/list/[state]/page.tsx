import React from "react";
import Headline from "@/app/components/review/headline";
import PaperList from "@/app/components/review/paperList";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import handleError, {severityEnum} from "@/app/helpers/errorHandler";
import {Skeleton} from "@nextui-org/react";
import {getDataForPaperList} from "@/app/reviews/dataFetchingHelper";

const allowedStates = ["open", "draft", "submitted"];

export default async function Page({params}: { params: { state: string } }) {
  // const [isLoading, setIsLoading] = useState(true);

  const stateAsLowerCase = params.state.toLowerCase();
  if (!(stateAsLowerCase in allowedStates)) {
    return handleError(severityEnum.error, `The requested site '/reviews/${stateAsLowerCase}' does not exist!`)
  }

  let requestedState: ReviewStateEnum = ReviewStateEnum.open;
  switch (stateAsLowerCase) {
    case(allowedStates[0]):
      requestedState = ReviewStateEnum.open;
      break;
    case(allowedStates[1]):
      requestedState = ReviewStateEnum.draft;
      break;
    case(allowedStates[2]):
      requestedState = ReviewStateEnum.submitted;
      break;
  }

  let paperList = await getDataForPaperList(requestedState).then(papers => {
    // setIsLoading(false);
    return papers;
  });

  let currentSiteName = stateAsLowerCase.charAt(0).toUpperCase() + stateAsLowerCase.slice(1);
  return (
    <div>
      <Headline headline={`Your ${currentSiteName} Reviews`}/>
      <Skeleton isLoaded={true}>
        <PaperList papers={paperList} isReviewable={requestedState in [ReviewStateEnum.draft, ReviewStateEnum.open]}/>
      </Skeleton>
    </div>
  );
}
