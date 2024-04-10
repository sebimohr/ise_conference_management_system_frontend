import {PaperDto} from "./dataStructure/PaperDto";
import {PaperReviewsDto} from "./dataStructure/PaperReviewsDto";
import {ReviewDto} from "./dataStructure/ReviewDto";
import {SingleReviewDto} from "./dataStructure/SingleReviewDto";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export default class ApiServiceMock {
  public static loginMock: boolean = true;
  public static openReviewsMock: PaperDto[] = [
    {
      id: "1",
      title: "Sample Paper 1 - Open",
      authors: ["Author A", "Author B"],
      keywords: ["keyword1", "keyword2"],
      paperAbstract: "This is the abstract for Sample Paper 1.",
      submissionAuthor: "John Doe",
      submissionDate: new Date("2024-04-04"),
      conference: "Conference X",
      reviewerComments: []
    },
    {
      id: "2",
      title: "Sample Paper 2 - Open",
      authors: ["Author C", "Author D"],
      keywords: ["keyword3", "keyword4"],
      paperAbstract: "This is the abstract for Sample Paper 2.",
      submissionAuthor: "Jane Smith",
      submissionDate: new Date("2024-04-05"),
      conference: "Conference Y",
      reviewerComments: []
    },
  ];

  public static submittedReviewsMock: PaperDto[] = [
    {
      id: "3",
      title: "Sample Paper 3 - Submitted",
      authors: ["Author A", "Author B"],
      keywords: ["keyword1", "keyword2"],
      paperAbstract: "This is the abstract for Sample Paper 1.",
      submissionAuthor: "John Doe",
      submissionDate: new Date("2024-04-04"),
      conference: "Conference X",
      reviewerComments: []
    },
    {
      id: "4",
      title: "Sample Paper 4 - Submitted",
      authors: ["Author C", "Author D"],
      keywords: ["keyword3", "keyword4"],
      paperAbstract: "This is the abstract for Sample Paper 2.",
      submissionAuthor: "Jane Smith",
      submissionDate: new Date("2024-04-05"),
      conference: "Conference Y",
      reviewerComments: []
    },
  ];

  public static draftReviewsMock: PaperDto[] = [
    {
      id: "5",
      title: "Sample Paper 5 - Draft",
      authors: ["Author A", "Author B"],
      keywords: ["keyword1", "keyword2"],
      paperAbstract: "This is the abstract for Sample Paper 1.",
      submissionAuthor: "John Doe",
      submissionDate: new Date("2024-04-04"),
      conference: "Conference X",
      reviewerComments: []
    },
    {
      id: "6",
      title: "Sample Paper 6 - Draft",
      authors: ["Author C", "Author D"],
      keywords: ["keyword3", "keyword4"],
      paperAbstract: "This is the abstract for Sample Paper 2.",
      submissionAuthor: "Jane Smith",
      submissionDate: new Date("2024-04-05"),
      conference: "Conference Y",
      reviewerComments: []
    },
  ];

  public static singleReviewMock: SingleReviewDto =
    new SingleReviewDto(
      new PaperDto("5",
                   "Sample Paper 5 - Draft",
                   ["Author A", "Author B"],
                   ["keyword1", "keyword2"],
                   "This is the abstract for Sample Paper 1.",
                   "John Doe",
                   new Date("2024-04-04"),
                   "Conference X",
                   []),
      new ReviewDto("5",
                    new Date("2024-04-04"),
                    0,
                    "",
                    "",
                    ReviewStateEnum.open));

  public static paperReviewsMock: PaperReviewsDto =
    new PaperReviewsDto(
      new PaperDto("5",
                   "Sample Paper 5 - Draft",
                   ["Author A", "Author B"],
                   ["keyword1", "keyword2"],
                   "This is the abstract for Sample Paper 1.",
                   "John Doe",
                   new Date("2024-04-04"),
                   "Conference X",
                   []),
      [
        {
          paperId: "5",
          reviewDate: new Date("2024-04-04"),
          rating: 2,
          reviewDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          reviewComment: "comment",
          reviewState: ReviewStateEnum.submitted
        },
        {
          paperId: "5",
          reviewDate: new Date("2024-04-04"),
          rating: 0,
          reviewDetails: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          reviewComment: "comment",
          reviewState: ReviewStateEnum.submitted
        },
        {
          paperId: "5",
          reviewDate: new Date("2024-04-04"),
          rating: -1,
          reviewDetails: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          reviewComment: "comment",
          reviewState: ReviewStateEnum.submitted
        },
        {
          paperId: "5",
          reviewDate: new Date("2024-04-04"),
          rating: 1,
          reviewDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          reviewComment: "comment",
          reviewState: ReviewStateEnum.draft
        },
      ]);
}
