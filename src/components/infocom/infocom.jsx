import React from 'react'

const Infocom = (props) => {
  const {names, logos, about} = props


  return (

    <div className="flex w-full items-center justify-center text-center">
      <div className="flex space-x-4 box-border py-20 px-28 z-10 bg-white br-2  border ">
        <div className=" bg-yellow-400 w-12 h-12 rounded-full text-center items-center justify-center box-border border-3 flex text-lg ">
          {logos}
        </div>
        <div className="">
          <div className="text-3xl font-bold">{names}</div>
          <div className="">{about}</div>
      </div>
    </div>
    </div>

  )
}

export default Infocom

        {/* // <div className="flex justify-around items-center -mt-20 box-border h-40 w-[70%] border bg-white ">
        //   <div className="flex space-x-4">
        //     <div className="border-3 bg-yellow-400 w-12 h-12 rounded-full text-2xl items-center justify-center text-center flex mt-2">
        //       <BsPersonFill />
        //     </div>
        //     <div className="flex flex-col border-r-2 w-60">
        //       <div className="text-3xl font-bold"> 90+ </div>
        //       <div className="pl-1"> Staff</div>
        //   </div>
        // </div> */}