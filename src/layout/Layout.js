import { GlobalStyle } from './GlobalStyle'

export function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
