import React from "react";
import Footer_logo from "./footeraseets/footercoffe.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineCopyright } from "react-icons/ai";

const Footercom = () => {
  const shop_name = "Coffee Shop";
  const footer_logo = Footer_logo;
  const footer_desc = "Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans";
  const footer_media = [
    {
      Id: 212,
      Logo: <TiSocialFacebook />,
    },
    {
      Id: 213,
      Logo: <TiSocialTwitter />,
    },
    {
      Id: 214,
      Logo: <TiSocialInstagram />,
    },
  ];
  const footer_since = <AiOutlineCopyright />;
  const footer_date = "2020CoffeeStore";
  const product_title = 'PRODUCT'
  const engage_title = 'ENGAGE'

  const footer_product = [
    {
      Id: 498,
      Prod: "Download",
    },
    {
      Id: 4125,
      Prod: "Pricing",
    },
    {
      Id: 12526,
      Prod: "Locations",
    },
    {
      Id: 12512,
      Prod: "Countries",
    },
    {
      Id: 27242,
      Prod: "Blog",
    },
  ];

  const footer_engage = [
    {
      Id: 125126,
      Eng: "Coffe Shop?",
    },
    {
      Id: 1212563,
      Eng: "FAQ",
    },
    {
      Id: 12348385126,
      Eng: "About Us",
    },
    {
      Id: 126236278,
      Eng: "Privacy and Policy",
    },
    {
      Id: 23273,
      Eng: "Terms of Service",
    },
  ];



  const handleFooterMedia = footer_media.map((media) => {
    return (
      <ul key={media.Id}>
        <li className="bg-[#FFBA33] rounded-full text-center p-1 items-center">
          <a href="/">{media.Logo}</a>
        </li>
      </ul>
    );
  });

  const handleFooterProduct = footer_product.map((list) => {
    return (
      <ul key={list.Id}>
        <li>
          <a href="/">{list.Prod}</a>
        </li>
      </ul>
    );
  });

  const handleFooterEngage = footer_engage.map((engange) => {
    return (
      <ul key={engange.Id}>
        <li>
          <a href="/">{engange.Eng}</a>
        </li>
      </ul>
    );
  });

  return (
    <div className="flex w-full font-rubik justify-center -mt-10 bg-gray-200">
      <div className="flex lg:flex-row md:flex-row flex-col lg:w-[80%] md:w-[90%] w-full pt-20 lg:py-20 py-10 px-5">
        <div className="flex flex-col">
          <div className="flex space-x-3">
            <img className="w-[30px] h-[33px] pt-1 mix-blend-multiply" src={footer_logo} alt="" />
            <div className="text-[#0B132A] text-xl font-bold pt-1">{shop_name}</div>
          </div>
          <div className="text-[#4F5665] font-semibold text-[16px] leading-7 lg:w-[70%] md:w-[70%] w-[90%] py-4">{footer_desc}</div>
          <div className="flex box-border border-3 ">
            <div className="flex space-x-2 text-[30px] ">{handleFooterMedia}</div>
          </div>
          <div className="flex pt-5 opacity-[.7]">
            <div className="text-[16px] leading-7 pt-[5px] opacity-[.7]">{footer_since}</div>
            <div className="text-[16px] leading-7">{footer_date}</div>
          </div>
        </div>
        <div className="flex vsm:grid lg:justify-end md:justify-end w-full lg:flex-row md:flex-row flex-col SE:pt-5">
          <div className="lg:pr-20 SE:pb-5">
            <div className="text-[#0B132A] font-semibold text-[18px] ">{product_title}</div>
          <div className="flex vsm:grid vsm:grid-cols-3 SE:grid-cols-2 SE:text-left SE:gap-2 vsm:text-center vsm:space-x-0 lg:space-y-3 vsm:items-center  md:space-y-3 pr-16 lg:pt-6 md:pt-6 pt-3 pb-6 lg:flex-col md:flex-col flex-row lg:space-x-0 md:space-x-0 space-x-4  vsm:space-y-2 vsm:gap-4 ">{handleFooterProduct}</div>
          </div>
          <div className="md:pl-10 w-max ">
            <div className="text-[#0B132A] font-semibold text-[18px]">{engage_title}</div>
          <div className="flex vsm:grid vsm:grid-cols-3 SE:grid-cols-2 SE:col-start-2 SE:text-left SE:gap-4 fold:text-60 vsm:text-center vsm:space-x-0 lg:space-y-3 vsm:items-center  md:space-y-3 pr-16 lg:pt-6 md:pt-6 pt-3 pb-6 lg:flex-col md:flex-col flex-row lg:space-x-0 md:space-x-0 space-x-4  vsm:space-y-2 vsm:gap-4 ">{handleFooterEngage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footercom;
