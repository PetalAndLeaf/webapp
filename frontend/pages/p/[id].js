import FullWidthLayout from '../../layout/FullWidthLayout'
import PageNotFound from '../pageNotFound'
import Firebase from '../../fire'
import styled from 'styled-components'
import CardImage from '../../components/CardImage'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  max-width: 100%;
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 72px;
  background-color: #fbf2ee;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
`

const ContainerVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}
export default function Product({ data }) {
  return data === null ? (
    <PageNotFound />
  ) : (
    <FullWidthLayout>
      <Container
        variants={ContainerVariants}
        animate="visible"
        initial="hidden"
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <CardImage data={data.product.images} />
        <div style={{ padding: 32 }}>
          <h1>{data.product.name}</h1>
          <h1>{data.story.title}</h1>
          <p>{data.story.body}</p>
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
    const stories = []
    StoryQuerySnapshot.forEach(story => {
      stories.push({ ...story.data(), id: story.id })
    })
    const product = productRef.data()
    return {
      data:
        stories.length === 0 ? null : { story: stories[0], product: product }
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
