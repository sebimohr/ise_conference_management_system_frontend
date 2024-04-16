/**
 * This enum lists all the endpoints that can be accessed in the backend.
 */
export enum EndpointEnum {
  authorizeRoute = "/user/authorize", // used for user authorization
  ownOpenReviewsRoute = "/reviews/open", // used for getting all open reviews
  ownSubmittedReviewsRoute = "/reviews/submitted", // used for getting all reviews of currently logged-in user
  ownDraftsReviewsRoute = "/reviews/draft", // used for getting all saved drafts
  singleReviewRoute = "/review", // + reviewId, used for getting incomplete draft review data or submitted review data & also for posting review input
  paperReviewsRoute = "/reviews", // + paperId, used for getting all reviews for a single paper
}
