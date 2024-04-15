import {Paper} from "./dataStructure/Paper";
import {ReviewPaperDto} from "./dataStructure/ReviewPaperDto";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export default class ApiServiceMock {
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
      ReviewStateEnum.open,
      undefined);
}
