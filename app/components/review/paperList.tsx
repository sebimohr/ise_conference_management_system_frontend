'use client'

import React from "react";
import PaperCard from "@/app/components/review/paperCard";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";

export default function PaperList(props: { papers: PaperDto[], isReviewable: boolean }) {
  return (
    <div>
      <ul className={"grid w-full space-x-4 lg:grid-cols-2"}>
        {props.papers.map(paperDto => <li key={paperDto.id}>
          <PaperCard
            paperDto={paperDto}
            isReviewable={props.isReviewable}/>
        </li>)}
      </ul>
    </div>
  );
}
