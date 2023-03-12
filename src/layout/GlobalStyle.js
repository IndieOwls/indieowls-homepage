import React from 'react'
import { createGlobalStyle } from 'styled-components'
import WebFont from 'webfontloader'
import 'normalize.css'

WebFont.load({
  google: {
    families: ['Open Sans:400,700', 'Montserrat:400'],
  },
})

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  min-width: 320px;
  background-color: #f5f5f5;
  font-size: 18px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Open Sans ', -apple-system, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', serif;
}
`

export default GlobalStyle
