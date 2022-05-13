import React from 'react'
import * as S from "./styles"
import { useWidth } from '../../../hooks/useWidth'
import { Header } from '../../Header'
import Head from 'next/head'


export const Home = () => {

  const width = useWidth()

  return (
    <S.Container>
      <Head>
        <title>Naped - Home</title>
      </Head>
      <Header />
    </S.Container>
  )
}
