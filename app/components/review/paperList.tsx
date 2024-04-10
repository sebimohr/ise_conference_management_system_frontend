'use client'

import React from "react";
import PaperCard from "@/app/components/review/paperCard";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";

export default function PaperList(props: { papers: PaperDto[], isReviewable: boolean }) {
  return (
    <div className={"grid mt-8 w-full gap-4 place-content-stretch lg:grid-cols-2"}>
      {props.papers.map(paperDto =>
                          <PaperCard key={paperDto.id}
                                     paperDto={paperDto}
                                     isReviewable={props.isReviewable}/>
      )}
    </div>
  );
}
