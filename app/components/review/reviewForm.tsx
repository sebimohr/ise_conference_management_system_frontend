'use client'

import React, {useState} from "react";
import {Button, Slider, Textarea, useDisclosure} from "@nextui-org/react";
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";
import ReviewCommentsModal from "@/app/components/review/reviewCommentsModal";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import ApiService from "@/app/api/ApiService";

export default function ReviewForm(props: { currentReview: ReviewPaperDto }) {
  const [rating, setRating] = useState(props.currentReview.rating ?? 0);
  const [reviewDetails, setReviewDetails] = useState(props.currentReview.reviewDetails ?? "");
  const [reviewComment, setReviewComment] = useState(props.currentReview.reviewComment ?? "");

  const [isPosting, setIsPosting] = useState(false);

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleRatingSliderInput = (newRatingValue: number | number[]) => {
    let ratingValueNumber = rating;

    // this will never happen, as the slider is always returning a number, but is needed for compilation
    if (Array.isArray(newRatingValue))
      ratingValueNumber = newRatingValue[0];

    setRating(ratingValueNumber);
  }

  const handleSaveDraft = () => {
    sendPostRequestForReviewToBackend(ReviewStateEnum.draft);
  };

  const handleSubmit = () => {
    sendPostRequestForReviewToBackend(ReviewStateEnum.submitted);
  };

  const sendPostRequestForReviewToBackend = (reviewState: ReviewStateEnum) => {
    setIsPosting(true);
    ApiService.getInstance().postReviewEndpoint(new ReviewDto(
      props.currentReview.paper.id,
      new Date(),
      rating,
      reviewDetails,
      reviewComment,
      reviewState
    ), props.currentReview.id).then(() => {
      setIsPosting(false);
      // TODO: notify user about progress
    });
  }

  return (
    <div className="space-y-8">
      <Slider
        size="lg"
        label="Rating"
        isDisabled={isPosting}
        showSteps={true}
        step={1}
        maxValue={2}
        minValue={-2}
        fillOffset={0}
        defaultValue={rating}
        onChange={handleRatingSliderInput}
        classNames={{
          base: "w-full",
          filler: "bg-gradient-to-r from-red-300 to-green-300 dark:from-red-600 dark:to-green-800",
        }}
      />
      <Textarea
        isRequired
        isDisabled={isPosting}
        className="w-full"
        label="Review"
        labelPlacement="outside"
        placeholder="Write your review here..."
        minRows={3}
        maxRows={8}
        description="Your review will be displayed to everyone with access to the paper."
        value={reviewDetails}
        onValueChange={(val) => setReviewDetails(val)}
      />
      <div className="flex-rowa space-x-4">
        <Textarea
          isDisabled={isPosting}
          className="w-full"
          label="Comment"
          labelPlacement="outside"
          placeholder="Write your comment here..."
          minRows={1}
          maxRows={3}
          description="Your comment will only be visible by other reviewers."
          value={reviewComment}
          onValueChange={(val) => setReviewComment(val)}
        />
        <Button onPress={onOpen}>Comments</Button>
        <ReviewCommentsModal isOpen={isOpen}
                             onOpenChange={onOpenChange}
                             reviewComments={props.currentReview.paper.reviewerComments}/>
      </div>
      <div className="flex w-full justify-between">
        <Button
          isLoading={isPosting}
          onClick={handleSaveDraft}>
          Save Draft
        </Button>
        <Button
          isLoading={isPosting}
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
    ;
}
