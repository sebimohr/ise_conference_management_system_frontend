/**
 * This data class is used inside the ReviewPaperDto, it gets filled by the response when requesting reviews.
 */
export class Paper {
  id: string;
  title: string;
  authors: string[];
  keywords: string[];
  paperAbstract: string;
  submissionAuthor: string;
  submissionDate: Date;
  pdf: string;
  conference: string;
  reviewerComments: string[];

  constructor(
    id: string,
    title: string,
    authors: string[],
    keywords: string[],
    paperAbstract: string,
    submissionAuthor: string,
    submissionDate: Date,
    pdf: string,
    conference: string,
    reviewerComments: string[]
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.keywords = keywords;
    this.paperAbstract = paperAbstract;
    this.submissionAuthor = submissionAuthor;
    this.submissionDate = submissionDate;
    this.pdf = pdf;
    this.conference = conference;
    this.reviewerComments = reviewerComments;
  }
}
