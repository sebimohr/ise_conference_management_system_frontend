"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

/**
 * This constant gets used when no real link is given for the viewer to fetch.
 */
const examplePdf = "/ExamplePdf.pdf";

/**
 * The view that shows the paper.
 */
export default function PdfView(props: { paper: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const paperUrl = () => {
    try {
      // try to parse paper to URL -> if it doesn't work, it's wrong
      new URL(props.paper);
      if (props.paper.includes("example")) return examplePdf;
      else return props.paper;
    } catch (_) {
      return examplePdf;
    }
  };

  return (
    <div className="w-full max-h-[750px]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={paperUrl()}
          httpHeaders={{
            "Access-Control-Allow-Origin": "*",
          }}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
}
