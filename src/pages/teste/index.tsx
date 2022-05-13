import React from 'react'
import { useRouter } from 'next/router'

const Teste = () => {
const route = useRouter()

React.useEffect( ()=>{
  console.log(route.pathname)
} )

  return (
    <div>texte</div>
  )
}

export default Teste