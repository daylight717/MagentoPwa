import styled from 'styled-components'
import TextBtn from "../components/textBtn" 
import NewBtn from "../components/newBtn" 
import Antds from "../components/antdStyled" 
export default function Home() {

  const Button = styled.a`
  display:inline-block;
  border-radius:3px;
  padding:0.5rem 0;
  margin:0.5rem 1rem;
  // width:11rem;
  background:#ff6600;
  color:black;
  border:2px solid white;
  // ${props => props.primary && css`
  // background:white;
  // color:black;
  // `}
  `
  return (
    
    <>
    <Button
          href="https://github.com/styled-components/styled-components"
          target="_blank"
          rel="noopener"
          primary
          
          >
    GITHUB
    </Button>

    <TextBtn></TextBtn>
    <NewBtn/>

    <Antds/>
    {/* <Button as={Link} href="/docs">Documentation</Button> */}
    </>
  )
}