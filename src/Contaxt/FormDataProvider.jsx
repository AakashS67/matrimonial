// FormDataContext.js
import React, { createContext, useContext, useReducer } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const initialFormData = {
    profile_created_for: "",
    creator_name: "",
    profile_holder_name: "",
    email: "",
    mobile_number: "",
    password: "",
    date_of_birth: "",
    caste: "",
    gotra: "",
    uncle_gotra: "",
    mother_tongue: "",
    native_place: "",
    height: "",
    physique: "",
    complexion: "",
    weight: "",
    blood_group: "",
    hobbies: "",
    family_status: "",
    place_of_birth: "",
    time_of_birth: "",
    have_horoscope: "",
    mangalik: false,
    marital_status: "",
    number_of_children: 0,
    unmarried_brothers: 0,
    married_brothers: 0,
    unmarried_sisters: 0,
    married_sisters: 0,
    father_full_name: "",
    mother_full_name: "",
    profession: "",
    salary_per_month: 0,
    company: "",
    designation: "",
    occupation_address: "",
    academic_qualifications: "",
    smoke: false,
    drink: false,
    diet: true,
    other_amusements: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pin_code: "",
    contact_number: "",
    aadhar_card_number: "",
    show_picture_publicly: 1,
    aadhar_verification_status: 0,
    mobile_number_verification_status: 0,
    profile_verification_status: 0,
    habits_description: "",
    profession_description: "",
    family_description: "",
    my_description: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      // Add more cases for different actions if needed
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialFormData);

  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error(
      "useFormDataContext must be used within a FormDataProvider"
    );
  }
  return context;
};
