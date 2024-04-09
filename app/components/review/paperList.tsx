'use client'

import React from "react";
import PaperCard from "@/app/components/review/paperCard";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";

export default function PaperList(props: {papers: PaperDto[], isReviewable: boolean}) {
  return (
    <div>
      <ul>
        {props.papers.map(paperDto => <PaperCard paperDto={paperDto} isReviewable={props.isReviewable}/>)}
      </ul>
    </div>
  );
}
