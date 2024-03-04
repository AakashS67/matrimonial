import React from 'react'

const FaimlyDetail = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center mt-10 text-xl text-gray-700'>We would love to know about your faimly.</h1>
      {/* <div className='text-center ml-[400px] mt-5 text-gray-600'>mandatory <span className='text-red-500 text-xl font-bold'>*</span></div> */}

      <div className='flex flex-row justify-between items-center '>
        <form action="/action_page.php">
          <div className='ml-[400px] mt-16 '>
            <label className='relative cursor-pointer' for="fname">
              <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
              <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Faimly type</span>
            </label>

            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Father's Occupation</span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="date">
                <input type="text" placeholder="Input" id="date" name="date" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Mother's Occupation</span>
              </label>
            </div>




            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Brother</span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Sister</span>
              </label>
            </div>


            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Faimly living in<span className='font-semibold underline ml-[210px]'>Not from india?</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Contact address</span>
              </label>
            </div>


            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-[150px] w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>About My Faimly</span>
              </label>
            </div>
            <div className='flex items-center gap-5'>
            <button className='bg-red-500 text-white mt-7 mb-5 px-7 h-11 w-50% rounded-lg text-base'>Add to my profile</button>
            <div className='text-base mt-2 text-gray-600'>I will add this later</div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default FaimlyDetail