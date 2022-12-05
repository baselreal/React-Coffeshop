import React from 'react'

const Promocom = () => {

    const promo_title = 'Check our promo today!'
    const choosen_promo = 'Let’s see the deals and pick yours!'
    const promo_btn = <button>See promo</button>
    
  return (
    <div className='flex w-full font-rubik justify-center pt-20 bg-gray-50'>
        <div className='box-border rounded-lg bg-white w-[80%]'>
            <div className='flex w-full justify-between'>
                <div className='flex-col float-left w-[40%]'>
            <div className='pt-[58px] pl-[70px] font-bold text-[35px] leading-9 w-full'>{promo_title}</div>
            <div className='py-8 pl-[70px] text-[16px] font-normal'>{choosen_promo}</div>
                </div>
            <div className='flex items-center justify-end pr-8 float-right w-max'>
            <div className='bg-[#FFBA33] inline-block h-fit py-4 px-20 rounded-lg font-bold text-center leading-6'>{promo_btn}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Promocom