import React from 'react'

export const useWidth = () => {
  const [width, setWidth] = React.useState(0)
  
  function handleSize(){
    setWidth( window.innerWidth )
  }
  
  React.useEffect( ()=>{
    if(width == 0) {
      handleSize()
    }
  }, [width] )
  
  React.useEffect( ()=>{
    window.addEventListener("resize", handleSize)
    return ()=> window.addEventListener("resize", handleSize)
  }, [] )
  
  
  
  return width
}