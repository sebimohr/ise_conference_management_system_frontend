"use client";

import React from "react";
import {ExclamationCircleIcon, InformationCircleIcon, XCircleIcon,} from "@heroicons/react/24/outline";
import {SeverityEnum} from "@/app/api/dataStructure/severityEnum";

/**
 * @param props A message and severity for alert displaying. Also the isVisible prop for showing the snackbar.
 * @returns The snackbar component.
 */
export default function Snackbar(props: {
  message: string;
  severity: SeverityEnum;
  isVisible: boolean;
}) {
  let alertIcon: React.JSX.Element;
  let alert: React.JSX.Element;

  switch (props.severity) {
    case SeverityEnum.success:
      alertIcon = <InformationCircleIcon className={"w-4 h-4 mr-4"}/>;
      alert = successAlert(alertIcon, props.message);
      break;
    case SeverityEnum.warning:
      alertIcon = <ExclamationCircleIcon className={"w-4 h-4 mr-4"}/>;
      alert = warningAlert(alertIcon, props.message);
      break;
    case SeverityEnum.error:
    case SeverityEnum.fatal:
      alertIcon = <XCircleIcon className={"w-4 h-4 mr-4"}/>;
      alert = errorAlert(alertIcon, props.message);
      break;
  }

  return props.isVisible ? alert : <></>;
}

function successAlert(alertIcon: React.JSX.Element, message: string) {
  return (
    <div
      className={
        "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md p-4"
      }
      role="alert"
    >
      <div className="flex">
        <div className="py-1">{alertIcon}</div>
        <p className="font-bold">{message}</p>
      </div>
    </div>
  );
}

function warningAlert(alertIcon: React.JSX.Element, message: string) {
  return (
    <div
      className={
        "bg-amber-100 border-t-4 border-amber-500 rounded-b text-amber-900 px-4 py-3 shadow-md p-4"
      }
      role="alert"
    >
      <div className="flex">
        <div className="py-1">{alertIcon}</div>
        <p className="font-bold">{message}</p>
      </div>
    </div>
  );
}

function errorAlert(alertIcon: React.JSX.Element, message: string) {
  return (
    <div
      className={
        "bg-rose-100 border-t-4 border-rose-500 rounded-b text-rose-900 px-4 py-3 shadow-md p-4"
      }
      role="alert"
    >
      <div className="flex">
        <div className="py-1">{alertIcon}</div>
        <p className="font-bold">{message}</p>
      </div>
    </div>
  );
}
