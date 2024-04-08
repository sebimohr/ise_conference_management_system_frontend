import {PaperDto} from "./PaperDto";
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";

export class SingleReviewDto {
  constructor(paper: PaperDto, review: ReviewDto) {
    this.paper = paper;
    this.review = review;
  }

  paper: PaperDto
  review: ReviewDto
}
