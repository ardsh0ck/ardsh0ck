import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
