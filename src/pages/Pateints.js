import TimeLine from "../components/TimeLine";
import Card from "../components/Card";

import { useState, useEffect } from "react";
function PatientPage({ id }) {
  const [userData, setUserData] = useState({});
  const [reup, setReup] = useState(1);
  const fetchUser = async () => {
    const response = await fetch(
      `https://hackout2022.azurewebsites.net/api/patient/details/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setUserData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, [reup]);

  return (
    <>
      <Card
        type="patient-details"
        name={userData?.name}
        age={userData?.age}
        alergies={userData?.alergies}
        bloodGroup={userData?.blood_group}
        gender={userData?.gender}
      />

      <div className="max-w-4xl m-auto p-4 flex justify-around gap-3 flex-wrap">
        <Card
          type="patient-details-bp"
          reup={reup}
          setReup={setReup}
          dp={userData?.dp}
          sp={userData?.sp}
          id={id}
        />
        <Card type="patient-details-reports" />
      </div>
      <div className="max-w-4xl m-auto p-4">
        <h3 className="text-xl font-semibold">Updates</h3>
        <TimeLine
          reup={reup}
          setReup={setReup}
          id={id}
          updates={userData?.updates}
        />
      </div>
    </>
  );
}
export default PatientPage;
