import styled from 'styled-components'
import TextBtn from "../components/textBtn" 
import NewBtn from "../components/newBtn" 
import Antds from "../components/antdStyled" 
import Sinput from '../components/Input'
import { useState } from 'react'
import { Button } from 'antd';
export default function Home() {
  // const Button = styled.a`
  // display:inline-block;
  // border-radius:3px;
  // padding:0.5rem 0;
  // margin:0.5rem 1rem;
  // // width:11rem;
  // background:#ff6600;
  // color:black;
  // border:2px solid white;
  // // ${props => props.primary && css`
  // // background:white;
  // // color:black;
  // // `}
  // `
  return (
    
    <>
    {/* <Button
          href="https://github.com/styled-components/styled-components"
          target="_blank"
          rel="noopener"
          primary
          
          >
    GITHUB
    </Button>

    <TextBtn></TextBtn>
    <NewBtn/> */}

    {/* <Antds/>
    <p style={{width:"500px",margin:"50px auto",display:"flex",justifyContent:"space-between"}}>
            <Button>文本框</Button>
            <Button>密码框</Button>
            <Button>文字域</Button>
            <Button>搜索框</Button>
            <Button>Group</Button>
      </p> */}
    <Sinput type = "password"/>
    {/* <Button as={Link} href="/docs">Documentation</Button> */}
    </>
  )
}