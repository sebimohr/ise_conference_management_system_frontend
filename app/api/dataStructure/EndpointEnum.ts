export enum endpointEnum {
  authorizeRoute = "/user/authorize", // used for user authorization
  ownProfileRoute = "/user/profile", // used for profile data
  ownOpenReviewsRoute = "/review/open", // used for getting all open reviews
  ownSubmittedReviewsRoute = "/review/submitted", // used for getting all reviews of currently logged-in user
  ownDraftsReviewsRoute = "/review/drafts", // used for getting all saved drafts
  singleReviewRoute = "/review/{ID}", // used for getting incomplete draft review data or submitted review data & also for posting review input
  paperReviewsRoute = "/paper/{ID}"// used for getting all reviews on a single paper, including paper data
}
