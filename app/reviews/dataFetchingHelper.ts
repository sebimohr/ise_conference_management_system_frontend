import {ApiServiceInstance} from "@/app/api/ApiServiceInstance";
import {PaperDto} from "@/app/api/dataStructure/PaperDto";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {SingleReviewDto} from "@/app/api/dataStructure/SingleReviewDto";

export async function getDataForPaperList(paperListState: ReviewStateEnum) {
  return await ApiServiceInstance.getInstance()
                                 .getReviewsEndpoint(paperListState)
                                 .then((value: PaperDto[]) => value);
}

export async function getDataForPaperReview(paperId: string) {
  return await ApiServiceInstance.getInstance()
                                 .getSingleReviewEndpoint(paperId)
                                 .then((value: SingleReviewDto) => value);
}

