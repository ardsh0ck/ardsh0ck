import React from 'react'
import styles from './Home.module.scss'
import works from '../../data/works'
import History from './history/History'
import ThumbnailWork from '../works/thumbnailWork/ThumbnailWork'
import useDocumentTitle from '../../utils/setDocumentTitle'

const Home = () => {
  useDocumentTitle('Home')
  const latestWorks = works.slice(0, 5)

  return (
    <div>
      <History />

      <section>
        <h1 className={styles.homeHeading}>Latest works </h1>
        <ul className={styles.homeLatest}>
          {latestWorks.map((work) => {
            return (
              <li key={work.id}>
                <ThumbnailWork
                  href={'works/' + work.slug}
                  img={work.img}
                  title={work.title}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Home
