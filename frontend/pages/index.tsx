import React from 'react'
import SplitLayout from '../layout/SplitLayout'
import ProuductCard from '../components/ProductCard'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import Firebase from '../fire'

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
}
export default function Index({ products }: propsValue) {
  return (
    <SplitLayout>
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
    const db = Firebase.firestore()
    const QuerySnapshot = await db
      .collection('products')
      .orderBy('order')
      .get()
    const products: any[] = []
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
