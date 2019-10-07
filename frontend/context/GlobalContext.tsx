import { createContext } from 'react'

interface ContextProps {
  siteConfig: any
  setSiteConfig: Function
  footer: any
  setFooter: Function
  cartOpen: boolean
  setCartOpen: Function
  cartItems: any[]
  setCartItems: Function
}
const GlobalContext = createContext<Partial<ContextProps>>({})

export default GlobalContext
