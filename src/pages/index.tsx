import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '$gray100',
  cursor: 'pointer',
  borderRadius: 8,
  border: 0,
})

export default function Home() {
  return <Button>Hello World</Button>
}