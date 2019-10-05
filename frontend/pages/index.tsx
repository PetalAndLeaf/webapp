import React, { useContext, useEffect } from 'react'
import SplitLayout from '../layout/SplitLayout'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import AppContext from '../context/AppContext'
import loadDB from '../lib/fire'

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
  products: any[]
  footer: object
  siteConfig: any
}
export default function Index({ products, footer, siteConfig }: propsValue) {
  const { setSiteConfig, setFooter } = useContext(AppContext)

  useEffect(() => {
    setSiteConfig && setSiteConfig(siteConfig)
    setFooter && setFooter(footer)
  }, [])
  return (
    <SplitLayout hideHeader={siteConfig.hideHomeHeader}>
      <ProductList variants={listVariants}>
        {products.map((product, i) => {
          return <ProuductCard key={product + i} data={product} />
        })}
      </ProductList>
    </SplitLayout>
  )
}

Index.getInitialProps = async function() {
  try {
    const db = await loadDB()
    const ProductsQuerySnapshot = await db
      .collection('products')
      .orderBy('order')
      .get()

    const FooterRef = await db
      .collection('footer')
      .doc('EN')
      .get()

    const siteConfigRef = await db
      .collection('configs')
      .doc('site')
      .get()

    const products: any[] = []
    ProductsQuerySnapshot.forEach((product: any) => {
      products.push({ ...product.data(), id: product.id })
    })
    const footer = FooterRef.data()
    const siteConfig = siteConfigRef.data()
    return {
      products: products,
      footer: footer,
      siteConfig: siteConfig
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
