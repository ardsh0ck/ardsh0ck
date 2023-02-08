import { useEffect, useState } from 'react'
import { ReactComponent as VinylIcon } from '../../assets/images/svg/icon-vinyl.svg'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../../utils/setDocumentTitle'
import styles from './Music.module.scss'

const API_URL =
  'https://api.discogs.com/users/ardsh0ck/collection/folders/0/releases?key=MEHuexzhtOzyjNmLlzWY&secret=GVDtZeudEMEFtjYxXRCSYDatkRamcmcm&sort=artist&per_page=100'

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
}

const Music = ({ title }) => {
  useDocumentTitle('Music')

  const [post, setPost] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, requestOptions)
        const post = await response.json()
        setPost(post)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  console.log(post.releases)

  const collection = post.releases

  if (error) {
    return <h1 className="postsHeading">Error:{error}</h1>
  }

  return (
    <div className={styles.music}>
      <h1 className={styles.musicHeading}>
        My little <VinylIcon className={styles.musicHeadingIcon} /> collection
      </h1>

      {isLoading ? (
        <div className={styles.musicLoader}>
          <VinylIcon className={styles.musicLoaderIcon} />
        </div>
      ) : (
        <ul className={styles.musicList}>
          {collection.map((realese) => (
            <li
              className={styles.musicItem}
              key={'vinyl-record' + realese.basic_information.master_id}
            >
              <Link to={'https://discogs.com/release/' + realese.id}>
                <figure className={styles.musicItemPicture}>
                  <img
                    src={realese.basic_information.cover_image}
                    loading="lazy"
                    alt={
                      'Cover image of ' +
                      realese.basic_information.title +
                      ' by ' +
                      realese.basic_information.artists[0].name
                    }
                  />
                  <figcaption className={styles.musicItemTitle}>
                    <p className={styles.musicItemTitleArtist}>
                      {realese.basic_information.artists[0].name}
                    </p>
                    <p className={styles.musicItemTitleAlbum}>
                      {realese.basic_information.title}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Music
