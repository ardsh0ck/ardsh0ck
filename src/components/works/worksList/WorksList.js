import styles from './WorksList.module.scss'
import ThumbnailWork from '../thumbnailWork/ThumbnailWork'

const WorksList = ({ data }) => {
  return (
    <ul className={styles.worksList}>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <ThumbnailWork href={item.slug} img={item.img} title={item.title} />
          </li>
        )
      })}
    </ul>
  )
}

export default WorksList
