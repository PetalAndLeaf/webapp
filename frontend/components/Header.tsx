import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import IconBtn from './IconBtn'

const Container = styled.header`
  width: 100%;
  height: 72px;
  /* border-bottom: 1px solid ${styles.palette.divider}; */
  display: flex;
  align-items: center;
  background-color: rgba(256,256,256,0.9);
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
export default function Header() {
  return (
    <Container>
      <div></div>
      <div>
        <IconBtn icon='shopping-bag' />
      </div>
    </Container>
  )
}
