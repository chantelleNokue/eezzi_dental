'use client'

import React, { useState } from 'react'
import LawyerData from '../LawyerData';
import Lawyer from '../Lawyer';

function Checkbox({OnChange, value}) {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleChange = event =>{
    setSelectedCategory(event.target.value)

}

 {/* 
    const [list, setList] = useState('')
    let filterServices = LawyerData
    console.log(OnChange)
    const serviceChecked = selectedCategory.filter((item) => item.checked).map((item) => item.label.toLowerCase());
    if(serviceChecked.length){
        filterServices = filterServices.filter((item)=> serviceChecked.includes(item.LawyerData) );

    }
    setList(filterServices)
  */}
   
    console.log(LawyerData)
    const filteredData = ({selectedCategory})=>{
        let filteredServices = LawyerData
        if(selectedCategory){
            filteredServices = filteredServices.filter(({practiseLabour, gender})  => practiseLabour === selectedCategory || gender=== selectedCategory);

        }
        return LawyerData.map((data) => (
          
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
        ))
        
    }

    filteredData(LawyerData)
  
  return (
    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 rounded-md bg-gray-100 px-2 w-1/4 h-3/4 ">
    <div className="">
      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white ">
        Legal Services
      </h3>
      <ul class="w-48 text-sm font-medium rounded-lg dark:bg-gray-700 dark:text-white">
        <li class="w-full rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="divorce"
              
              type="checkbox"
              value= {value}
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded "
              OnChange={()=>filteredData('Child Services')}
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
              id="childrens-rights"
              type="checkbox"
              value= {value}
              class="w-4 h-4 rounded "
            />
            <label
              for="childrens-rights"
              class="w-full py-3 ml-2 text-sm font-medium "
            >
              Children's rights
            </label>
          </div>
        </li>
        <li class="w-full rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="adoption"
              type="checkbox"
              value={value}
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
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
              id="criminal"
              type="checkbox"
              value={value}
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
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
              id="banking"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
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
              id="criminal"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
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
              id="pension"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
            />
            <label
              for="pension"
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
              id="male"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
            />
            <label
              for="male"
              class="w-full py-3 ml-2 text-sm font-medium "
            >
              Male
            </label>
          </div>
        </li>
        <li class="w-full rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="female"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100  rounded "
            />
            <label
              for="female"
              class="w-full py-3 ml-2 text-sm font-medium "
            >
              Female
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Checkbox
