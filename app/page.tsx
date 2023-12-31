'use client'
import { useEffect, useState } from 'react';

import List from './components/List'
import styles from './styles/Page.module.scss'
import localFont from 'next/font/local'

const myFont = localFont({ src: './fonts/HarryP.ttf' })

interface IHOME {
  data: any;
}
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [house, setHouse] = useState('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (!data) return <p>No characters data</p>


  const init = page > 1 ? (page-1) * 12 : 0;

  const filter = data.filter((d: any,i: number) => i >= init && i < page*12  && (house === "" || house === d.house))

  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <div className={`${myFont.className} ${styles.main__title}`}>Harry Potter characters</div>
      <section className={styles.main__filters}>
          <span>Filters</span>
          <div className={styles.main__filters__options}>
            <span className={`${styles.main__filters__options__opt} ${house === 'Slytherin' && styles.main__filters__options__opt__ative}`} onClick={() => setHouse(house != 'Slytherin' ? 'Slytherin' : '')}>Slytherin</span>
            <span className={`${styles.main__filters__options__opt} ${house === 'Gryffindor' && styles.main__filters__options__opt__ative}`} onClick={() => setHouse(house != 'Gryffindor' ? 'Gryffindor' : '')}>Gryffindor</span>
            <span className={`${styles.main__filters__options__opt} ${house === 'Hufflepuff' && styles.main__filters__options__opt__ative}`} onClick={() => setHouse(house != 'Hufflepuff' ? 'Hufflepuff' : '')}>Hufflepuff</span>
            <span className={`${styles.main__filters__options__opt} ${house === 'Ravenclaw' && styles.main__filters__options__opt__ative}`} onClick={() => setHouse(house != 'Ravenclaw' ? 'Ravenclaw' : '')}>Ravenclaw</span>
          </div>
      </section>
      {
        !isLoading 
        ? (
          <section className={styles.main__list}>
            <button className={styles.main__list__arrow} onClick={() => setPage(page>1 ? page-1 : 1)}>{`<`}</button>
            <List characters= {filter} />
            <button  className={styles.main__list__arrow} onClick={() => setPage(page+1)}>{`>`}</button>
          </section>
        )
        : (
          <p className={styles.main__loading}>Loading ...</p>
        )
      }
      
    </main>
  )
}