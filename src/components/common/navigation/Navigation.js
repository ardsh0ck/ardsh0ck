import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styles from './Navigation.module.scss'
import userIcon from '../../../assets/images/design/icon8bit.png'

const Navigation = () => {
  const links = [
    {
      url: '/',
      img: userIcon,
      text: 'Home page',
      id: uuidv4(),
    },
    {
      url: '/works',
      text: 'Works',
      id: uuidv4(),
    },
    {
      url: '/about',
      text: 'About',
      id: uuidv4(),
    },
    {
      url: '/music',
      text: 'Music',
      id: uuidv4(),
    },
  ]

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {links.map((link) => {
          return (
            <li className={styles.navigationItem} key={link.id}>
              <NavLink
                to={link.url}
                title={link.text}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigationLink} ${styles.navigationLinkActive}`
                    : styles.navigationLink
                }
              >
                {link.img && (
                  <img src={link.img} className={styles.navigationLinkIcon} />
                )}
                {!link.img && link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
