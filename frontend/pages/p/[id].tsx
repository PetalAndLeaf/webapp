import React from 'react'
import FullWidthLayout from '../../layout/FullWidthLayout'
// import PageNotFound from '../pageNotFound'
import styled from 'styled-components'
import CardImage from '../../components/CardImage'
import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import RoseCakeStory from '../../components/RoseCakeStory'
import {
  setConfig,
  setFooter,
  getProduct,
  getProductStory
} from '../../store/content/action'
import { useSelector } from 'react-redux'

const Container = styled(motion.div)`
  max-width: 100%;
  /* width: 100%; */
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 72px;
  margin-top: 112px;
  background-color: #e6e7e1;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  min-height: 100vh;
  padding-bottom: 200px;
`

const ContainerVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80% 100px)`,
    // opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(50px at 80% 100px)',
    // opacity: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  const product = useSelector((state: any) => state.content.product)
  const story = useSelector((state: any) => state.content.story)

  return (
    <FullWidthLayout>
      <Container
        variants={ContainerVariants}
        animate="visible"
        initial="hidden"
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {id === 'rose-cake' ? (
          <RoseCakeStory product={product} story={story} />
        ) : (
          <div style={{ width: '60%' }}>
            <CardImage data={product.images} />
            <motion.div
              style={{ padding: 32 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ transition: 1, delay: 0.5 }}
            >
              <h1>{story.hero.title}</h1>
              <p>{story.hero.subtitle}</p>
            </motion.div>
          </div>
        )}
      </Container>
    </FullWidthLayout>
  )
}

Product.getInitialProps = async function(ctx: any) {
  const { store, query, isServer } = ctx
  const id = query.id
  const currentState = store.getState()
  if (isServer) {
    await store.dispatch(setConfig())
    await store.dispatch(setFooter())
  }
  if (currentState.content.product === null) {
    await store.dispatch(getProduct(id))
    await store.dispatch(getProductStory(id))
  }

  return {
    isServer
  }
}
