import React, { useContext, useEffect } from 'react'
import SplitLayout from '../layout/SplitLayout'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import AppContext from '../context/AppContext'

import {
  fetchFooter,
  fetchSiteConfig,
  fetchProductList
} from '../lib/dataFetch'

const ProductList = styled(motion.div)`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  padding-top: 96px;
`
const listVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}
interface propsValue {
  productList: any[]
  footer: object
  siteConfig: any
}
export default function Index({ productList, footer, siteConfig }: propsValue) {
  const { setSiteConfig, setFooter, count, setCount } = useContext(AppContext)
  useEffect(() => {
    setSiteConfig && setSiteConfig(siteConfig)
    setFooter && setFooter(footer)
    console.log(`hey index! ${count} i'm here sleepy ==============`)
    setCount && setCount()
  }, [])

  return (
    <SplitLayout hideHeader={siteConfig.hideHomeHeader}>
      <ProductList variants={listVariants}>
        {productList.map((product, i) => {
          return <ProuductCard key={product + i} data={product} />
        })}
      </ProductList>
    </SplitLayout>
  )
}

Index.getInitialProps = async function() {
  try {
    const productList = await fetchProductList()
    const footer = await fetchFooter()
    const siteConfig = await fetchSiteConfig()
    return {
      productList: productList,
      footer: footer,
      siteConfig: siteConfig
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
