import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import works from '../../../data/works'
import styles from './SingleWork.module.scss'
import useDocumentTitle from '../../../utils/setDocumentTitle'

const SingleWork = () => {
  const params = useParams()
  const navigate = useNavigate()
  const work = works.find((work) => work.slug === params.slug)

  useEffect(() => {
    if (!work) {
      navigate('..', { relative: 'route' })
    }
  }, [work, navigate])

  useDocumentTitle(work?.urlTitle)
  const heading = work.title.replace(/(<([^>]+)>)/gi, '')

  return (
    <article className={styles.work}>
      <header className={styles.workHeader}>
        <h1 className={styles.workHeading}>{heading}</h1>
        {work?.url && (
          <Link className={styles.workUrl} to={work?.url}>
            {work.urlTitle}&nbsp;&rarr;
          </Link>
        )}

        {work?.description && (
          <p className={styles.workDescription}>{work?.description}</p>
        )}

        {work?.body && (
          <div
            className={styles.workBody}
            dangerouslySetInnerHTML={{ __html: work?.body }}
          />
        )}
      </header>
    </article>
  )
}

export default SingleWork
