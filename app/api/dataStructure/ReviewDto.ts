export class ReviewDto {
  constructor(paperId: string, reviewDate: Date, rating: number, reviewDetails: string, comments: ReviewComment[], reviewState: ReviewStateEnum) {
    this.paperId = paperId;
    this.reviewDate = reviewDate;
    this.rating = rating;
    this.reviewDetails = reviewDetails;
    this.comments = comments;
    this.reviewState = reviewState;
  }

  paperId: string
  reviewDate: Date
  rating: number
  reviewDetails: string
  comments: ReviewComment[]
  reviewState: ReviewStateEnum
}
