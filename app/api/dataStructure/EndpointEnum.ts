export enum EndpointEnum {
  authorizeRoute = "/user/authorize", // used for user authorization
  ownProfileRoute = "/user/profile", // used for profile data
  ownOpenReviewsRoute = "/reviews/open", // used for getting all open reviews
  ownSubmittedReviewsRoute = "/reviews/submitted", // used for getting all reviews of currently logged-in user
  ownDraftsReviewsRoute = "/reviews/draft", // used for getting all saved drafts
  singleReviewRoute = "/review", // + reviewId, used for getting incomplete draft review data or submitted review data & also for posting review input
  paperRoute = "/papers", // + paperId, used for getting a single paper
  paperReviewsRoute = "/reviews" // + paperId, used for getting all reviews for a single paper
}
