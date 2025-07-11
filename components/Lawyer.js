"use client";

import ButtonOutline from "./misc/ButtonOutline.";
import { useState } from "react";
import Modal from "./Modal";

const Lawyer = (props) => {
  </* 
  const showMoreDetails = (item) => {
    setShowDetails([...viewDetails, { ...item }]);
    showModal();
  };

  const [showModal, setShowModal] = useState(false);
*/></>
  return (
    <div className="w-full  justify-between p-2 border-2 rounded-lg border-sky-500 bg-gray-100 gap-2">
        <div className="flex justify-end ">
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

        {/*<ButtonOutline onClick = {Modal(true) }>More Details</ButtonOutline>  */}
      </div>
      <div className="w-8/12  self-center  flex justify-center ">
        <img src={props.image} className="h-8/12 w-2/3 rounded-lg " />
      </div>

      <div className="w-full flex flex-col px-4 ">
        <h2 className="text-lg">{props.name}</h2>
        <div className="text-sm ">
          <p>
            <strong>Firm</strong>: {props.firm}
          </p>
          <p>
            <strong>Location</strong>: {props.location}
          </p>
         
          <p>
            <strong>tel</strong>:{props.tel}
          </p>
          <p className="text-sky-500">
            <strong>email</strong>:{props.email}
          </p>
          <p>
            <strong>Speciality</strong>: {props.practiseLabour}
          </p>
          
        </div>
        
      </div>
      <button className="" onClick={()=>showMoreDetails(item) }>Click here</button>
    </div>
  );
};

export default Lawyer;
