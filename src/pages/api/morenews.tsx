import React from "react"
import { NextApiRequest, NextApiResponse } from "next"
import { uuid } from "uuidv4"
import Image from "next/image"

import img17 from "../../../public/assets/imgs/17.jpg"
import img18 from "../../../public/assets/imgs/18.jpg"
import img19 from "../../../public/assets/imgs/19.jpg"
import img20 from "../../../public/assets/imgs/20.jpg"
import img21 from "../../../public/assets/imgs/21.jpg"
import img22 from "../../../public/assets/imgs/22.jpg"


type Data = {
  id: string,
  text: string,
  img: React.ReactNode
}

export default function handle(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const data:Data[] = [
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img17} alt="img17"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img18} alt="img18"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img19} alt="img19"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img20} alt="img20"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img21} alt="img21"/>
    },
    {
      id: uuid(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
      img: <Image src={img22} alt="img22"/>
    },
  ]


  res.status(200).json(data)
}
