import React from "react"
import { NextApiRequest, NextApiResponse } from "next"
import {uuid} from "uuidv4"
import Image from "next/image"

import img14 from "../../../public/assets/imgs/14.jpg"
import img15 from "../../../public/assets/imgs/15.jpg"
import img16 from "../../../public/assets/imgs/16.jpg"
import img17 from "../../../public/assets/imgs/17.jpg"


type Data = {
  id: string,
  text: string,
  img: React.ReactNode
}


export default function Handle (req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const data: Data[] = [
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img14}  alt="img14"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img15}  alt="img15"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img16}  alt="img16"/>
    },
  ]
  res.status(200).json(data)
}