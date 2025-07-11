import React from 'react'

function SignIn() {
  return (
    <div>
      <div className="fixed insert-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-0 right-0  z-50 ">
  <form class="bg-white-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border-2 border-sky-500 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border-2 border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-black-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="border-2 border-sky-500 hover:bg-sky-500 text-gray-300 font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" >
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-gray-300 hover:text-gray-300" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  
</div>
    </div>
  )
}

export default SignIn
