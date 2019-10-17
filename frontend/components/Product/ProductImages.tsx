import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Image = styled.img`
  width: 100%;
  height: auto;
`
interface propsValue {
  images: string[]
}
export default function ProductImages({ images }: propsValue) {
  return (
    <Container>
      {images.map((img: string, i: number) => {
        return <Image src={`/static/images/${img}`} alt={img} key={img + i} />
      })}
    </Container>
  )
}
