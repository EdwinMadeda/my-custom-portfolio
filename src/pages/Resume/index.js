import { useContext, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Button } from '../../components/Button';
import CustomArrow from '../Landing/Testimonials/CustomArrow';
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import CtrlsWrapper from './CtrlsWrapper';
import ZoomBtn from './ZoomBtn';
import Store from '../../contexts/Store';
import BackBtn from '../../components/BackBtn';
import { useNavigate } from 'react-router-dom';
// import { BsDownload } from 'react-icons/bs';
import ResumeToolBar from './ResumeToolBar';
import ErrorMsg from '../../components/ErrorMsg';
import CircularSpinner from '../../components/CircularSpinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const { RESUME } = useContext(Store);
  const navigate = useNavigate();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const width = window.innerWidth; //width > 786 ? 1.7 : 0.6
    setScale(width > 786 ? 0.8 : 0.6);
  }, []);

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
    <main className="w-full h-full grid grid-cols-1 gap-1 pb-10">
      <ResumeToolBar
        className="grid-cols-[auto_auto] sm:grid-cols-[auto_auto_auto_auto]
       bg-white dark:bg-[var(--dark-secondary)]"
      >
        <CtrlsWrapper className="justify-self-end">
          <ZoomBtn onClick={() => setScale((scale) => scale - 0.1)}>
            <FaSearchMinus />
          </ZoomBtn>
          <ZoomBtn onClick={() => setScale((scale) => scale + 0.1)}>
            <FaSearchPlus />
          </ZoomBtn>
        </CtrlsWrapper>
        <CtrlsWrapper className="justify-self-center">
          <CustomArrow.Left
            containerClass={`relative ${prevDisabled && 'invisible'}`}
            onClick={previousPage}
          />
          <p className="text-right mx-5">
            Page {pageNumber} of {numPages}
          </p>
          <CustomArrow.Right
            containerClass={`relative ${nextDisabled && 'invisible'}`}
            onClick={nextPage}
          />
        </CtrlsWrapper>

        <CtrlsWrapper className="justify-self-start hidden sm:flex">
          <Button>
            <a
              href={`${RESUME.url}?dl=`}
              className="text-[inherit] flex justify-center items-center"
            >
              {/* <BsDownload className="mr-2" /> */}
              Download
            </a>
          </Button>
        </CtrlsWrapper>
      </ResumeToolBar>

      <Document
        file={RESUME.url}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center items-center w-full"
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
          standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
        }}
        error={<ErrorMsg>Failed to load PDF file.</ErrorMsg>}
        noData={<ErrorMsg>PDF file unspecified.</ErrorMsg>}
        loading={
          <>
            <CircularSpinner /> Loading PDF...!
          </>
        }
      >
        <Page
          pageNumber={pageNumber}
          className="h-full flex justify-center items-center bg-white relative"
          scale={scale}
          error={<ErrorMsg>Failed to load the page.</ErrorMsg>}
          noData={<ErrorMsg>Page unspecified.</ErrorMsg>}
          //   canvasBackground="white"
        />
      </Document>

      <ResumeToolBar className="grid-cols-2 w-[100%]">
        <CtrlsWrapper className="justify-self-center sm:justify-self-start">
          <BackBtn variant="dark" onClick={() => navigate('/')} />
        </CtrlsWrapper>
        <CtrlsWrapper className="justify-self-center sm:hidden">
          <Button>
            <a
              href={`${RESUME.url}?dl=`}
              className="text-[inherit] flex justify-center items-center"
            >
              {/* <BsDownload className="mr-2" /> */}
              Download
            </a>
          </Button>
        </CtrlsWrapper>
      </ResumeToolBar>
    </main>
  );
};
export default Resume;
