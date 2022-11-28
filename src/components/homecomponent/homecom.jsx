import React from 'react'

const Homecom = (props) => {

    const {background, title, description, start} = props


  return (
    <div className='w-full h-[80vh] bg-no-repeat bg-cover opacity-[.9]' style={{ backgroundImage:`url(${background})` }}>
        <input className='float-right mt-16 mr-28 w-72 h-[60px] rounded-[30px] pl-10' type="text" placeholder='Search'/>
         <div className='flex flex-col float-left h-[65vh] w-[50%] justify-center pl-36 '>
            <div className='text-white text-6xl font-bold py-2 leading-[70px]'>{title}</div>
            <div className='text-white text-xl py-2 leading-[30px]' >{description}</div>
            <div className='bg-[#FFBA33] w-64 h-[50px] text-[18px] text-center items-center rounded-[10px] justify-center py-3 mt-6 px-20'>
            <button onClick={start}>Get Started</button>
            </div>
        </div> 
    </div>
  )
}

export default Homecom