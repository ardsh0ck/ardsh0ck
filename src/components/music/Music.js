import { ReactComponent as VinylIcon } from '../../assets/images/svg/icon-vinyl.svg'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../../utils/setDocumentTitle'
import styles from './Music.module.scss'

const Music = ({ title }) => {
  useDocumentTitle('Music')

  return (
    <div className={styles.music}>
      <h1 className={styles.musicHeading}>
        My tiny <VinylIcon className={styles.musicHeadingIcon} /> collection
      </h1>

      <div className={styles.musicExplanation}>
        <p>
          Page is currently under construction &#128679; due to shity &#128169;
          Discogs' API.
        </p>
        <p>
          Currently you can look &#128064; at my collection &#127925;&nbsp;
          <Link to={'https://www.discogs.com/user/ardsh0ck/collection'}>
            directly on Discogs
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Music
