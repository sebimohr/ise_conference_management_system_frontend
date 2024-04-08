import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export class ReviewDto {
  constructor(paperId: string,
              reviewDate: Date,
              rating: number,
              reviewDetails: string,
              reviewComment: string,
              reviewState: ReviewStateEnum) {
    this.paperId = paperId;
    this.reviewDate = reviewDate;
    this.rating = rating;
    this.reviewDetails = reviewDetails;
    this.reviewComment = reviewComment;
    this.reviewState = reviewState;
  }

  paperId: string
  reviewDate: Date
  rating: number
  reviewDetails: string
  reviewComment: string // the comment of the current reviewer
  reviewState: ReviewStateEnum
}
