// 'use client'

import React from "react";
import PaperCard from "@/app/components/review/paperCard";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {Paper} from "@/app/api/dataStructure/Paper";
import ApiService from "@/app/api/ApiService";

const apiService = ApiService.getInstance()

export default function ReviewPaperList(props: { reviewState: ReviewStateEnum, paperList: Paper[] }) {
  const isReviewable = props.reviewState in [ReviewStateEnum.draft, ReviewStateEnum.open];

  /*
    const [paperList, setPaperList] = useState<PaperDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      setIsLoading(true)
      apiService.getReviewsEndpoint(props.reviewState)
                .then(res => {
                  return res.json() as Promise<PaperDto[]>
                })
                .then(paperList => {
                  setPaperList(paperList)
                })
      setIsLoading(false)
    })
  */

  return (
    // isLoading ?
    //   <Loading/> :
    <div className={"grid mt-8 w-full gap-4 place-content-stretch lg:grid-cols-2"}>
      {props.paperList.map(paperDto =>
                             <PaperCard key={paperDto.id}
                                        reviewPaperDot={paperDto}
                                        isReviewable={isReviewable}/>
      )}
    </div>
  );
}
