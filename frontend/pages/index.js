import React from 'react'
import SplitLayout from '../layout/SplitLayout'
import Hero from '../components/Hero'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Firebase from '../fire'

const ProductList = styled(motion.div)`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
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
export default function Index({ products }) {
  return (
    <SplitLayout Left={Hero}>
      <ProductList variants={listVariants}>
        {products.map((product, i) => {
          return <ProuductCard key={product + i} data={product} custom={i} />
        })}
      </ProductList>
    </SplitLayout>
  )
}

Index.getInitialProps = async function() {
  try {
    const db = Firebase.firestore()
    const QuerySnapshot = await db
      .collection('products')
      .orderBy('order')
      .get()
    const products = []
    QuerySnapshot.forEach(product => {
      products.push({ ...product.data(), id: product.id })
    })
    return {
      products: products
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
