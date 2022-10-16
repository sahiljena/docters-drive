import Modal from "./Modal";
import { useState } from "react";
const TimeLine = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-4">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {props?.updates?.map((message) => {
          return (
            <li className="mb-10 ml-6">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  className="rounded-full shadow-lg"
                  src={
                    "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                  }
                  alt="doc-img-dp"
                />
              </span>
              <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="justify-between items-center mb-3 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    {message?.date_time}
                  </time>
                  <br />
                  <div className="text-sm font-semibold text-gray-500 lex dark:text-gray-300">
                    {message?.message}
                    <br />
                    <img src={message?.image} />
                  </div>
                </div>
                {/* <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where we'll be speaking about Measurement.
                </div> */}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="mt-10">
        <Modal
          reup={props.reup}
          setReup={props.setReup}
          type="update"
          id={props.id}
          show={show}
          setShow={setShow}
        />
      </div>
    </div>
  );
};

export default TimeLine;
