import React, { useContext, useEffect } from 'react'
import SplitLayout from '../layout/SplitLayout'
import Hero from '../components/Hero'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Firebase from '../fire'
import AppContext from '../context/AppContext'

const ProductList = styled(motion.div)`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  padding-top: 96px;
`
const listVariants = {
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
export default function Index({ products, footerLinks, siteConfig }) {
  const { setSiteConfig } = useContext(AppContext)

  useEffect(() => {
    setSiteConfig(siteConfig)
  }, [])
  return (
    <SplitLayout
      Left={Hero}
      footerLinks={footerLinks}
      headerConfig={{ hide: siteConfig.hideHomeHeader, type: 'home' }}
    >
      <ProductList variants={listVariants}>
        <AnimatePresence>
          {products.map((product, i) => {
            return <ProuductCard key={product + i} data={product} custom={i} />
          })}
        </AnimatePresence>
      </ProductList>
    </SplitLayout>
  )
}

Index.getInitialProps = async function() {
  try {
    const db = Firebase.firestore()
    const ProductsQuerySnapshot = await db
      .collection('products')
      .orderBy('order')
      .get()

    const FooterQuerySnapshot = await db
      .collection('links')
      // .where('location', '==', 'footer')
      .orderBy('order')
      .get()

    const siteConfigRef = await db
      .collection('configs')
      .doc('site')
      .get()

    const products = []
    ProductsQuerySnapshot.forEach(product => {
      products.push({ ...product.data(), id: product.id })
    })

    const links = []
    const siteConfig = siteConfigRef.data()

    FooterQuerySnapshot.forEach(link => {
      links.push(link.data())
    })

    return {
      products: products,
      footerLinks: links,
      siteConfig: siteConfig
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
