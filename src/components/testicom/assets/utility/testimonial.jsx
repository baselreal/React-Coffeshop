import React from "react";
import Kim from '../testimage/kim.png'
import Viezh from '../testimage/viezh.png'
import Yessica from '../testimage/yessica.png'
import {AiFillStar} from 'react-icons/ai'


 export const testiArr = [
    {
      id: 45,
      test_img: Viezh,
      test_name: "Viezh Robert",
      test_town: "Warsaw, Poland",
      test_star: <AiFillStar />,
      test_score: 4.5,
      test_comment: "“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!",
    },
    {
      id: 50,
      test_img: Yessica,
      test_name: "Yessica Christy",
      test_town: "Shanxi, China",
      test_star: <AiFillStar />,
      test_score: 4.5,
      test_comment: "“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte",
    },
    {
      id: 55,
      test_img: Kim,
      test_name: "Kim Young Jou",
      test_town: "Seoul, South Korea",
      test_star: <AiFillStar />,
      test_score: 4.5,
      test_comment: "“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!",
    },
  ];

