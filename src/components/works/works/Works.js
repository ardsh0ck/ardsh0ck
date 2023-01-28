import ThumbnailWork from '../thumbnailWork/ThumbnailWork'
import styles from './Works.module.scss'
import works from '../../../data/works'

const Works = () => {
  return (
    <ul className={styles.works}>
      {works.map((work) => {
        return (
          <li key={work.id}>
            <ThumbnailWork href={work.slug} img={work.img} title={work.title} />
          </li>
        )
      })}
    </ul>
  )
}

export default Works
