import { createContext } from 'react'

interface ContextProps {
  siteConfig: any
  setSiteConfig: Function
  footer: any
  setFooter: Function
}
const GlobalContext = createContext<Partial<ContextProps>>({})

export default GlobalContext
