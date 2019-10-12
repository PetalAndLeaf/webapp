import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import { Typography } from '@material-ui/core'

const Root = styled.div`
  display: inline-block;
  height: 36px;
  width: auto;
  min-width: 160px;
  background: ${styles.palette.primary.main};
  cursor: pointer;
  border-radius: 18px;
  border: none;
  outline: none;
  text-align: center;
  line-height: 36px;
  transition: all 0.2s ease-in-out;
  /* padding-left: 24px;
  padding-right: 24px; */
  color: ${styles.palette.text.primary};
  &:hover .btnText {
    display: none;
  }
  &:hover .optionsWrap {
    display: flex;
  }
`
const OptionsWrap = styled.div`
  display: none;
  margin-top: 6px;
  width: 100%;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;
`
const Option = styled.button`
  height: 24px;
  width: 64px;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  outline: none;
  text-align: center;
  line-height: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
  }
`
// interface propsValue {
//   onClick?: () => {}
//   btype?: any
//   children: any
//   moreProps?: any
// }

const sizes = ['30g', '50g']
export default function AddToBagBtn() {
  return (
    <Root>
      <OptionsWrap className="optionsWrap">
        {sizes.map((s, i) => {
          return (
            <Option key={s + i}>
              <Typography
                variant="button"
                style={{
                  textTransform: 'none'
                }}
              >
                {s}
              </Typography>
            </Option>
          )
        })}
      </OptionsWrap>
      <Typography
        className="btnText"
        variant="button"
        style={{
          textTransform: 'none'
        }}
      >
        Add to bag
      </Typography>
    </Root>
  )
}
