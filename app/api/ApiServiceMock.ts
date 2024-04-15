import {Paper} from "./dataStructure/Paper";
import {ReviewPaperDto} from "./dataStructure/ReviewPaperDto";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export default class ApiServiceMock {
  public static loginMock: boolean = true;
  public static openReviewsMock: Paper[] = [
    {
      id: "1",
      title: "Sample Paper 1 - Open",
      authors: ["Author A", "Author B"],
      keywords: ["keyword1", "keyword2"],
      paperAbstract: "This is the abstract for Sample Paper 1.",
      submissionAuthor: "John Doe",
      submissionDate: new Date("2024-04-04"),
      pdf: "",
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
      pdf: "",
      conference: "Conference Y",
      reviewerComments: []
    },
  ];

  public static submittedReviewsMock: Paper[] = [
    {
      id: "3",
      title: "Sample Paper 3 - Submitted",
      authors: ["Author A", "Author B"],
      keywords: ["keyword1", "keyword2"],
      paperAbstract: "This is the abstract for Sample Paper 1.",
      submissionAuthor: "John Doe",
      submissionDate: new Date("2024-04-04"),
      pdf: "",
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
      pdf: "",
      conference: "Conference Y",
      reviewerComments: []
    },
  ];

  public static singleReviewMock: ReviewPaperDto =
    new ReviewPaperDto(
      "id1",
      new Paper("5",
                "Sample Paper 5 - Draft",
                ["Author A", "Author B"],
                ["keyword1", "keyword2"],
                "This is the abstract for Sample Paper 1.",
                "John Doe",
                new Date("2024-04-04"),
                "",
                "Conference X",
                [
                  "This paper sucks",
                  "This paper really sucks",
                  "I don't think this paper sucks",
                  "I love this paper",
                ]),
      new Date("2024-04-04"),
      1,
      "Test reviewDetails",
      "testReviewComment",
      ReviewStateEnum.open);
}
