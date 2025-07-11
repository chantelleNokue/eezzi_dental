"use client";

import React, { useMemo,  useRef  } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Stepper from "./stepper/stepper";



const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // // const {values, isLoading} = formData;

  // function handleChange(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(formData);
  // }

  // const onSubmit = async () => {
  //   setFormData((prev) =>({
  //     ...prev,
  //     isLoading: true
  //   }))

    //email.js
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_y6a9rnb', 'template_t0enzzt', form.current, 'NFXMQKUfKVAEocOku')
      .then((result) => { 
        console.log(result.text); 
        alert("message sent") 
        form.current.reset(); 

    }, (error) => { 
        console.log(error.text); 
    }); 
    e.target.reset
  }
 
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full h-full py-14 "
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full h-full text-center justify-center ">
        <div className="flex flex-col w-full  h-full  flex justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed pb-8">
            Contact Us
          </h3>

          <div className=" w-full h-full px-4 sm:w-2/3 lg:w-1/2 mx-auto border-2 border-gray-300">
            <form
              class="w-full max-w-lg  rounded h-full"
              // onSubmit={handleSubmit}
              ref={form} onSubmit={sendEmail}
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="first-name"
                  >
                    First Name
                  </label>
                  
                  <input
                    class=" block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                    id="first-name"
                    type="text"
                    name="firstname"
                    // value={formData.firstname}
                    placeholder=" First Name"
                    required
                    // onChange={handleChange}
                    errorBorderColor ='slate-500'
                  />
                  {/* <FormErrorMessage>Required</FormErrorMessage> */}
                  
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase  text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4   leading-tight focus:outline-none focus:bg-white"
                    id="last-name"
                    type="text"
                    // value={formData.lastname}
                    placeholder="Last Name"
                    required
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    class="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4  mb-4  leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    // value={formData.email}
                    placeholder="Email"
                    required
                    // onChange={handleChange}
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                    for="subject"
                  >
                    Subject of Message
                  </label>
                  <input
                    // value={formData.subject}
                    name="subject"
                    className="block w-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-3 px-4 mb-4  leading-tight focus:outline-none focus:bg-white"
                    id="subject"
                    type="text"
                    placeholder="Subject of Message"
                    required
                    // onChange={handleChange}
                  />
                </div>
                <div class="w-full  px-3">
                  <textarea
                    // value={formData.message}
                    name="message"
                    className="block w-3/4 h-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-8 px-4 mt-4  leading-tight focus:outline-none focus:bg-white"
                    placeholder="Type your message here...."
                    required
                    // onChange={handleChange}
                  />
                </div>

                <div class="w-full  px-3">
                  <textarea
                    // value={formData.message}
                    name="comments"
                    className="block w-3/4 h-full bg-gray-200 text-gray-700 border border-sky-500 rounded py-8 px-4 mt-10  leading-tight focus:outline-none focus:bg-white"
                    placeholder="Type your comments here...."
                    required
                    // onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* onClick={onSubmit} isLoading={formData.isLoading} disabled={ !formData.firstname || !formData.lastname || !formData.email || !formData.subject || !formData.message}*/}
              <div className="w-full  px-3 flex justify-center">
                <button   className="block w-1/2 justiy-center bg-white-300 hover:bg-sky-500 text-gray-700 border border-sky-500 rounded py-3 px-4 mt-8  leading-tight focus:outline-none focus:bg-white ">
                  Submit
                </button>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2"></div>
            </form>
          </div>
        </div>

        <div className="flex flex-col w-full my-16 " id="testimoni">
        

          <div className="w-full flex flex-col">
            <div variants={scrollAnimation}>
              <Testimoni />
              
            </div>
            
          </div>
        </div>
      </div>
    
     
    </div>
    
  );
};

export default Pricing;
