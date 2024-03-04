import React from 'react'


const CareerDetail = () => {

 
  return (
    <div className='container mx-auto'>
      <h1 className='text-center mt-10 text-xl text-gray-600'>Great! You are about to complete your jeevansathi profile.</h1>
      <div className='text-center ml-[400px] mt-5 text-gray-600'>mandatory <span className='text-red-500 text-xl font-bold'>*</span></div>

      <div className='flex flex-row justify-between items-center '>
        <form action="/action_page.php">
          <div className='ml-[400px] mt-5 '>
            <label className='relative cursor-pointer' for="fname">
              <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
              <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Country<span className='text-red-500 text-xl font-bold'>*</span></span>
            </label>

            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>State <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="date">
                <input type="text" placeholder="Input" id="date" name="date" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>City living in <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>




            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Pincode<span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Highest Degree<span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>


            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Employed In<span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Occupation <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Annual Income <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>


            <div className='text-gray-300 mt-5'>_______________________________________________________________</div>
            <h1 className='text-center mt-5 text-xl text-gray-600'>Great! You are about to complete your jeevansathi profile.</h1>
            <div className='mt-10 flex  items-center' >
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <div className='ml-2 text-base'>हिंदी में लिखे</div>
              <div className='text-red-500 text-base ml-[230px]'>Need help writing?</div>
            </div>

            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-[150px] w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Express Yourself! <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>
            <button className='bg-red-500 text-white mt-7 mb-5 px-10 h-11 w-50% rounded-lg text-base'>Complete Registration</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CareerDetail