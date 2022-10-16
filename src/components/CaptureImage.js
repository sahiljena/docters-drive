import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
const WebcamCapture = ({ setCapturedImg }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setCapturedImg(imageSrc);
    console.log(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <div className="w-52 h-52 flex justify-between gap-3">
        {!imgSrc && (
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        )}
        {imgSrc && <img className="rounded w-100" src={imgSrc} />}
      </div>
      {!imgSrc && (
        <button
          onClick={capture}
          type="button"
          className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Capture photo
        </button>
      )}
      {imgSrc && (
        <button
          onClick={() => setImgSrc("")}
          type="button"
          className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Retake photo
        </button>
      )}
    </>
  );
};

export default WebcamCapture;
