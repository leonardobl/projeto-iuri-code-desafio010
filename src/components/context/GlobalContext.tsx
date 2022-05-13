import React from "react"

type GlobalContextProps = {
  pathNamePage: string
  setPathNamePage: (path: string)=> void
}

export const GlobalContext = React.createContext<GlobalContextProps>({} as GlobalContextProps)

export const GlobalContextProvider = ()=> {
  const [pathNamePage, setPathNamePage] = React.useState("")
  
  
  return (
    <GlobalContext.Provider value={
      {
        pathNamePage,
        setPathNamePage
      }
      
    }>
    
    </GlobalContext.Provider>
    )
  }