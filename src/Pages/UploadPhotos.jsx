import React, { useState } from "react";
import axios from "axios";
import UploadPhotosHeader from "../Components/Common/UploadPhotosHeader";
import ImageFive from "../Assets/Registration/10.png";
import { Link } from "react-router-dom";
import ImageOne from "../Assets/Registration/6.png";
import ImageTwo from "../Assets/Registration/7.png";
import ImageThree from "../Assets/Registration/8.png";
import ImageFour from "../Assets/Registration/9.png";
import Imagefive from "../Assets/Registration/10.png";

const ImageUpload = ({ selectedImage, handleImageClick, handleFileChange }) => {
  return (
    <div className="relative w-[180px] cursor-pointer">
      {selectedImage ? (
        <img
          className="w-full h-full object-cover"
          src={selectedImage}
          alt=""
        />
      ) : (
        <img
          className="w-full h-full object-cover"
          src={ImageFive}
          alt=""
          onClick={handleImageClick}
        />
      )}
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

const UploadPhotos = () => {
  const [selectedImages, setSelectedImages] = useState([
    null,
    null,
    null,
    null,
  ]);

  const handleImageClick = (index) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", (event) =>
      handleFileChange(index, event)
    );
    fileInput.click();
  };

  const handleFileChange = (index, event) => {
    const selectedFile = event.target.files[0];
    const updatedImages = [...selectedImages];
    updatedImages[index] = URL.createObjectURL(selectedFile);
    setSelectedImages(updatedImages);
  };

  const handleSubmit = () => {
    const formData = new FormData();

    selectedImages.forEach((image, index) => {
      if (image) {
        formData.append(`image${index + 1}`, image);
      }
    });

    axios
      .post("YOUR_SERVER_ENDPOINT", formData)
      .then((response) => {
        console.log("Upload successful:", response.data);
        // Handle success if needed
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        // Handle errors if needed
      });
  };

  return (
    <div className="absolute w-full pb-[100px] bg-[#e7e6e6]">
      <UploadPhotosHeader />
      <div className="w-[990px] mx-auto flex flex-col justify-center">
        <Link to="/dashboard/matches">
          <div className="text-right text-xs underline pt-4">
            I will do this later
          </div>
        </Link>
        <div className="text-center text-2xl font-thin text-gray-500 mt-2 mb-6">
          Profile with photos get 8 times more responses
        </div>

        <div className="bg-white text-gray-600 px-10 py-5">
          <div className="flex flex-row justify-center items-center gap-10 py-10">
            <div className="text-center">
              <p className="text-xl mb-5">What to avoid</p>
              <p className="text-sm">
                Do not upload photos that look like any of these
              </p>
            </div>
            <img className="w-[150px]" src={ImageOne} alt="" />
            <img className="w-[150px]" src={ImageThree} alt="" />
            <img className="w-[150px]" src={ImageTwo} alt="" />
            <img className="w-[150px]" src={ImageFour} alt="" />
          </div>
          <div className="flex flex-row justify-between">
            {selectedImages.map((selectedImage, index) => (
              <ImageUpload
                key={index}
                selectedImage={selectedImage}
                handleImageClick={() => handleImageClick(index)}
                handleFileChange={(event) => handleFileChange(index, event)}
              />
            ))}
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;
