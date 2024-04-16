"use client";

import React, {useState} from "react";
import {Image, Link} from "@nextui-org/react";
import Snackbar from "@/app/components/home/snackbar";

import {SeverityEnum} from "@/app/api/dataStructure/severityEnum";

/**
 * @returns The footer component.
 */
export default function Footer() {
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState(
    SeverityEnum.success
  );
  const [snackBarVisibility, setSnackBarVisibility] = useState(false);

  // TODO: make it executable from outside
  const displayAlert = (message: string, severity: SeverityEnum) => {
    setSnackBarMessage(message);
    setSnackBarSeverity(severity);
    setSnackBarVisibility(true);
    setInterval(() => setSnackBarVisibility(false), 5000);
  };

  return (
    <div>
      <Snackbar
        message={snackBarMessage}
        severity={snackBarSeverity}
        isVisible={snackBarVisibility}
      />
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 py-6 px-8">
        <div className="flex gap-4">
          <Image
            alt="QR Code Frontend Github Repo"
            className="w-24 h-24"
            height="100"
            src="/qr_frontend_github.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <Image
            alt="QR Code Backend Github Repo"
            className="w-24 h-24"
            height="100"
            src="/qr_backend_github.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <div className="flex gap-4">
          <p className="text-base text-center">
            Made with &hearts; by Sebastian Mohr, Ata Gunay,
            <br/>
            Wanshi Zhang, Saad Bin Khalid & Saad Siddiqui
          </p>
        </div>
        <nav className="flex gap-4">
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
            isDisabled
          >
            About Us
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
            isDisabled
          >
            Services
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
            isDisabled
          >
            Contact
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
            isDisabled
          >
            Help
          </Link>
        </nav>
      </div>
    </div>
  );
}
