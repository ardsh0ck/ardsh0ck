import { useEffect, useState } from 'react'
import { ReactComponent as VinylIcon } from '../../assets/images/svg/icon-vinyl.svg'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useDocumentTitle from '../../utils/setDocumentTitle'
import clsx from 'clsx'
import styles from './Music.module.scss'

const API_KEY = process.env.REACT_APP_DISCOGS_API_KEY
const API_SECRET = process.env.REACT_APP_DISCOGS_API_SECRET

const API_URL =
  'https://api.discogs.com/users/ardsh0ck/collection/folders/0/releases?per_page=10&sort=added&sort_order=desc'

const authHeader = `Discogs key=${API_KEY}, secret=${API_SECRET}`

console.log(authHeader)

const myHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: authHeader,
  'User-Agent': 'ArdshockVinylLibrary/1.0 +https://ardshock.name',
}

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

  const collection = post.releases

  console.log(collection)

  if (error) {
    return <h1 className="postsHeading">Error:{error}</h1>
  }

  return (
    <div className={styles.music}>
      <h1 className={styles.musicHeading}>
        My tiny <VinylIcon className={styles.musicHeadingIcon} /> collection
      </h1>

      <div className={styles.musicExplanation}>
        <p>
          Page is currently under construction &#128679; due to shity &#128169;
          Discogs' API.
        </p>
        <p>
          Currently you can see 10 lates records &#127925;&nbsp;in my
          collection.
        </p>
        <p>
          Or look &#128064; at my collection&nbsp;
          <Link to={'https://www.discogs.com/user/ardsh0ck/collection'}>
            directly on Discogs
          </Link>
          .
        </p>
      </div>

      {isLoading ? (
        <div className={styles.musicLoader}>
          <VinylIcon className={styles.musicLoaderIcon} />
        </div>
      ) : (
        <ul className={styles.musicList}>
          {collection.map((realese, i) => (
            <li className={styles.musicItem} key={uuidv4()}>
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
          <li className={clsx([styles.musicItem, styles.musicItemDummy])}>
            <Link
              to={'https://www.discogs.com/user/ardsh0ck/collection'}
              className={styles.musicItemDummyLink}
            >
              &#127897;&nbsp;All records
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Music
