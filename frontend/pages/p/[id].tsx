import FullWidthLayout from '../../layout/FullWidthLayout'
import PageNotFound from '../pageNotFound'
import Firebase from '../../fire'
import styled from 'styled-components'
import CardImage from '../../components/CardImage'
import { motion, Variants } from 'framer-motion'

const Container = styled(motion.div)`
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 72px;
  margin-top: 120px;
  background-color: #fbf2ee;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
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
  data: {
    product: {
      images: string[]
      name: string
    }
    story: {
      title: string
      body: string
    }
  }
}
export default function Product({ data }: propsValue) {
  return data === null ? (
    <PageNotFound />
  ) : (
    <FullWidthLayout>
      <Container variants={ContainerVariants} animate='open' initial='closed'>
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

Product.getInitialProps = async function(context: any) {
  try {
    const { id } = context.query
    const db = Firebase.firestore()

    const productRef = await db
      .collection('products')
      .doc(id)
      .get()
    const product = productRef.data()
    console.log(product)
    return {
      data: product
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}
