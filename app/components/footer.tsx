import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 py-6 px-8">
      <div className="flex gap-4">
        <img
          alt="QR Code 1"
          className="w-24 h-24"
          height="100"
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
        <img
          alt="QR Code 2"
          className="w-24 h-24"
          height="100"
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
      </div>
      <div className="flex gap-4">
        <p className="text-base text-center">
          Made with &hearts; by Sebastian Mohr, Ata Gunay,<br/>
          Wanshi Zhang, Saad Bin Khalid & Saad Siddiqui
        </p>
      </div>
      <nav className="flex gap-4">
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          About Us
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          Services
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          Contact
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
          Help
        </Link>
      </nav>
    </div>
  );
}
