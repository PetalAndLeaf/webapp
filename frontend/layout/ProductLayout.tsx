import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import ProductInfo from '../components/Product/ProductInfo'

const Root = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Main = styled.div`
  max-width: 100%;
  margin-top: 160px;
  padding-right: 30%;
  position: relative;
`

const Story = styled.div`
  /* padding-right: 16px; */
`
const Aside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  overflow-y: hidden;
`
interface StickyPanelProps {
  readonly stickToBottom: boolean
}
const StickyPanel = styled(motion.div)<StickyPanelProps>`
  position: ${(props: any) => (props.stickToBottom ? 'absolute' : 'fixed')};
  top: ${(props: any) => (props.stickToBottom ? 'auto' : '160px')};
  bottom: ${(props: any) => (props.stickToBottom ? '72px' : 'auto')};

  width: ${(props: any) => (props.stickToBottom ? '100%' : '30%')};
`

interface propsValue {
  children: JSX.Element[] | JSX.Element
  data: any
}
export default function ProductLayout({ children, data }: propsValue) {
  const storyRef = useRef<any>()
  const stickyPanelRef = useRef<any>()
  const isBrowser = typeof window !== `undefined`
  const [stickToBottom, setStickToBottom] = useState(false)
  const [scrollAnchor, setScrollAnchor] = useState(0)
  useEffect(() => {
    if (!isBrowser) {
      return
    }
    const handleScroll = () => {
      const storyBoundingBox = storyRef.current.getBoundingClientRect()
      const stickyPanelBox = stickyPanelRef.current.getBoundingClientRect()

      const storyBottom = storyBoundingBox.bottom
      const storyTop = storyBoundingBox.top
      const stickyPanelBottom = stickyPanelBox.bottom
      if (storyBottom <= stickyPanelBottom && stickToBottom === false) {
        setStickToBottom(true)
        setScrollAnchor(storyTop)
      }

      if (storyTop > scrollAnchor && stickToBottom === true) {
        setStickToBottom(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [stickToBottom])

  return (
    <Root>
      <Header type='product' />
      <Main>
        <Story ref={storyRef}>{children}</Story>
        <Aside>
          <StickyPanel ref={stickyPanelRef} stickToBottom={stickToBottom}>
            <ProductInfo data={data} />
          </StickyPanel>
        </Aside>
      </Main>
      <Footer />
    </Root>
  )
}
