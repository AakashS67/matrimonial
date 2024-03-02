import React from 'react'

const ProfileDetail = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center mt-10 text-xl text-gray-600'>Hi! You are joining the Best Matchmaking Experience.</h1>
      <div className='text-center ml-[400px] mt-5 text-gray-600'>mandatory <span className='text-red-500 text-xl font-bold'>*</span></div>

      <div className='flex flex-row justify-between items-center '>
        <form action="/action_page.php">
          <div className='ml-[400px] '>
            <label className='relative cursor-pointer' for="fname">
              <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
              <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Groom's Name <span className='text-red-500 text-xl font-bold'>*</span></span>
            </label>
            <div className='h-14 w-[480px] rounded-lg font-semibold text-gray-600 bg-white p-2'>If you Wish to hide your name from others,click on settings icon and choose the setting</div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="date">
                <input type="date" placeholder="Input" id="date" name="date" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-date'>Date of Birth <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>






            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Mother tongue <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="date">
                <input type="text" placeholder="Input" id="date" name="date" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Religion <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>




            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Sect <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Jamaat <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>


            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Caste <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Marital status <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>



            <div className='mt-5'>
              <label className='relative cursor-pointer' for="fname">
                <input type="text" placeholder="Input" id="fname" name="fname" className='h-14 w-[480px] px-6 text-xl text-gray-600 bg-white border border-gray-400  rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-base text-gray-600 text-opacity-80  absolute left-5 top--1 mt-4  transition duration-200 input-text'>Height <span className='text-red-500 text-xl font-bold'>*</span></span>
              </label>
            </div>

            <button className='bg-red-500 text-white mt-5 px-10 h-11 w-50% rounded-lg'>Continue</button>
          </div>

        </form>


        <div className='mr-[150px] mb-[200px]'>
          <div className='text-gray-700 font-bold'>WHY REGISTER</div>
          <span className='text-gray-600'>______________</span>
         
          <div className='mt-5'>
            <img src={require('../../Assets/Registration/1.png')} alt='img1' className='ml-5' />
            <div className='mt-5 text-gray-600 font-medium text-start' ><pre>Lakhs of Genuine</pre> <span className='ml-8'>Profiles </span></div>
          </div>



          <div className='mt-5'>
            <img src={require('../../Assets/Registration/2.png')} alt='img1' className='ml-5' />
            <div className='mt-5 text-gray-600 font-medium text-start' ><pre>Many Verified by</pre> <span className='ml-5'>Personal Visit</span></div>
          </div>



          <div className='mt-5'>
            <img src={require('../../Assets/Registration/3.png')} alt='img1' className='ml-5' />
            <div className='mt-5 text-gray-600 font-medium text-start' ><pre className='ml-7'>Secure &</pre> <span className='ml-5'>Family Friendly</span></div>
          </div>



          <div className='mt-5'>
            <img src={require('../../Assets/Registration/4.png')} alt='img1' className='ml-5' />
            <div className='mt-5 text-gray-600 font-medium text-start' ><pre className='ml-10'>Strict</pre> <span className='ml-5'>Privacy Control</span></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProfileDetail