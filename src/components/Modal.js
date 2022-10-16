import { useState } from "react";
import Spinner from "./Spinner";
const Modal = ({ show, setShow, type, id, reup, setReup }) => {
  const [message, setMessage] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");
  const [loading, setLoading] = useState(false);

  const [sp, setSp] = useState("");
  const [dp, setDp] = useState("");

  const handleProductImageChange = async (event) => {
    setLoading(true);
    //setImagePreview(URL.createObjectURL(event.target.files[0]));
    //setProductImage(event.target.files[0]);
    let formData = new FormData();
    console.log(event.target.files[0]);
    formData.append("image", event.target.files[0]);
    //console.log(formData)
    const resp = await fetch(
      "https://hackout2022.azurewebsites.net/api/patient/upload",
      {
        method: "POST",
        //   headers: {
        //     // 'Content-Type': 'multipart/form-data',
        //     Authorization: `Bearer ${token}`,
        //   },
        body: formData,
      }
    );
    const img = await resp.json();
    console.log(img);
    setUploadedImg(img.image);
    //console.log(img.uploaded_img);
    //console.log(uploadedImg);
    setLoading(false);
    return uploadedImg;
    // .then((data)=>{
    //     return data.json()
    // })
    // .then((j)=>{
    //     //console.log(j);
    //     //console.log(JSON.stringify(j));
    //     setUploadedImg(JSON.stringify(j));
    //     console.log("Inside THEN",uploadedImg);
    //     return "IMAGE UPLOADED"
    // })
  };
  const updateBp = async () => {
    setLoading(true);
    const response = await fetch(
      `https://hackout2022.azurewebsites.net/api/patient/update/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sp: sp,
          dp: dp,
        }),
      }
    );
    const data = await response.json();
    setReup(reup + 1);
    console.log(data);
    setLoading(false);
    setShow(false);
  };
  const updateMessage = async () => {
    setLoading(true);
    //   var formdata = new FormData();
    //   formdata.append("image", fileInput.files[0], "[PROXY]");
    const response = await fetch(
      `https://hackout2022.azurewebsites.net/api/patient/update/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          image: uploadedImg,
        }),
      }
    );
    const data = await response.json();
    setReup(reup + 1);
    console.log(data);
    setLoading(false);
    setShow(false);
  };
  if (type === "update") {
    return (
      <>
        {/* Modal toggle */}
        {/* Main modal */}
        {show && (
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="max-w-4xl m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {type === "update" && "Update Status"}
                  </h3>
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6">
                  <>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your message..."
                      defaultValue={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </>
                </div>
                <a
                  className="text-blue-600"
                  target={"_blank"}
                  href="https://editor-hackout2022.netlify.app/"
                >
                  Write Precription
                </a>
                {!uploadedImg && (
                  <div className="flex justify-center items-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        onChange={handleProductImageChange}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
                {uploadedImg && (
                  <img className="h-32 w-100" src={uploadedImg} />
                )}
                <br />
                <button
                  className="text-white bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setUploadedImg("")}
                >
                  Re-Upload
                </button>
                {/* Modal footer */}
                {!loading && (
                  <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button
                      onClick={() => updateMessage()}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setShow(!show)}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Close
                    </button>
                  </div>
                )}
                {loading && <Spinner />}
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Update / Add
        </button>
      </>
    );
  }
  if (type === "bp-update") {
    return (
      <>
        {show && (
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="max-w-4xl m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Update BP
                  </h3>
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6">
                  <div>
                    <label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Systolic pressure (SP)
                    </label>
                    <input
                      value={sp}
                      onChange={(e) => setSp(e.target.value)}
                      type="text"
                      id="small-input"
                      className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Diastolic pressure (DP)
                    </label>
                    <input
                      value={dp}
                      onChange={(e) => setDp(e.target.value)}
                      type="text"
                      id="small-input"
                      className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                {/* Modal footer */}
                {!loading && (
                  <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button
                      onClick={() => updateBp()}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setShow(!show)}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Close
                    </button>
                  </div>
                )}
                {loading && <Spinner />}
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="mt-6 w-full focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Update
        </button>
      </>
    );
  }
};

export default Modal;
