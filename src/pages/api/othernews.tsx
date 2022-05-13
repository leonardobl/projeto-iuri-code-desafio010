// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Image from 'next/image'
import React from "react"
import { uuid } from "uuidv4"

import img4 from "../../../public/assets/imgs/4.jpg"
import img5 from "../../../public/assets/imgs/5.jpg"
import img6 from "../../../public/assets/imgs/6.jpg"
import img7 from "../../../public/assets/imgs/7.jpg"
import img8 from "../../../public/assets/imgs/8.jpg"
import img9 from "../../../public/assets/imgs/9.jpg"
import img10 from "../../../public/assets/imgs/10.jpg"
import img11 from "../../../public/assets/imgs/11.jpg"
import img12 from "../../../public/assets/imgs/12.jpg"
import img13 from "../../../public/assets/imgs/13.jpg"

type Data = {
  id: string,
  text: string,
  img: React.ReactNode
}

export default function handler(
  
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
  ) {
    
    const data: Data[] = [
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img4} alt="imag4" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img5} alt="imag5" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img6} alt="imag6" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img7} alt="imag7" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img8} alt="imag8" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img9} alt="imag9" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img10} alt="imag10" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img11} alt="imag11" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img12} alt="imag12" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img13} alt="imag13" />
      },
    ]
    
    
    
    
    res.status(200).json(data)
  }