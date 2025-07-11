"use client";

import React, { Fragment, useMemo } from "react";
import { useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Lawyer from "./Lawyer";
import LawyerData from "./LawyerData";
import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox/checkbox";
import Modal from "./Modal";
import { AiOutlineClose } from "react-icons/ai";
import ButtonOutline from "./misc/ButtonOutline.";
import { TiTick } from "react-icons/ti";
import PersonalDetails from "./forms/PersonalDetails";
import DatePicker, { ReactDatePicker } from "react-datepicker";
import Datetime from "react-datetime";
import SignIn from "../pages/SignIn";
import signUp from "../pages/signUp";
import { useEffect } from "react";
import axios from "axios";
import { Drawer } from 'antd';

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
  value,
  onClose,
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [search, setSearch] = useState("");

  const [visibl2, setVisibl2] = useState(false);
  const showDrawer2 = () => {
    setVisibl2(true);
  };

  const onClose2 = () => {
    setVisibl2(false);
  };

  //form on the stepper
  const [isError, setIsError] = useState(false);

  //   useEffect(() => {

  const sendEmaiil = async () => {
    try {
      await fetch(`http://localhost:8082/sendEmail/confirmProfileEmail?recipient=${formData.email}&subject=Test`, {
        mode: 'no-cors',
        method: 'POST'
      }).then((response) => {
        console.log(response.data)
        if (response.data === `Email Sent to : ${formData.email}`) {
          alert("message sent")
        } else {
          console.log("Network Error")
        }
      });

      // if (response.status === 200) {
      //     let data = await response.json();
      //     setFormData(data);

      // } else {
      //     throw 'Error sending the email'
      // }
    } catch (error) {
      // setIsError(true)
      console.log(error)
    }
  }




  // }, [])

  // const sendEmaill = async () => {
  //   let response = await fetch(
  //     `localhost:8082/sendEmail/confirmProfileEmail?recipient=${formData.email}&subject=Test`
  //   );
  //   if (response.status === 200) {
  //     let data = await response.json();
  //     setFormData(data);
  //   } else {
  //     console.log("Error sending the email") ;
  //   }
  //   const data = await res.data.slip;
  //   setFormData(data);
  // };

  // useEffect(() => {
  //   sendEmaill();
  // }, []);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    nationalId: "",
    email: "",
    phoneNumber: "",
    country: "",
    bookingDate: "",
    time: "",
    service: "",
  });

  // const {values, isLoading} = formData;
  //stepper form
  function handlChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  // const onSubmit = async () => {
  //   setFormData((prev) =>({
  //     ...prev,
  //     isLoading: true
  //   }))
  // }
  //date picker

  const [showDetails, setShowDetails] = useState([]);
  const [modal, setModal] = useState(false);

  //View lawyer details
  const showMoreDetails = (item) => {
    setShowDetails([...showDetails, { ...item }]);
    showModal();
  };

  //Set Modal
  const showModal = () => {
    setModal(!modal, (showDetails.length = 0));
  };
  //stepper stepper

  const [showStepper, setShowStepper] = useState([]);
  const [stepper, setStepper] = useState(false);

  const showStep = (data) => {
    setShowStepper([...showStepper], { ...data });
    showSteppe();
  };

  const showSteppe = () => {
    setStepper(!stepper, (showStepper.length = 0));
  };

  //checkbox

  const [selectedCategory, setSelectedCategory] = useState({
    Divorce: false,
    childServices: false,
    Adoption: false,
    Criminal: false,
    Banking: false,
    Pension: false,
    Male: false,
    Female: false,
  });

  //checkboxesssss
  console.log(selectedCategory.Divorce);
  const handleChange = (event) => {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setSelectedCategory((prevCategory) => {
      return {
        ...prevCategory,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const filteredData = LawyerData.filter((lawyer) => {
    if (selectedCategory.Divorce === true) {
      return lawyer.practiseLabour === "Divorce";
    }

    if (selectedCategory.childServices === true) {
      return lawyer.practiseLabour === "Child Services";
    }

    if (selectedCategory.Adoption === true) {
      return lawyer.practiseLabour === "Adoption";
    }

    if (selectedCategory.Criminal === true) {
      return lawyer.practiseLabour === "Criminal";
    }

    if (selectedCategory.Banking === true) {
      return lawyer.practiseLabour === "Banking";
    }

    if (selectedCategory.Pension === true) {
      return lawyer.practiseLabour === "Pension and Retirement Funds";
    }

    if (selectedCategory.Male === true) {
      return lawyer.gender === "Male";
    }

    if (selectedCategory.Female === true) {
      return lawyer.gender === "female";
    }
    if (selectedCategory.Divorce === true && selectedCategory.Female === true) {
      return lawyer.practiseLabour === "Divorce" && lawyer.gender === "Female";
    }

    return true;
  });

  // const handleChildrenService = (event) => {
  //   setCategory(event.target.checked ? "Child Services" : "");
  // };

  // const filteredData = LawyerData.filter((lawyer) => {
  //   if (Category === "Child Services") {
  //     return lawyer.practiseLabour === "Child Services";
  //   }

  //   return true;
  // });

  //stepper
  const steps = ["Personal Info", "Bookings", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  //compobox
  const [countryState, setCountryState] = useState("");

  function UserDetails() {
    return (
      <div className=" h-3/4 mb-0  ">
        {/* <PersonalDetails/> */}
        <form
          class="w-3/4  max-w-lg  rounded mr-20 mb-2 ml-6 mt-2"
          onSubmit={handleSubmit}
        >
          <div class="flex flex-wrap -mx-3 mb-6 mt-6  pt-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class=" block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                name="firstname"
                value={formData.firstname}
                placeholder=" First Name"
                required
                onChange={handlChange}
              />
            </div>

            <div class="w-full md:w-1/2 px-3">
              <input
                name="lastname"
                class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                id="lastname"
                type="text"
                value={formData.lastname}
                placeholder="Last Name"
                required
                onChange={handlChange}
              />
            </div>
            <div class="flex flex-wrap  mb-6 pt-6">
              <div class="w-full md:w-1/2 px-3">
                <input
                  name="gender"
                  class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                  id="gender"
                  type="text"
                  value={formData.gender}
                  placeholder="Gender (Male/Female)"
                  required
                  onChange={handlChange}
                />
              </div>
              <div class="w-full md:w-1/2 px-3 ">
                <input
                  name="nationalId"
                  class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                  id="nationalId"
                  type="text"
                  value={formData.nationalId}
                  placeholder="National Identifier"
                  required
                  onChange={handlChange}
                />
              </div>

              <div class="flex flex-wrap  mb-6 pt-6 w-full">
                <div class="w-full md:w-1/2 px-3">
                  <input
                    name="email"
                    class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    value={formData.email}
                    placeholder="Email"
                    required
                    onChange={handlChange}
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 ">
                  <input
                    name="phoneNumber"
                    class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                    id="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    placeholder="Phone Number"
                    required
                    onChange={handlChange}
                  />
                </div>{" "}
              </div>

              <div class="flex flex-wrap  mb-6 w-full">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                  <label className="block uppercase  text-gray-700 text-xs font-bold mb-2">
                    Select Service Needed
                  </label>
                  <select
                    className="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white "
                    onChange={handlChange}
                    name="service"
                    id="service"
                    value={formData.service}
                  >
                    <option>--Select Service--</option>
                    <option value="Divorce">Divorce</option>
                    <option value="Child Services">Child Services</option>
                    <option value="Adoption">Adoption</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Banking">Banking</option>
                    <option value="Pension and Retirements Funds">
                      Pension and Retirements Funds
                    </option>
                  </select>
                  {/* {countryState} */}
                </div>
              </div>
            </div>
            {/* <button>Submit</button> */}
          </div>
        </form>
      </div>
    );
  }

  function Payment() {
    return (
      <div className=" ">
        <div class="w-3/4 h-1/3 max-w-lg  rounded  flex justify-start mr-20  mb-4 ml-6 mt-6  ">
          {/* <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div> */}

          {/* <Datetime className="bg-slate-500 text-white-500 rounded"/> */}
          <div class="flex flex-wrap -mx-3 mb-6 mt-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <label className="block uppercase  text-gray-700 text-xs font-bold mb-2">
                Select Location
              </label>
              <select
                className="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white "
                onChange={handlChange}
                name="country"
                id="country"
                value={formData.country}
              >
                <option>--Select Location--</option>
                <option value="harare">Harare</option>
                <option value="masvingo">Masvingo</option>
                <option value="mutare">Mutare</option>
                <option value="gweru">Gweru</option>
                <option value="kwekwe">Kwekwe</option>
                <option value="kadoma">Kadoma</option>
              </select>
              {/* {countryState} */}
            </div>

            <div class="w-full md:w-1/2 px-3">
              <label className="block uppercase  text-gray-700 text-xs font-bold mb-2">
                Select date
              </label>
              <input
                name="bookingDate"
                class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                id="bookingDate"
                type="date"
                value={formData.bookingDate}
                placeholder="Select date"
                onChange={handlChange}
              />
            </div>
            <div className=" h-1/2 mb-6">
              <label className="block uppercase  text-gray-700 text-xs font-bold  mt-4">
                Available Time Slots
              </label>
              <div class="flex flex-wrap mt-2 place-items-start  h-1/2 font-medium  ">
                <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                  <input
                    className=""
                    type="radio"
                    name="time"
                    value="8:00 - 10:00"
                    id="8:00 - 10:00"
                    checked={formData.time === "8:00 - 10:00"}
                    onChange={handlChange}
                  />
                  <label
                    class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radio1"
                  >
                    8:00 - 10:00
                  </label>
                </div>

                <div class="mb-2 block min-h-[1.5rem] pl-2 ">
                  <input
                    className=""
                    type="radio"
                    name="time"
                    value=" 10:00 - 12:00"
                    id="10:00 - 12:00"
                    checked={formData.time === " 10:00 - 12:00"}
                    onChange={handlChange}
                  />
                  <label
                    class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="10:00 - 12:00"
                  >
                    10:00 - 12:00
                  </label>
                </div>
                <div class="flex flex-wrap mt-2 place-items-start  h-1/2 font-medium  ">
                  <div class="mb-2 block min-h-[1.5rem] pl-2 mr-10">
                    <input
                      className=""
                      type="radio"
                      name="time"
                      value="12:00 - 13:00"
                      id="12:00 - 13:00"
                      checked={formData.time === "12:00 - 13:00"}
                      onChange={handlChange}
                    />
                    <label
                      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="12:00 - 13:00"
                    >
                      12:00 - 13:00
                    </label>
                  </div>

                  <div class="mb-2 block min-h-[1.5rem] pl-2">
                    <input
                      className=""
                      type="radio"
                      name="time"
                      value="14:00 - 15:00"
                      id="14:00 - 15:00"
                      checked={formData.time === "14:00 - 15:00"}
                      onChange={handlChange}
                    />
                    <label
                      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for=" 14:00 - 15:00"
                    >
                      14:00 - 15:00
                    </label>
                  </div>
                  <div class="flex flex-wrap mt-2 place-items-start  h-1/2 font-medium  ">
                    <div class="mb-2 block min-h-[1.5rem] pl-2 mr-10">
                      <input
                        className=""
                        type="radio"
                        name="time"
                        value="15:00 - 16:00"
                        id="15:00 - 16:00"
                        checked={formData.time === "15:00 - 16:00"}
                        onChange={handlChange}
                      />
                      <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="15:00 - 16:00"
                      >
                        15:00 - 16:00
                      </label>
                    </div>

                    <div class="mb-2 block min-h-[1.5rem] pl-2">
                      <input
                        className=""
                        type="radio"
                        name="time"
                        value="16:00 - 17:00"
                        id="16:00 - 17:00"
                        checked={formData.time === "16:00 - 17:00"}
                        onChange={handlChange}
                      />
                      <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="16:00 - 17:00"
                      >
                        16:00 - 17:00
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <label for="chooseDate"/> Choose Date
          <input
            type="date"
            className="border-2 border-sky-500 w-4/5 h-3/4 rounded-lg pt-4 "
          />
</div>
          <div className="flex flex-col-2">
            
            <button class="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-4">
              Button
            </button>
            <button class="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-4">
              Button
            </button>
            
           
          </div> */}
        </div>
      </div>
    );
  }
  console.log(formData);


  function Confirmation() {
    return (
      <div className="ml-4 mt-4 mb-4">
        <h2 className="mr-10">
          <strong>Name: </strong>
          {formData.firstname}
        </h2>
        <h2 className="mr-10">
          <strong>Surname: </strong> {formData.lastname}
        </h2>
        <h2 className="mr-10">
          <strong>Gender: </strong>
          {formData.gender}
        </h2>
        <h2 className="mr-8">
          <strong>National ID: </strong>
          {formData.nationalId}
        </h2>
        <h2 className="mr-10">
          <strong>Email: </strong>
          {formData.email}
        </h2>
        <h2 className="mr-10">
          <strong>Phone Number: </strong>
          {formData.phoneNumber}
        </h2>
        <h2 className="mr-10">
          <strong>Country: </strong> {formData.country}
        </h2>

        <h2 className="mr-10">
          <strong>Service: </strong>
          {formData.service}
        </h2>
        <h2 className="mr-10">
          <strong>Booking Date: </strong>
          {formData.bookingDate}
        </h2>
        <h2 className="mr-10">
          <strong>Time: </strong>
          {formData.time}
        </h2>
        <button className='w-1/3 hover:bg-sky-500 border-2 border-sky-500' onClick={() => sendEmaiil()}>Confirm</button>
      </div>
    );
  }

  function getSectionComponent() {
    switch (currentStep) {
      case 1:
        return <UserDetails />;
      case 2:
        return <Payment />;
      case 3:
        return <Confirmation />;
      default:
        return null;
    }
  }

  return (<>
    <Drawer
      width={600}
      placement="right"
      closable={false}
      onClose={onClose2}
      open={visibl2}
    >
      <p >Panashe Sunlight</p>
      <p >Request An Appointment</p>

      <div className=" h-3/4 mb-0  ">
        <form
          class="w-3/4  max-w-lg  rounded mr-20 mb-2 ml-6 mt-2"
          onSubmit={handleSubmit}
        >
          
         { getSectionComponent()}
           {!complete && (
                <button
                  className="pr-4 text-slate-500 rounded text-white-500 pl-2 ml-6 mb-4 bottom-10 top-10 border-2 border-sky-500 hover:bg-sky-500 text-gray-300 font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline w-1/3"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(true)
                      : setCurrentStep((prev) => prev + 1);
                  }}
                >
                  {currentStep === steps.length ? "Finish" : "Next"}
                </button>
              )}

              {currentStep > 1 && currentStep !== steps.length && (
                <button
                  className="pr-4 text-slate-500 rounded text-white-500 pl-2 ml-6 mb-4 bottom-10 top-10 border-2 border-sky-500 hover:bg-sky-500 text-gray-300 font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline w-1/3"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(false)
                      : setCurrentStep((prev) => prev - 1);
                  }}
                >
                  Previous
                </button>
              )}
        </form>
      </div>

      
    </Drawer>
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto  " id="about">
      <div className="flex w-full justify-between mx-6 pt-10 pr-6 ">
        {/* check box */}
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 border-2 border-gray-100 rounded-md bg-white-500 px-4 w-1/4 h-3/4 pt-2  ">
          <div className="">
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white ">
              Legal Services
            </h3>
            <ul class="w-48 text-sm font-medium rounded-lg dark:bg-gray-700 dark:text-white">
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Divorce"
                    type="checkbox"
                    checked={selectedCategory.Divorce}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded "
                    onChange={handleChange}
                    name="Divorce"
                  />
                  <label
                    for="divorce"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Divorce
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="childServices"
                    type="checkbox"
                    checked={selectedCategory.childServices}
                    class="w-4 h-4 rounded "
                    onChange={handleChange}
                    name="childServices"
                  />
                  <label
                    for="childServices"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Child Services
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Adoption"
                    type="checkbox"
                    onChange={handleChange}
                    checked={selectedCategory.Adoption}
                    class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                    name="Adoption"
                  />
                  <label
                    for="adoption"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Adoption
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Criminal"
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                    checked={selectedCategory.Criminal}
                    class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                    name="Criminal"
                  />
                  <label
                    for="criminal"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Criminal
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Banking"
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                    checked={selectedCategory.Banking}
                    class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                    name="Banking"
                  />
                  <label
                    for="banking"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Banking
                  </label>
                </div>
              </li>

              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Pension"
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                    checked={selectedCategory.Pension}
                    class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                    name="Pension"
                  />
                  <label
                    for="Pension"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Pension and Retirement Funds
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white ">
              Lawyer's Gender
            </h3>
            <ul class="w-48 text-sm font-medium rounded-lg dark:bg-gray-700 dark:text-white">
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Male"
                    type="checkbox"
                    onChange={handleChange}
                    checked={selectedCategory.Male}
                    class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                    name="Male"
                  />
                  <label
                    for="Male"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Male
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg ">
                <div class="flex items-center pl-3">
                  <input
                    id="Female"
                    type="checkbox"
                    onChange={handleChange}
                    checked={selectedCategory.Female}
                    class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                    name="Female"
                  />
                  <label
                    for="Female"
                    class="w-full py-3 ml-2 text-sm font-medium "
                  >
                    Female
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
        <div className="w-3/4 ml-10 ">
          <SearchBar onChange={(e) => setSearch(e.target.value)} />
          <div>
            <div className="w-full grid grid-cols-3 gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
              {/*
                 {filteredData.map((data) => (
                  <Lawyer
                    key={data.key}
                    image={data.image}
                    name={data.name}
                    firm={data.firm}
                    location={data.location}
                    practiseLabour={data.practiseLabour}
                    tel={data.tel}
                    email={data.email}
                  />
                ))}
              */}
              {filteredData
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((item) => {
                  return (
                    <div>
                      <div className="w-full h-full  justify-between p-2 border-2 rounded-lg border-sky-500 bg-gray-100 gap-2  ">
                        <div className="flex justify-end ">
                          <button
                            className=""
                            onClick={() => showMoreDetails(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 border-2 border-sky-500 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="w-8/12  self-center  flex justify-center ">
                          <img
                            src={item.image}
                            className="h-8/12 w-2/3 rounded-lg "
                          />
                        </div>

                        <div className="w-full flex flex-col px-4 ">
                          <h2 className="text-lg">{item.name}</h2>
                          <div className="text-sm ">
                            <p>
                              <strong>Gender: </strong>
                              {item.gender}
                            </p>
                            <p>
                              <strong>Firm</strong>: {item.firm}
                            </p>
                            <p>
                              <strong>Location</strong>: {item.location}
                            </p>

                            <p>
                              <strong>tel</strong>:{item.tel}
                            </p>
                            <p className="text-sky-500">
                              <strong>email</strong>:{item.email}
                            </p>
                            <p>
                              <strong>Speciality</strong>: {item.practiseLabour}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    // <Lawyer
                    //   key={data.key}
                    //   image={data.image}
                    //   name={data.name}
                    //   firm={data.firm}
                    //   location={data.location}
                    //   practiseLabour={data.practiseLabour}
                    //   tel={data.tel}
                    //   email={data.email}

                    // />
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed insert-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-0 right-0  z-50 ">
          <div className="w-full flex flex-col  w-3/4 h-4/5 justify-self-center  h-full fixed top-10 right-10 z-50">
            <button
              className="text-white  text-xl place-self-end "
              onClick={showModal}
            >
              X
            </button>

            {showDetails.map((data) => (
              <div className="bg-gray-100 p-2 rounded h-full ml-25 items-center flex items-stretch ...">
                <div className="w-1/4 ">
                  <img
                    src={data.image}
                    className="h-1/2 w-2/3 rounded-lg place-items-start mx-4 object-contain"
                  />
                </div>
                <div className="w-4/5">
                  <h1 className="text-xl">
                    <strong>{data.name}</strong>
                  </h1>
                  <h2>
                    <strong>Gender:</strong>
                    {data.gender}
                  </h2>
                  <h>
                    <strong>Firm:</strong> {data.firm}
                  </h>
                  <h2>
                    <strong>City:</strong> {data.location}
                  </h2>
                  <h3 className="text-sky-500 pb-2">
                    <strong>Practice Area: </strong>
                    {data.practiseLabour}
                  </h3>
                  <p1 className="text-black-500">{data.street}</p1>
                  <p className="text-black-500">{data.address}</p>
                  <p3 className="pb-4 text-black-500">{data.country}</p3>

                  <h4 className=" pb-2">
                    <strong>Quarlifications: </strong>
                    {data.quarlifications} <br></br>
                  </h4>
                  <h5>
                    <strong>Years of Service: </strong> {data.yearsOfService}
                  </h5>
                  <h5>
                    <strong>Languages: </strong> {data.languages}
                  </h5>

                  <div className=" mb-2">
                    <h4>
                      <strong>tel: </strong>
                      {data.tel}
                    </h4>
                    <h>
                      <strong>email: </strong>
                      {data.email}
                    </h>
                    <div className="border-t-4">
                      <div class=" border-indigo-500 ... pt-2 flex justify-center mp-2">
                        {" "}
                        <button
                          className=" w-1/4 border-2 border-sky-500 hover:bg-sky-500 text-gray-300 font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline"
                          // onClick={() => showStep(data)}
                          onClick={showDrawer2}
                        >
                          {" "}
                          Book
                        </button>
                        {/* <ButtonOutline>Contact</ButtonOutline>{" "} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* stepper */}
      {stepper && (
        <div className="fixed insert-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-0 right-0  z-50 ">
          <div className="w-full flex flex-col  w-4/6 h-4/5 justify-self-center fixed top-10  ">
            {/* <div className="place-self-start right-30"> */}
            <button
              className="text-white  text-xl  place-self-end  mr-4 mt-2"
              onClick={showSteppe}
            >
              X
            </button>

            <div className=" w-3/5  bg-gray-100 h-6/7 fixed  border border-slate-500 rounded  pt-0 place-self-center mt-8 ml-10 mb-2 ">
              <div className=" flex justify-between  w-full h-1/3  mt-2  ">
                {steps?.map((step, i) => (
                  <div
                    key={i}
                    className={`step-item ${currentStep === i + 1 && "active"
                      } ${(i + 1 < currentStep || complete) && "complete"}`}
                  >
                    <div class="step">
                      {i + 1 < currentStep || complete ? (
                        <TiTick size={24} />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <p className="text-slate-500 text-sm font-bold">{step}</p>
                  </div>
                ))}
                {/* <div key={i} className= {`${currentStep === i + 1 && "active"}`} >          */}
              </div>

              {getSectionComponent()}

              {!complete && (
                <button
                  className="pr-4 text-slate-500 rounded text-white-500 pl-2 ml-6 mb-4 bottom-10 top-10 border-2 border-sky-500 hover:bg-sky-500 text-gray-300 font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline w-1/3"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(true)
                      : setCurrentStep((prev) => prev + 1);
                  }}
                >
                  {currentStep === steps.length ? "Finish" : "Next"}
                </button>
              )}

              {currentStep > 1 && currentStep !== steps.length && (
                <button
                  className="pr-4 text-slate-500 rounded text-white-500 pl-2 ml-6 mb-4 bottom-10 top-10 border-2 border-sky-500 hover:bg-sky-500 text-gray-300 font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline w-1/3"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(false)
                      : setCurrentStep((prev) => prev - 1);
                  }}
                >
                  Previous
                </button>
              )}
            </div>
            {/* <PersonalDetails/> */}
          </div>
        </div>
      )}
      {/* <SignIn/> */}
      {/* <signUp /> */}
      <Modal isVisible={false} />
    </div>
  </>

  );
};

export default Hero;
