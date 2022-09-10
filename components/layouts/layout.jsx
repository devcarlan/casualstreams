import { Nav } from '../nav'
import { Footer } from '../footer'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
