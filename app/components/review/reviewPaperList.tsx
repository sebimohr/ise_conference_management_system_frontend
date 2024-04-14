'use client'

import React, {useEffect, useState} from "react";
import PaperCard from "@/app/components/review/paperCard";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import Loading from "@/app/loading";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";
import ApiService from "@/app/api/ApiService";

const apiService = ApiService.getInstance()

export default function ReviewPaperList(props: { reviewState: ReviewStateEnum }) {
  const [paperList, setPaperList] = useState<PaperDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isReviewable = props.reviewState in [ReviewStateEnum.draft, ReviewStateEnum.open];

  if (paperList.length == 0)
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

  if (isLoading)
    return <Loading/>
  else if (paperList.length == 0)
    return <p>No reviews assigned yet.</p>

  return (
    <div className={"grid mt-8 w-full gap-4 place-content-stretch lg:grid-cols-2"}>
      {paperList.map(paperDto =>
                       <PaperCard key={paperDto.id}
                                  paperDto={paperDto}
                                  isReviewable={isReviewable}/>
      )}
    </div>
  );
}
