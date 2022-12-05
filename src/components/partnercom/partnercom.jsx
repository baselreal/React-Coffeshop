import React from 'react'
import Amazon from '../partnercom/imgpartner/amazon.png'
import Discord from '../partnercom/imgpartner/discord.png'
import Netflix from '../partnercom/imgpartner/netflix.png'
import Reddit from '../partnercom/imgpartner/reddit.png'
import Spotify from '../partnercom/imgpartner/spotify.png'

const Partnercom = () => {
    const partnerImgArr = [
       {
        id: 11,
        part_img: Netflix
       },
       {
        id: 12,
        part_img: Reddit
       },
       {
        id: 13,
        part_img: Amazon
       },
       {
        id: 14,
        part_img: Discord
       },
       {
        id: 15,
        part_img: Spotify
       },
    ]

    const partnerTitle = 'Our Partner'

    const partnerMap = partnerImgArr.map((arrPart) => {
        return (
            <div key={arrPart.id}>
            <img className='w-[190px] h-[60px]' src={arrPart.part_img} alt="image can't be loaded" />
            </div>
        )
    })
  return (
    <div className='flex flex-col w-full items-center bg-gray-50'>
        <div className="font-bold font-rubik text-[35px] leading-7 py-20">{partnerTitle}</div>
        <div className='flex items-center opacity-[.2] space-x-7'>{partnerMap}</div>
    </div>
  )
}

export default Partnercom