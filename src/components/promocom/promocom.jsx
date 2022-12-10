import React from 'react'

const Promocom = () => {

    const promo_title = 'Check our promo today!'
    const choosen_promo = 'Let’s see the deals and pick yours!'
    const promo_btn = <button>See promo</button>
    
  return (
    <div className='flex w-full font-rubik justify-center pt-20 bg-gray-50'>
        <div className='box-border rounded-lg bg-white lg:w-[80%] md:w-[90%] w-[90%] '>
            <div className='flex lg:flex-row md:flex-row flex-col w-full lg:justify-between md:justify-between items-center'>
                <div className='flex-col lg:w-[40%] md:w-[40%] w-[90%] lg:pl-[70px] md:pl-[50px] pl-[10px]'>
            <div className='pt-[58px] font-bold lg:text-[35px] text-[30px] mini:text-[25px] leading-9 w-full'>{promo_title}</div>
            <div className='py-8  lg:text-[16px] md:text-[16px] text-[14px]  font-normal'>{choosen_promo}</div>
                </div>
            <div className='flex lg:flex-row md:flex-row flex-col items-center lg:justify-end md:justify-end justify-center  lg:pr-8 md:pr-8 pr-0  lg:float-right md:float-right w-max'>
            <div className='bg-[#FFBA33] inline-block h-fit py-4 lg:px-20 md:px-16 px-10 rounded-lg font-bold text-center leading-6 text-[14px] mb-5'>{promo_btn}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Promocom