import styles from './Footer.module.scss'
//import { ReactComponent as LinkedInLogo } from '../../../assets/images/design/icon-linkedin.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p className={styles.footerTopHeading}>get in touch</p>
      </div>
    </footer>
  )
}

export default Footer
