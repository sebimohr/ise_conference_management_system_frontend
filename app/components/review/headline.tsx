import React from "react";

/**
 * The headline shows which site currently is open.
 */
export default function Headline(props: { headline: string }) {
  return <p className={"text-4xl"}>{props.headline}</p>;
}
