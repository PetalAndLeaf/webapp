import { createContext } from 'react'

interface ContextProps {
  siteConfig: {
    isCheckoutAvailable: boolean
    language: string
  }
  setSiteConfig: Function
  footer: {
    links: any[]
  }
  setFooter: Function
  count: number
  setCount: Function
}
const AppContext = createContext<Partial<ContextProps>>({})

export default AppContext
