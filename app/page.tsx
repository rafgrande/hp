
import List from './components/List'
import styles from './styles/Page.module.scss'
import localFont from 'next/font/local'

const myFont = localFont({ src: './fonts/HarryP.ttf' })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${myFont.className} ${styles.main__title}`}>Persons Harry Potter</div>
      <List />

    </main>
  )
}
