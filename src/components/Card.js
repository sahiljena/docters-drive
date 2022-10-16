import { useEffect, useState } from "react";
import Modal from "./Modal";
const Card = (props) => {
  const [show, setShow] = useState(false);
  if (props.type == "patient-details") {
    return (
      <a
        href="#"
        className="block p-4 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props?.name}
        </h5>
        <div className="flex justify-around">
          <div>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              <span className="text-lg">
                {props?.gender === "Male" && `🙎‍♂️  ${props?.age} yrs old`}
                {props?.gender === "Female" && `🙎 ${props?.age} yrs old`}
              </span>
              {}
            </p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              🩸 {props?.bloodGroup}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              Alergies : {props?.alergies}
            </p>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Full History
            </button>
          </div>
        </div>
      </a>
    );
  }
  if (props.type == "patient-details-bp") {
    return (
      <a
        href="#"
        className="block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h2 className="text-xl font-bold">Blood Pressure</h2>
        <div className="">
          <div className="font-semibold text-lg">
            Systolic pressure (SP): {props?.sp}
          </div>
          <div className="font-semibold text-lg">
            Diastolic pressure (DP): {props?.dp}
          </div>
        </div>
        <Modal
          reup={props.reup}
          setReup={props.setReup}
          id={props?.id}
          type="bp-update"
          setShow={setShow}
          show={show}
        />

        {/* <div>
          Mean Artereial Pressure (MAP) = 94 <br /> Blood pressure status :
          Stage I high blood pressure-hypertension <br />
          Pulse Pressure (PP) = 11
        </div> */}
      </a>
    );
  }
  if (props.type == "patient-details-reports") {
    return (
      <a
        href="#"
        className="block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h2 className="text-xl font-bold">Upcoming Lab Reports</h2>
        No Upcoming reports
        <button
          type="button"
          className="w-full mt-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          View Lab Reports
        </button>
        {/* <div>
          Mean Artereial Pressure (MAP) = 94 <br /> Blood pressure status :
          Stage I high blood pressure-hypertension <br />
          Pulse Pressure (PP) = 11
        </div> */}
      </a>
    );
  }
  return <></>;
};

export default Card;
