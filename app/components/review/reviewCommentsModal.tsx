'use client'

import React from "react";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import ReviewCommentComponent from "@/app/components/review/reviewCommentComponent";

export default function ReviewCommentsModal(props: {
  isOpen: boolean,
  onOpenChange: () => void,
  reviewComments: ReviewComment[]
}) {
  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      scrollBehavior={"outside"}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Other reviewers comments
        </ModalHeader>
        <ModalBody>
          <ul>
            {props.reviewComments.map(comment => <li><ReviewCommentComponent reviewComment={comment}/></li>)}
          </ul>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
