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
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
`
export default function Header() {
  const feather = require('feather-icons')
  return (
    <Container>
      <div></div>
      <div>
        <IconBtn icon="shopping-bag" />
      </div>
    </Container>
  )
}
