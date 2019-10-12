import React from 'react'
import SplitLayout from '../layout/SplitLayout'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import { setConfig, setFooter, getProductList } from '../store/content/action'

const ProductList = styled(motion.div)`
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  padding-top: 96px;
  flex: 1;
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

function Index() {
  const siteConfig = useSelector((state: any) => state.content.siteConfig)
  const productList = useSelector((state: any) => state.content.productList)

  return (
    <SplitLayout hideHeader={siteConfig.hideHomeHeader}>
      <ProductList variants={listVariants}>
        {productList.map((product: any, i: number) => {
          return <ProuductCard key={product + i} data={product} />
        })}
      </ProductList>
    </SplitLayout>
  )
}

Index.getInitialProps = async function(ctx: any) {
  const { store, isServer } = ctx
  const currentState = store.getState()
  if (isServer) {
    await store.dispatch(setConfig())
    await store.dispatch(setFooter())
  }
  if (currentState.content.productList === null) {
    await store.dispatch(getProductList())
  }

  return {
    isServer
  }
}

export default Index
