import { useEffect, useState } from 'react'
import { ReactComponent as VinylIcon } from '../../assets/images/svg/icon-vinyl.svg'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useDocumentTitle from '../../utils/setDocumentTitle'
import { Discojs } from 'discojs'
import styles from './Music.module.scss'

const API_KEY = process.env.DISCOGS_API_KEY
const API_SECRET = process.env.DISCOGS_API_SECRET

const client = new Discojs({
  userToken: 'UgKVWKeIUNXBBbFJQOXDnIidgIElzsYZsdEdPyls',
})
const options = {
  username: 'ardsh0ck',
  sort: 'artist',
}
const request = client.listFolders('ardsh0ck')
console.log(request)

const API_URL =
  'https://api.discogs.com/users/ardsh0ck/collection/folders/0/releases?&sort=artist&per_page=75'

const authHeader = `OAuth oauth_consumer_key=MEHuexzhtOzyjNmLlzWY, oauth_signature=GVDtZeudEMEFtjYxXRCSYDatkRamcmcm, oauth_nonce='ardsh0ck', oauth_signature_method='PLAINTEXT'`

const myHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  //key: API_KEY,
  //secret: API_SECRET,
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

  if (error) {
    return <h1 className="postsHeading">Error:{error}</h1>
  }

  return (
    <div className={styles.music}>
      <h1 className={styles.musicHeading}>
        My tiny <VinylIcon className={styles.musicHeadingIcon} /> collection
      </h1>

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
        </ul>
      )}
    </div>
  )
}

export default Music
