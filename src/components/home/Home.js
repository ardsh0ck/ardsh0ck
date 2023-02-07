import React from 'react'
import styles from './Home.module.scss'
import works from '../../data/works'
import History from './history/History'
import useDocumentTitle from '../../utils/setDocumentTitle'
import WorksList from '../works/worksList/WorksList'

const Home = () => {
  useDocumentTitle('Home')
  const latestWorks = works.slice(0, 5)

  return (
    <div>
      <History />

      <section>
        <h1 className={styles.homeHeading}>Latest works </h1>

        <WorksList data={latestWorks} />
      </section>
    </div>
  )
}

export default Home
