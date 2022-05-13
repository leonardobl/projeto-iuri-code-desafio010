import React from 'react'
import Link from 'next/link'
import * as S from "./styles"


type MyLinkProps = {
  text: string,
  path: string,
  hf: string
}


export const MyLink = ( { text, path, hf } : MyLinkProps ) => {

  return (
    <S.Container>
      <Link href={hf} className={ path == hf ? "active" : "" }>{text}</Link>
    </S.Container>
  )
}
