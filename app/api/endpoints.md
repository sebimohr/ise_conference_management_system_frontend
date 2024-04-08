# Needed endpoints for frontend-backend communication

The following endpoints are needed for the frontend to work:

## Endpoint for user authorization

- authorize endpoint: `/user/authorize`

  - This endpoint should authorize the user
  - the body for this endpoint should look something like this:

    ```json
      {
        "email": <string>,
        "password": <string>
      }
    ```

  - the return should be:
    - 200 (OK - login successful) -> **including authentication key!**
    - 400 (Bad Request - login unsuccessfull)

## Endpoint for reviews that are still open, in draft state or submitted

These endpoints all share the same data structure which they should return. It should look like this:

  ```typescript
class PaperDto {
  id: string
  title: string
  authors: string[]
  keywords: string[]
  abstract: string
  submissionAuthor: string
  submissionDate: Date
  pdf: string // TODO: URL? or file? Still has to be decided on!!
  conference: string // not important
  reviewerComments: ReviewComments[]
}

class ReviewComments {
  id: string
  time: Date
  author: string
  comment: string
}
  ```

All the endpoints should receive a body that includes a userToken, so they can authorize the user:

```json
{
  // this string is the authToken, that gets returned from the authorizationEndpoint 
  "authToken": string
}
```

- open reviews endpoint: `/review/open`

  - This endpoint should show all reviews that are open for the current user
  - The return should be of type `PaperDto[]`

- submitted reviews endpoint: `/review/submitted`

  - This endpoint should show all reviews that are submitted by the current user
  - The return should be of type `PaperDto[]`

- drafts reviews endpoint: `/review/drafts`

  - This endpoint should show all reviews that are in the drafts state by the current user
  - The return should be of type `PaperDto[]`

## SingleReviewEndpoint

This endpoint should only show a single paper with a review:

```typescript
class SingleReviewDto {
  "paper": PaperDto // see the upper dataStructure
  "review": ReviewDto
}

class ReviewDto {
  paperId: string
  reviewDate: Date
  rating: number
  reviewDetails: string
  reviewComment: string // the comment of the current reviewer
  reviewState: ReviewStateEnum
}

enum ReviewStateEnum {
  open,
  draft,
  submitted
}
```

- single review endpoint: `/review/{ID}`

  - `{ID}` is the ID of the paper that should be reviewed
  - This endpoint should show the review that the user can edit,
    either with the draft information or empty comment, review, rating...
  - The return should be of type `SingleReviewDto`

  - __the endpoint should also accept post requests, where a new draft state or review submission can be saved__

## Paper reviews endpoint

This endpoint should show all submitted reviews for a single paper, it returns the following data structure:

```typescript
class PaperReviewsDto {
  paper: PaperDto
  reviews: ReviewDto[]
}
```

- paper reviews endpoint: `/paper/{ID}`

  - `{ID}` is the ID of the paper that should be reviewed
  - This endpoint should show the reviews on a specific paper
  - The return should be of type `PaperReviewsDto`

> All endpoints should also be able to return `403 unauthorized`
> if the user tries to get information he shouldn't get
