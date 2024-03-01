import React from "react";
import RegistrationNavbar from "./RegistrationNavbar";
import bg from "../../Assets/Images/bgProfileDetails.jpg";
import { Link } from "react-router-dom";

const RegistrationHeader = ({ header }) => {
  return (
    <div>
      {" "}
      <div className=" bg-[#e7e6e6] h-[190px] ">
        <img
          className="z-20 absolute w-[100vw] h-[190px] backdrop-blur-sm "
          src={bg}
          alt=""
        />

        <div className=" w-100  flex flex-col justify-center item-center mx-auto">
          <RegistrationNavbar />
          
        </div>
      </div>
    </div>
  );
};

export default RegistrationHeader;
