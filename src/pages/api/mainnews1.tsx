// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Image from 'next/image'
import React from "react"

import img1 from "../../../public/assets/img/"

type Data = {
  text: string,
  img: React.ReactNode
}

export default function handler(
  
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
    const data: Data[] = [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        img: <Image src={"gdfgfd"} />
      },
      
    ]
    
    
    
    
    res.status(200).json({ name: 'John Doe' })
  }
