# Needed endpoints for frontend-backend communication

The following endpoints are needed for the frontend to work:

- authorize endpoint: `/user/authorize`

  - This endpoint should authorize the user
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "email": string,
        "password": string
      }
    ```

  - the return should be:
    - 200 (OK - login successful) -> **including authentication key!**
    - 400 (Bad Request - login unsuccessfull)

- profile endpoint: `/user/profile`

  - This endpoint returns user informations
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "auth-key": string // -> or different format?
      }
    ```

  - the return should be:

    - 200 (OK) -> response DTO should have user information
    - 404 (Not found)

- open reviews endpoint: `/review/open`

  - This endpoint should show all reviews that are open for the current user
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "auth-key": string // -> or different format?
      }
    ```

  - the return should include a DTO with all open reviews with basic information
    (id, title, abstract, date, author, conference, ...)

- submitted reviews endpoint: `/review/submitted`

  - This endpoint should show all reviews that are submitted by the current user
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "auth-key": string // -> or different format?
      }
    ```

  - the return should include a DTO with all submitted reviews with basic information (here with author)
    (id, title, abstract, date, author, conference, ...)

- drafts reviews endpoint: `/review/drafts`

  - This endpoint should show all reviews that are in the drafts state by the current user
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "auth-key": string // -> or different format?
      }
    ```

  - the return should include a DTO with all drafted reviews with basic information
    (id, title, abstract, date, author, conference, review data, ...)

- single review endpoint: `/review/{ID}`

  - `{ID}` is the ID of the paper that should be reviewed
  - This endpoint should show the review that the user can edit,
    either with the draft information or empty comments, review, rating...
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "auth-key": string // -> or different format?
      }
    ```

  - the return should include a DTO that includes all information about the paper, including the review data in draft state
    (id, title, STATE, abstract, pdf, date, author, conference, review data, ...)
    - the return dto has to tell if the paper is currently in draft, submitted or open state
    - the endpoint should also accept post requests, where a new draft state or review submission can be saved
      (should return 200, 201, 202, 403)

- paper reviews endpoint: `/paper/{ID}`

  - `{ID}` is the ID of the paper that should be reviewed
  - This endpoint should show the reviews on a specific paper
  - the DTO for this endpoint should look something like this:

    ```json
      {
        "auth-key": string // -> or different format?
      }
    ```

  - the return should include a DTO that has all the information about the paper, including all of the reviews on this paper
    (id, title, abstract, date, author, conference, reviews ...)

> All endpoints should also be able to return `403 unauthorized`
> if the user tries to get information he shouldn't get
