import FullWidthLayout from '../../layout/FullWidthLayout'
import PageNotFound from '../pageNotFound'
import Firebase from '../../fire'
import styled from 'styled-components'
import CardImage from '../../components/CardImage'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
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

const ContainerVariants = {
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
export default function Product({ data, siteConfig, footerLinks }) {
  const { setSiteConfig } = useContext(AppContext)
  useEffect(() => {
    setSiteConfig(siteConfig)
  }, [])
  return data === null ? (
    <PageNotFound />
  ) : (
    <FullWidthLayout
      headerConfig={{ type: 'product' }}
      footerLinks={footerLinks}
    >
      <Container
        variants={ContainerVariants}
        animate="visible"
        initial="hidden"
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div style={{ width: '60%' }}>
          <CardImage data={data.product.images} />
          <motion.div
            style={{ padding: 32 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ transition: 1, delay: 0.5 }}
          >
            <h1>{data.product.name}</h1>
            <h1>{data.story.title}</h1>
            <p>{data.story.body}</p>
          </motion.div>
        </div>
      </Container>
    </FullWidthLayout>
  )
}

Product.getInitialProps = async function(context) {
  try {
    const { id } = context.query
    const db = Firebase.firestore()
    const StoryQuerySnapshot = await db
      .collection('stories')
      .where('productID', '==', id)
      .get()
    const productRef = await db
      .collection('products')
      .doc(id)
      .get()
    const siteConfigRef = await db
      .collection('configs')
      .doc('site')
      .get()
    const FooterQuerySnapshot = await db
      .collection('links')
      // .where('location', '==', 'footer')
      .orderBy('order')
      .get()
    const stories = []
    StoryQuerySnapshot.forEach(story => {
      stories.push({ ...story.data(), id: story.id })
    })
    const links = []

    FooterQuerySnapshot.forEach(link => {
      links.push(link.data())
    })
    const product = productRef.data()
    const siteConfig = siteConfigRef.data()
    return {
      data:
        stories.length === 0 ? null : { story: stories[0], product: product },
      siteConfig: siteConfig,
      footerLinks: links
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
