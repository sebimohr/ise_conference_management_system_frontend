'use client'

import React, {useState} from "react";
import {Button, Slider, Textarea, useDisclosure} from "@nextui-org/react";
import {ApiServiceInstance} from "@/app/api/ApiServiceInstance";
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";
import {SingleReviewDto} from "@/app/api/dataStructure/SingleReviewDto";
import ReviewCommentsModal from "@/app/components/review/reviewCommentsModal";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";

export default function ReviewForm(props: { currentReview: SingleReviewDto }) {
  const apiServiceInstance = ApiServiceInstance.getInstance();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    apiServiceInstance.postReviewEndpoint(new ReviewDto(
      "",
      new Date(),
      rating,
      review,
      comment,
      reviewState
    )).then(() => {
              setIsLoading(false);
              // TODO: notify user about progress
            }
    );
  }

  return (
    <div className="space-y-8">
      <Slider
        size="lg"
        label="Rating"
        showSteps={true}
        step={1}
        maxValue={2}
        minValue={-2}
        // fillOffset={0}
        defaultValue={rating}
        onChange={handleRatingSliderInput}
        classNames={{
          base: "w-full",
          filler: "bg-gradient-to-r from-red-300 to-green-300 dark:from-red-600 dark:to-green-800",
        }}
      />
      <Textarea
        isRequired
        className="w-full"
        label="Review"
        labelPlacement="outside"
        placeholder="Write your review here..."
        minRows={3}
        maxRows={8}
        description="Your review will be displayed to everyone with access to the paper."
        value={review}
        onValueChange={(val) => setReview(val)}
      />
      <div className="flex-rowa space-x-4">
        <Textarea
          className="w-full"
          label="Comment"
          labelPlacement="outside"
          placeholder="Write your comment here..."
          minRows={1}
          maxRows={3}
          description="Your comment will only be visible by other reviewers."
          value={comment}
          onValueChange={(val) => setComment(val)}
        />
        <Button onPress={onOpen}>Comments</Button>
        <ReviewCommentsModal isOpen={isOpen}
                             onOpenChange={onOpenChange}
                             reviewComments={props.currentReview.paper.reviewerComments}/>
      </div>
      <div className="flex w-full justify-between">
        <Button
          isLoading={isLoading}
          onClick={handleSaveDraft}>
          Save Draft
        </Button>
        <Button
          isLoading={isLoading}
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
    ;
}
