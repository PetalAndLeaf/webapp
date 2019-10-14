import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { styles } from '../../styles/theme'
import FeatherIcon from '../../components/FeatherIcon'
import { setConfig, setFooter } from '../../store/content/action'
import { Typography } from '@material-ui/core'
import RoundedBtn from '../../components/RoundedBtn'
import Router from 'next/router'
import TextBtn from '../../components/TextBtn'

const Container = styled(motion.div)`
  max-width: 100%;
`

const ContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Header = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: rgba(256, 256, 256, 1);
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
const Logo = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
`
const Main = styled.main`
  margin-top: 144px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
const Title = styled.div`
  margin-top: 32px;
`

const SmileyIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: 120px auto 32px;
  border-radius: 50%;
  background-color: ${styles.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Section = styled.div`
  max-width: 320px;
  margin: 32px auto;
`

const getOrderNumber = () => {
  return '102475934'
}
export default function Result() {
  const currentUser = useSelector((state: any) => state.user.currentUser)

  return (
    <Container
      variants={ContainerVariants}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header>
        <Link href="/">
          <Logo src="/static/logo.svg" />
        </Link>
      </Header>
      <Main>
        <SmileyIcon>
          <FeatherIcon icon="smile" style={{ width: 48, height: 48 }} />
        </SmileyIcon>
        <Title>
          <Typography variant="h4">Thanks for your order</Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            style={{ marginTop: 16 }}
          >
            We’ll send you a confirmation email and shipping updates to
          </Typography>
          <Typography variant="body2">
            {currentUser && currentUser.email}
          </Typography>
        </Title>
        <Section>
          <Typography variant="h6">Order number</Typography>
          <Typography variant="body2" color="textSecondary">
            {getOrderNumber()}
          </Typography>
        </Section>
        <Section>
          <Typography variant="h6">Delivery to</Typography>
          <Typography variant="body2" color="textSecondary">
            {(currentUser && currentUser.address) ||
              `amy pu \n 550 Moreland Way, Apt 3309 \n anta Clara, CA 95054`}
          </Typography>
        </Section>
        <RoundedBtn
          onClick={() => Router.push('/account')}
          style={{ display: 'block', maxWidth: 160, margin: '0 auto 16px' }}
        >
          Order details
        </RoundedBtn>
        <TextBtn onClick={() => Router.push('/')} style={{ display: 'block' }}>
          Back home
        </TextBtn>
      </Main>
    </Container>
  )
}

Result.getInitialProps = async function(ctx: any) {
  const { store, isServer } = ctx
  // store.dispatch(closeSidebar())
  if (isServer) {
    await store.dispatch(setConfig())
    await store.dispatch(setFooter())
  }
  return {
    isServer
  }
}
