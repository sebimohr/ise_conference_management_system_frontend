'use client'

import React from "react";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import ReviewCommentComponent from "@/app/reviews/review/reviewCommentComponent";

export default function ReviewCommentsModal(props:{
  isOpen: boolean,
  onOpenChange: () => void,
  reviewComments: ReviewComment[]
}) {
  let renderedReviewComments = props.reviewComments.map(comment => <li><ReviewCommentComponent reviewComment={comment}/></li>);

  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      scrollBehavior={"outside"}
    >
      <ModalContent>
        {(_) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Other reviewers comments
            </ModalHeader>
            <ModalBody>
              <ul>
                {renderedReviewComments}
              </ul>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
