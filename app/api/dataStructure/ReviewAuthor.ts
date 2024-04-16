/**
 * This data class will be filled by the response data from all endpoints returning reviews.
 */
class ReviewAuthor {
  constructor(email: string, id: string) {
    this.email = email;
    this.id = id;
  }
  public email: string;
  public id: string;
}
