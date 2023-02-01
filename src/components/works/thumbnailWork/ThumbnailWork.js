import { Link } from 'react-router-dom'
import styles from './ThumbnailWork.module.scss'

const ThumbnailWork = ({ href, img, title }) => {
  console.log(href)

  return (
    <Link to={href} className={styles.thumbnail}>
      <img src={img} className={styles.thumbnailImage} alt="" />
      <span
        className={styles.thumbnailTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </Link>
  )
}

export default ThumbnailWork
