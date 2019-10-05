import FullWidthLayout from '../../layout/FullWidthLayout'
import PageNotFound from '../pageNotFound'
import loadDB from '../../lib/fire'
import styled from 'styled-components'
import CardImage from '../../components/CardImage'
import { motion, Variants } from 'framer-motion'
import { useEffect, useContext } from 'react'
import AppContext from '../../context/AppContext'

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
`

const ContainerVariants: Variants = {
  hidden: {
    y: 100,
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
  const { setSiteConfig, setFooter } = useContext(AppContext)
  useEffect(() => {
    setSiteConfig && setSiteConfig(siteConfig)
    setFooter && setFooter(footer)
  }, [])
  return product === null ? (
    <PageNotFound />
  ) : (
    <FullWidthLayout>
      <Container variants={ContainerVariants} animate='open' initial='closed'>
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
      </Container>
    </FullWidthLayout>
  )
}

Product.getInitialProps = async function(context: any) {
  try {
    const { id } = context.query
    const db = await loadDB()

    const productRef = await db.doc(`products/${id}`).get()

    const productStoryRef = await db.doc(`products/${id}/stories/2019EN`).get()

    const FooterRef = await db
      .collection('footer')
      .doc('EN')
      .get()

    const siteConfigRef = await db
      .collection('configs')
      .doc('site')
      .get()

    const product = productRef.data()
    const story = productStoryRef.data()
    const footer = FooterRef.data()
    const siteConfig = siteConfigRef.data()

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
