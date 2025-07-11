'use client'

import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


const SearchBar = ({onChange}) => {
    
    
  return (
    <div className='relative w-full  justify-end flex '>
      <input id="search" type="search" placeholder='Search by name' class="w-1/2 h-8  border-2 border-sky-500 mb-5  rounded   "
      onChange = {onChange}
      
      />
       
      <div className=''>
        
      <button className='absolute right-2 top-2 translate-y-1/6 pl-4 pb-2  '>
        <AiOutlineSearch/>
      </button>
      </div>
      
    </div>
    
  )
}

export default SearchBar;
