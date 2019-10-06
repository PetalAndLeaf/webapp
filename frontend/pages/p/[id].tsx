import FullWidthLayout from '../../layout/FullWidthLayout'
import PageNotFound from '../pageNotFound'
import styled from 'styled-components'
import CardImage from '../../components/CardImage'
import { motion, Variants } from 'framer-motion'
import { useEffect, useContext } from 'react'
import AppContext from '../../context/AppContext'
import { useRouter } from 'next/router'
import RoseCakeStory from '../../components/RoseCakeStory'
import {
  fetchProduct,
  fetchProductStory,
  fetchFooter,
  fetchSiteConfig
} from '../../lib/dataFetch'

const Container = styled(motion.div)`
  max-width: 100%;
  /* width: 100%; */
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 72px;
  margin-top: 96px;
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
interface propsValue {
  product: any
  story: any
  footer: object
  siteConfig: object
}
export default function Product({
  product,
  story,
  footer,
  siteConfig
}: propsValue) {
  const router = useRouter()
  const { setSiteConfig, setFooter, count, setCount } = useContext(AppContext)
  useEffect(() => {
    setSiteConfig && setSiteConfig(siteConfig)
    setFooter && setFooter(footer)

    console.log(`hey id! ${count} i'm here sleepy ==============`)
    setCount && setCount()
  }, [])
  return product === null ? (
    <PageNotFound />
  ) : (
    <FullWidthLayout>
      <Container
        variants={ContainerVariants}
        animate="visible"
        initial="hidden"
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {router.query.id === 'rose-cake' ? (
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

Product.getInitialProps = async function(context: any) {
  try {
    const { id } = context.query

    const product = await fetchProduct(id)
    const story = await fetchProductStory(id)
    const footer = await fetchFooter()
    const siteConfig = await fetchSiteConfig()

    return {
      product: product,
      story: story,
      footer: footer,
      siteConfig: siteConfig
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
