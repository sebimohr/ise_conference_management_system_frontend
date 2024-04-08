import {PaperDto} from "./PaperDto";
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";

export class PaperReviewsDto {
  constructor(paper: PaperDto, reviews: ReviewDto[]) {
    this.paper = paper;
    this.reviews = reviews;
  }

  paper: PaperDto
  reviews: ReviewDto[]
}
