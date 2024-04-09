'use client'

import React from "react";

export default function Headline(props: {headline: string}) {
  return (
    <p className={"text-4xl"}>{props.headline}</p>
  );
}
