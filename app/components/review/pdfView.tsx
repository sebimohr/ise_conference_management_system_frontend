'use client'

import React from "react";
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfView(props: { paper: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const paperUrl = () => {
    try {
      // try to parse paper to URL -> if it doesn't work, it's wrong
      new URL(props.paper);
      return props.paper;
    } catch (_) {
      return "/ExamplePdf.pdf";
    }
  }

  return (
    <div className="w-full h-full">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={paperUrl()}
          httpHeaders={{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET"
          }}
          plugins={[
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
}
