import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Button } from '../../components/Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const RESUME_URL =
    'https://cdn.sanity.io/files/vfh3f699/production/2376ca115c25db02171eaf06ac95b6cfa651a7ae.pdf';

  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const prevDisabled = pageNumber <= 1;
  const nextDisabled = pageNumber >= numPages;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    !prevDisabled && changePage(-1);
  };

  const nextPage = () => {
    !nextDisabled && changePage(1);
  };

  return (
    <main className="w-full h-screen" /*fixed top-[var(--nav-height)] left-0*/>
      <Document
        file={RESUME_URL}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center items-center w-full p-1"
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
          standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
        }}
        loading={'Please wait!'}
      >
        <Page
          pageNumber={pageNumber}
          className="w-full flex justify-center items-center"
          scale={width > 786 ? 1.7 : 0.6}
          //   canvasBackground="white"
        />
      </Document>
      <section className="max-w-[1000px] mx-auto w-full grid grid-cols-1 gap-5 py-5">
        <div className="inline-grid grid-cols-2 gap-2 w-full max-w-[200px] md:max-w-[220px] justify-self-center">
          <Button disabled={prevDisabled} onClick={previousPage}>
            Prev
          </Button>
          <Button disabled={nextDisabled} onClick={nextPage}>
            Next
          </Button>
        </div>
        <p className="text-right">
          Page {pageNumber} of {numPages}
        </p>
      </section>
    </main>
  );
};
export default Resume;
