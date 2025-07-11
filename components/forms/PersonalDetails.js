'use client'

import React from 'react'
import { useState } from 'react';

function PersonalDetails() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    nationalId: "",
    email: "",
    phoneNumber: "",
  });

  // const {values, isLoading} = formData;

  function handlChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
        <form class="w-3/4  max-w-lg  rounded h-1/2 flex justify-start mr-20 mb-4 ml-6 mt-6 " onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6 mt-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
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
              {/* <FormErrorMessage>Required</FormErrorMessage> */}
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
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    

    
  )
}

export default PersonalDetails
