import styles from './Works.module.scss'
import works from '../../../data/works'
import useDocumentTitle from '../../../utils/setDocumentTitle'
import WorksList from '../worksList/WorksList'

const Works = () => {
  useDocumentTitle('Works')
  const worksList = works

  return (
    <article className={styles.works}>
      <h1 className={styles.worksHeading}>Works</h1>

      <WorksList data={worksList} />
    </article>
  )
}

export default Works
