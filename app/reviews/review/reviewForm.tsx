'use client'

import React, {useState} from "react";
import {Button, Input, Slider} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [comment, setComment] = useState('');

  const handleSaveDraft = () => {
    // handle draft saving here
    // should draft be saved when textField is unfocused?
  };

  const handleSubmit = () => {
    // handle form submission here
  };

  return (
    <div className="space-y-8">
      <Slider
        size="lg"
        step={1}
        color="foreground"
        label="Rating"
        showSteps={true}
        maxValue={2}
        minValue={-2}
        fillOffset={0}
        defaultValue={0}
        classNames={{
          base: "w-full",
          filler: "bg-gradient-to-r from-red-300 to-green-300 dark:from-red-600 dark:to-green-800",
        }}/>
      <Textarea
        isRequired
        label="Review"
        labelPlacement="outside"
        className="w-full"
        placeholder="Write your review here..."
        minRows={3}
        maxRows={8}
        description="Enter the your paper review here."
        value={review}
        onValueChange={(val) => setReview(val)}
      />
      <Input
        className="w-full"
        label="Comment"
        labelPlacement="outside"
        placeholder="Write your comment here..."
        value={comment}
        onValueChange={(val) => setComment(val)}
      />
      <div className="flex w-full justify-between">
        <Button onClick={handleSaveDraft}>
          Save Draft
        </Button>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
