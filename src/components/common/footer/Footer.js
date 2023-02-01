import styles from './Footer.module.scss'
import { ReactComponent as LinkedInLogo } from '../../../assets/images/design/icon-linkedin.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>
        2015 &minus; {new Date().getFullYear()}
      </div>
      <div className={styles.footerItem}>
        <Link
          to="https://www.linkedin.com/in/oleksandrtkachovst/"
          className={styles.footerLink}
        >
          <LinkedInLogo className={styles.footerLinkIcon} />
        </Link>
      </div>
      <div className={styles.footerItem}>
        <p className={styles.footerAuthor}>Oleksand Tkachov</p>
      </div>
    </footer>
  )
}

export default Footer
