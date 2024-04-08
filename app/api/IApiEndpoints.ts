import {LoginDto} from "@/app/api/dataStructure/LoginDto";
import {PaperDto} from "@/app/api/dataStructure/PaperDto"
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";
import {SingleReviewDto} from "@/app/api/dataStructure/SingleReviewDto";
import {PaperReviewsDto} from "@/app/api/dataStructure/PaperReviewsDto";

export interface IApiEndpoints {
  authenticateUserEndpoint(userDto: LoginDto): Promise<boolean>

  // getUserProfileEndpoint(): Promise<any> --> TODO: only implement if time left

  getOpenReviewsEndpoint(): Promise<PaperDto[]>

  getSubmittedReviewsEndpoint(): Promise<PaperDto[]>

  getDraftReviewsEndpoint(): Promise<PaperDto[]>

  getSingleReviewEndpoint(paperId: string): Promise<SingleReviewDto>

  postReviewEndpoint(reviewDto: ReviewDto): Promise<any>

  getPaperReviewsEndpoint(paperId: string): Promise<PaperReviewsDto>
}
