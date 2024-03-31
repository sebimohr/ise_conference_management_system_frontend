'use client'

import React from "react";
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfView() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="w-full h-full">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="/ExamplePdf.pdf"
          plugins={[
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
}
