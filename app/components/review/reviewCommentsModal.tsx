'use client'

import React from "react";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import ReviewCommentComponent from "@/app/components/review/reviewCommentComponent";

export default function ReviewCommentsModal(props: {
  isOpen: boolean,
  onOpenChange: () => void,
  reviewComments: string[]
}) {
  let reviewCommentNumber = 0;

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
          <ul className={"gap-4"}>
            {props.reviewComments.map(comment => {
                                        reviewCommentNumber++;
                                        return <li key={reviewCommentNumber}>
                                          <ReviewCommentComponent reviewComment={comment} id={reviewCommentNumber}/>
                                        </li>
                                      }
            )}
          </ul>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
