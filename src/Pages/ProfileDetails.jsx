import React from "react";
import RegistrationHeader from "../Components/Common/RegistrationHeader";
import { WhyRegister } from "../Data/Registration/WhyRegister";
import { Link } from "react-router-dom";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import { FormDataProvider } from "../Contaxt/FormDataProvider";

const ProfileDetails = () => {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('images/pexels-photo-1444442.jpeg')` }}>
      {/* <RegistrationHeader /> */}
      <div className="flex flex-col justify-center items-center">
        <div
          className=" flex flex-col justify-center items-center "
          style={{ width: "100%" }}
        >
          <p className="text-[22px] text-gray-600 mt-10">
            Complete your profile now to contact members you like and to receive
            interests
          </p>
          <div
            className="flex flex-row justify-center container item-center gap-10 my-10 w-100 "
            style={{ width: "100%" }}
          >
            <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
              <form
                className="flex flex-col items-end gap-8 m-2"
                // style={{ width: "100%" }}
                action=""
              >
                <FormDataProvider>
                  <RegisterForm />
                </FormDataProvider>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
