import React from 'react'
import styled , { ThemeProvider }from 'styled-components'

export default function textBtn() {
    const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  
    /* Color the border and text with theme.main */
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
  `;
    // Button.defaultProps= {
    //     theme:{
    //         main:"palevioletred"
    //     }
    // }
    // const theme = {
    //     main:"mediumseagreen"
    // }
    Button.defaultProps = {
        theme: {
          main: "palevioletred"
        }
      }
      
      // Define what props.theme will look like
      const theme = {
        main: "mediumseagreen"
      };
    return (
        <div>
            <Button>Normal</Button>
            <ThemeProvider theme={theme}>
                <Button>Theme覆盖</Button>
            </ThemeProvider>
        </div>
    )
}
