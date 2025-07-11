import React from 'react'
import ButtonOutline from './misc/ButtonOutline.';

function Modal({isVisible}, props) {
    if(!isVisible) return null;
   

  return (
    <div className='fixed insert-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-14 right-0 left-10 '>
        <div className='w-full flex flex-col  w-3/4 h-3/5 justify-self-center '>
            <button className='text-white  text-xl place-self-end '>X</button>
            <div className='bg-gray-100 p-2 rounded h-full ml-25 items-center flex items-stretch ...'>
                <div className='w-1/4 '>
                <img  src="/assets/lawyer3.png" className=" w-2/3 rounded-lg place-items-start" />
                </div>
                <div className='w-4/5'>
                    <h1 className='text-xl'><strong>{props.name}</strong></h1>
                    <h><strong>Firm:</strong> {props.firm}</h>
                    <h2><strong>City:</strong> {props.city}</h2>
                    <h3 className='text-sky-500 pb-2'><strong>Practice Area: </strong>{props.practiseLabour}</h3>
                    <p1 className='text-black-500'>{props.street}</p1>
                    <p className='text-black-500'>{props.address}</p>
                    <p3 className ='pb-4 text-black-500'>{props.country}</p3>

                    <h4 className=' pb-2'><strong>Quarlifications: </strong>{props.quarlifications} <br></br> 
                      
                    </h4>
                    <h5><strong>Years of Service: </strong> {props.yearsOfService}</h5>
                    <h5><strong>Languages: </strong> {props.languages}</h5>

                    <div className="divide-y divide-slate-500 ... border-gray-500">
                    <h4><strong>tel: </strong>{props.tel}</h4>
                    <h><strong>email:  </strong>{props.email}</h>
                    <div class="border-t-4 border-indigo-500 ... pb-2"></div> 
                    </div> 
                    <ButtonOutline>Contact</ButtonOutline> 
                </div>
                

            </div>
        </div>
    
    </div>
  )
}

export default Modal
