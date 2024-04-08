export class PaperDto {
  id: string
  title: string
  authors: string[]
  keywords: string[]
  abstract: string
  submissionAuthor: string
  submissionDate: Date
  // pdf: string
  conference: string
  reviewerComments: ReviewComment[]

  constructor(id: string,
              title: string,
              authors: string[],
              keywords: string[],
              abstract: string,
              submissionAuthor: string,
              submissionDate: Date,
              // pdf: string,
              conference: string,
              reviewerComments: ReviewComment[]) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.keywords = keywords;
    this.abstract = abstract;
    this.submissionAuthor = submissionAuthor;
    this.submissionDate = submissionDate;
    // this.pdf = pdf;
    this.conference = conference;
    this.reviewerComments = reviewerComments;
  }
}
