import { Link, useLocation } from 'react-router-dom'
import styles from './ThumbnailWork.module.scss'

const ThumbnailWork = ({ href, img, title }) => {
  const location = useLocation()

  return (
    <Link
      to={location === '/works' ? href : '/works/' + href}
      className={styles.thumbnail}
    >
      <img src={img} className={styles.thumbnailImage} alt="" />
      <span
        className={styles.thumbnailTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </Link>
  )
}

export default ThumbnailWork
