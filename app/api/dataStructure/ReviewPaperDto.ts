import {Paper} from "./Paper";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export class ReviewPaperDto {
  constructor(id: string,
              paper: Paper,
              reviewDate: Date,
              rating: number,
              reviewDetails: string,
              reviewComment: string,
              reviewState: ReviewStateEnum,
              user?: ReviewAuthor) {
    this.id = id;
    this.paper = paper;
    this.reviewDate = reviewDate;
    this.rating = rating;
    this.reviewDetails = reviewDetails;
    this.reviewComment = reviewComment;
    this.reviewState = reviewState;
    this.user = user;
  }

  id: string
  paper: Paper
  reviewDate: Date
  rating: number
  reviewDetails: string
  reviewComment: string // the comment of the current reviewer
  user?: ReviewAuthor
  reviewState: ReviewStateEnum
}
