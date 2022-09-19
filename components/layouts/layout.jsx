import { Nav } from '../nav'
import { Footer } from '../footer'

const Layout = ({ children }) => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Nav />
      <div className='wrapper'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
