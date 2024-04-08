'use client'

import React, {useState} from "react";
import {Button, Popover, PopoverContent, PopoverTrigger, Slider, Textarea} from "@nextui-org/react";
import {ApiServiceInstance} from "@/app/api/ApiServiceInstance";
import {ReviewDto} from "@/app/api/dataStructure/ReviewDto";

export default function ReviewForm() {
  const apiServiceInstance = ApiServiceInstance.getInstance();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    apiServiceInstance.postReviewEndpoint(new ReviewDto(
      "",
      new Date(),
      rating,
      review,
      [],
      reviewState
    ));
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
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button>Comments</Button>
          </PopoverTrigger>
          <PopoverContent>
            {(titleProps) => (
              <div className="px-1 py-2">
                <h3 className="text-small font-bold" {...titleProps}>
                  Other reviewers comments
                </h3>
                <div className="text-tiny">This is the popover content</div>
              </div>
            )}
          </PopoverContent>
        </Popover></div>
      <div className="flex w-full justify-between">
        <Button onClick={handleSaveDraft}>
          Save Draft
        </Button>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
    ;
}
