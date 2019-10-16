import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FeatherIcon from '../FeatherIcon'
import { styles } from '../../styles/theme'

const Root = styled.div`
  width: 100%;
  max-width: 240px;
  height: auto;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 8px 0;
`

interface NavItemProps {
  readonly isSelected: boolean
}
const NavItem = styled.div<NavItemProps>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  color: ${(props: any) =>
    props.isSelected
      ? styles.palette.text.primary
      : styles.palette.text.secondary};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${styles.palette.primary.main};
  }
  p {
    color: ${(props: any) =>
      props.isSelected
        ? styles.palette.text.primary
        : styles.palette.text.secondary};
  }
  &:hover p {
    color: ${styles.palette.primary.main};
    font-weight: 600;
  }
`
const NavItemText = styled.p`
  font-family: ${styles.typography.button.fontFamily};
  font-size: 14px;

  margin-left: 16px;
  transition: color 0.2s ease-in-out;
`

const navItems = [
  {
    path: 'profile',
    name: 'Account',
    icon: 'user'
  },
  {
    path: 'address',
    name: 'Shipping info',
    icon: 'location'
  },
  {
    path: 'payment',
    name: 'Payment info',
    icon: 'card'
  },
  {
    path: 'orders',
    name: 'Orders',
    icon: 'box'
  }
]
export default function AccountNav() {
  const router = useRouter()
  const path = router.asPath
  return (
    <Root>
      {navItems.map((item: any, i: number) => {
        const isSelect: boolean = path.includes(item.path)
        return (
          <Link href={`/account/${item.path}`} key={item + i}>
            <NavItem isSelected={isSelect}>
              <FeatherIcon icon={item.icon} />
              <NavItemText>{item.name}</NavItemText>
            </NavItem>
          </Link>
        )
      })}
    </Root>
  )
}
