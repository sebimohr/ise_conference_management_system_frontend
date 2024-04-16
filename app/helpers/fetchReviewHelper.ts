import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import ApiService from "@/app/api/ApiService";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";

const apiService = ApiService.getInstance();

/**
 * Gets all reviews for the requested state from the backend..
 */
export async function getReviewList(state: ReviewStateEnum) {
  const res = await apiService.getReviewsEndpoint(state);

  checkIfResponseIsOk(res);

  let data = (await res.json()) as ReviewPaperDto[];

  return data;
}

/**
 * Gets a single review by its ID from the backend.
 */
export async function getSingleReview(reviewId: string) {
  // Fetch currently viewed review
  const responseReview = await apiService.getSingleReviewEndpoint(reviewId);
  checkIfResponseIsOk(responseReview);

  const reviewData = (await responseReview.json()) as ReviewPaperDto;

  // Fetch all submitted reviews for paper of current review
  const responseAllPaperReviews = await apiService.getPaperReviewsEndpoint(
    reviewData.paper.id
  );
  checkIfResponseIsOk(responseAllPaperReviews);

  const allPaperReviewsData =
    (await responseAllPaperReviews.json()) as ReviewPaperDto[];

  // Add reviewComments to current review
  allPaperReviewsData.forEach((reviewPaper) => {
    // Only add the reviewComment when review is not the currently viewed one and review is already submitted
    if (
      reviewPaper.id != reviewData.id &&
      // && reviewPaper.reviewState == ReviewStateEnum.submitted
      reviewPaper.reviewComment?.length > 0
    ) {
      if (!reviewData.paper.reviewerComments)
        reviewData.paper.reviewerComments = [];
      reviewData.paper.reviewerComments.push(reviewPaper.reviewComment);
    }
  });

  return reviewData;
}

/**
 * Gets a single paper with all its reviews by the paperId.
 */
export async function getPaperWithAllReviews(paperId: string) {
  const res = await apiService.getPaperReviewsEndpoint(paperId);

  checkIfResponseIsOk(res);

  let dataFiltered: ReviewPaperDto[] = [];
  let data = await res.json() as ReviewPaperDto[];

  // filter out only submitted reviews
  data.forEach(paper => {
    if (paper.reviewState == ReviewStateEnum.submitted)
      dataFiltered.push(paper)
  })

  return dataFiltered
}

/**
 * Helps checking if the response is okay.
 */
function checkIfResponseIsOk(res: Response) {
  // When response doesn't return ok, something went wrong on data fetching
  if (!res.ok) {
    console.log("Data fetching failed.");
    throw new Error(res.statusText);
  }
}
