// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Image from 'next/image'
import React from "react"
import { uuid } from "uuidv4"

import img1 from "../../../public/assets/imgs/1.jpg"
import img2 from "../../../public/assets/imgs/2.jpg"
import img3 from "../../../public/assets/imgs/3.jpg"

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
        img: <Image src={img1} alt="imag1" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img2} alt="imag2" />
      },
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={img3} alt="imag3" />
      },
    ]
    
    
    
    
    res.status(200).json(data)
  }