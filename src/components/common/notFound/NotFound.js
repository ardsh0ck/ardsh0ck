import useDocumentTitle from '../../../utils/setDocumentTitle'
import styles from './NotFound.module.scss'

const NotFound = () => {
  useDocumentTitle('Nothing here')

  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFoundSmile}>¯\_(ツ)_/¯</h1>
    </div>
  )
}

export default NotFound
