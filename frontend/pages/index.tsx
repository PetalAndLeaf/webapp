import React, { useContext } from 'react'
import SplitLayout from '../layout/SplitLayout'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import GlobalContext from '../context/GlobalContext'

import { fetchProductList } from '../lib/dataFetch'

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
}
export default function Index({ productList }: propsValue) {
  const { siteConfig } = useContext(GlobalContext)
  return (
    <SplitLayout hideHeader={siteConfig ? siteConfig.hideHomeHeader : false}>
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
    console.log('index fetching')
    return {
      productList: productList
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
