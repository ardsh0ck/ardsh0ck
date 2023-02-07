import { useState, Fragment } from 'react'
import styles from './History.module.scss'
import history from '../../../data/history'

const History = () => {
  const defaultValue = history.length
  const [selected, setSelected] = useState(defaultValue - 1)

  return (
    <article className={styles.history}>
      <main>
        {history.map((item, index) =>
          selected === index ? (
            <div
              className={styles.historyItemPicture}
              key={'body-item' + item.id}
            >
              <img
                className={styles.historyItemPicture}
                src={item.img}
                alt=""
              />
            </div>
          ) : (
            <Fragment key={'empty-body' + item.id} />
          )
        )}
      </main>

      <nav className={styles.historyYears}>
        <ul className={styles.historyYearsList}>
          {history.map((item, index) => (
            <li className={styles.historyYearsItem} key={item.id}>
              <button
                type="button"
                onClick={() => {
                  setSelected(index)
                }}
                disabled={selected === index ? true : false}
                className={
                  selected === index
                    ? `${styles.historyYearsButton} ${styles.historyYearsButtonActive}`
                    : styles.historyYearsButton
                }
              >
                <span className={styles.historyYearsButtonText}>
                  {item.year}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}

export default History
