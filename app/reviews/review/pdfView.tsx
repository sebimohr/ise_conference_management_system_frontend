'use client'

import React from "react";
import {Document, Page} from "react-pdf";

export default function PdfView() {
  return (
    <div>
      <Document file="ExamplePdf.pdf">
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
}
