
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
  subcategories: [
    {id: 1, title: 'Service', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {id: 2, title: 'Sale'},
    {id: 3, title: 'Platform'},
    {id: 4, title: 'Market Place', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
  ]
}

export const GlobalState = createContext(initial)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initial)



  return (
    <GlobalState.Provider value={{
      categories: state.categories,
      subcategories: state.subcategories,
      
    }}>
      {children}
    </GlobalState.Provider>
  )
}