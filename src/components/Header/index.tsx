import React from 'react'
import { MyLink } from '../MyLink'
import * as S from "./styles"
import { v4 } from "uuid"
import { GlobalContext } from '../context/GlobalContext'
import Image from 'next/image'
import hamburguerMenu from "../../../public/assets/imgs/hamburguerMenu.svg"
import { useWidth } from '../../hooks/useWidth'

export const Header = () => {
  const { pathNamePage } = React.useContext(GlobalContext)
  const width = useWidth()
  
  return (
    <S.Container>
      <h1>Naped</h1>
      { width < 415 ? 
      ( <a href='#' className='menu-hamburguer-icon' >
        <Image src={hamburguerMenu} alt="hamburguer menu"  />
      </a> )
        :
        ( <S.NavLinks>
          <MyLink hf='/' path={pathNamePage} text={"Home"} key={ v4() }/>
          <MyLink hf='/series' path={pathNamePage} text={"Series"} key={ v4() }/>
          <MyLink hf='/filmes' path={pathNamePage} text={"Filmes"} key={ v4() }/>
          <MyLink hf='/animes' path={pathNamePage} text={"Animes"} key={ v4() }/>
          <MyLink hf='/games' path={pathNamePage} text={"Games"} key={ v4() }/>
        </S.NavLinks> )
        }
    </S.Container>
        )
      }
