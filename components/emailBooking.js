import React from 'react'

function emailBooking() {
    const sendEmaiil = async () => {
        try {
             await fetch(`http://localhost:8082/sendEmail/confirmProfileEmail?recipient=${formData.email}&subject=Test`, {
              mode: 'no-cors',
              method: 'POST' 
            }).then((response)=>{ 
              console.log(response.data)
              if(response.data === `Email Sent to : ${formData.email}`){
                alert("message sent") 
              } else{
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
  return (
    <div>
      <button className='w-1/3 hover:bg-sky-500 border-2 border-sky-500'  onClick={()=> sendEmaiil()}>Confirm</button>
    </div>
  )
}

export default emailBooking





