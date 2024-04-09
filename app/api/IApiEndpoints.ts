import {LoginDto} from "@/app/api/dataStructure/LoginDto";
import {PaperDto} from "@/app/api/dataStructure/PaperDto"
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";
import {SingleReviewDto} from "@/app/api/dataStructure/SingleReviewDto";
import {PaperReviewsDto} from "@/app/api/dataStructure/PaperReviewsDto";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export interface IApiEndpoints {
  authenticateUserEndpoint(userDto: LoginDto): Promise<boolean>

  getReviewsEndpoint(reviewState: ReviewStateEnum): Promise<PaperDto[]>

  getSingleReviewEndpoint(paperId: string): Promise<SingleReviewDto>

  postReviewEndpoint(reviewDto: ReviewDto): Promise<any>

  getPaperReviewsEndpoint(paperId: string): Promise<PaperReviewsDto>
}
