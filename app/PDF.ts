'use client'

import {pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
