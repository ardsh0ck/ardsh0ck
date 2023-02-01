import ThumbnailWork from '../thumbnailWork/ThumbnailWork'
import styles from './Works.module.scss'
import works from '../../../data/works'
import useDocumentTitle from '../../../utils/setDocumentTitle'

const Works = () => {
  useDocumentTitle('Works')

  return (
    <div>
      <h1 className={styles.worksHeading}>Works</h1>

      <ul className={styles.worksList}>
        {works.map((work) => {
          return (
            <li key={work.id}>
              <ThumbnailWork
                href={work.slug}
                img={work.img}
                title={work.title}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Works
