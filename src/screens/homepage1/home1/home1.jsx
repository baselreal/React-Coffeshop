import React from 'react'

 const home1 = () => {
  return (
    <div className='background'>
        <input className='float-right mt-5 mr-20 w-72 h-[60px] rounded-[30px] pl-10' type="text" placeholder='Search'/>
         <div className='flex flex-col float-left h-[55vh] w-[50%] justify-center pl-36 '>
            <div className='text-white text-6xl font-bold py-2 leading-[70px]'>Start Your Day with Coffee and Good Meals</div>
            <div className='text-white text-xl py-2 leading-[30px]' >We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</div>
            <div className='bg-[#FFBA33] w-64 rounded-[10px] justify-center py-2 mt-5 px-20'>
            <div className='text-[#6A4029] leading-[25px]'>Get Started</div>
            </div>
        </div>
    </div>
  )
}


export default home1