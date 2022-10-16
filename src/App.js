import { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import PatientPage from "./pages/Pateints";
import AddPatient from "./pages/AddPatient";
import Spinner from "./components/Spinner";
function App() {
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const [pateintId, setPateintId] = useState("");
  const [cameraFacing, setCameraFacing] = useState("environment");
  const closeCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    stream.getTracks().forEach(function (track) {
      track.stop();
      track.enabled = false;
    });
    ref.current.stopCamera();
  };

  return (
    <div className="App">
      {page === 0 && (
        <>
          <div className="max-w-6xl m-auto p-4 flex justify-around gap-3 flex-wrap">
            <div className="mt-52">
              <button
                onClick={() => setPage(1)}
                type="button"
                className="w-full text-2xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                📷 Scan QR Code
              </button>
              <br />
              <br />
              <button
                onClick={() => setPage(3)}
                type="button"
                className="w-full text-2xl  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                🏥 Add a new Patient
              </button>
            </div>
          </div>
        </>
      )}
      {page === 1 && (
        <div className="p-4">
          <h2 className="text-center text-xl font-semibold text-blue-800">
            Scan Health Band
          </h2>
          <figure class="max-w-lg m-auto rounded">
            {!pateintId && (
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    setPateintId(result?.text);
                    // console.log(result?.text);
                    setPage(2);
                    closeCam();
                  }
                }}
                key={cameraFacing}
                constraints={{
                  facingMode: cameraFacing,
                }}
                style={{ width: "100%" }}
              />
            )}
            <button
              onClick={() => {
                cameraFacing === "user"
                  ? setCameraFacing("environment")
                  : setCameraFacing("user");
              }}
              className="text-2xl text-center m-auto max-w-2xl"
            >
              🔀
            </button>
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 flex justify-center">
              {pateintId && `Fetcing patient id : ${pateintId}`}
              <Spinner />
            </figcaption>
          </figure>
        </div>
      )}
      {page === 2 && <PatientPage id={pateintId} />}
      {page === 3 && <AddPatient />}
    </div>
  );
}

export default App;
