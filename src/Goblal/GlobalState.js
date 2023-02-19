
import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initial = {
  categories : [
    {id: 1, title: 'Product'},
    {id: 2, title: 'Pricing'},
    {id: 3, title: 'Solutions'},
    {id: 4, title: 'Demo'},
    {id: 5, title: 'Resources'},
  ],
 
}

export const GlobalState = createContext(initial)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initial)

  function showScreen()  {
    dispatch({
      type: 'SHOW',
    })
  }

  return (
    <GlobalState.Provider value={{
      categories: state.categories,
      showScreen
    }}>
      {children}
    </GlobalState.Provider>
  )
}