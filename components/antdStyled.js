import React from 'react'
import {  Button } from 'antd';
import styled , { ThemeProvider }from 'styled-components'

export default function antdStyled() {
    const Button1 = styled(Button)`
            color:hotpink;
            border-color:hotpink
    `
    return (
        <div>
                <Button1>TL</Button1>
        </div>
    )
}
