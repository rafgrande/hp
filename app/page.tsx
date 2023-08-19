
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


export default async function Home() {

  const res = await fetch('https://hp-api.onrender.com/api/characters')
  const data = await res.json()

  const filter = data.filter((d: any,i: number) =>  i < 12)

  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <div className={`${myFont.className} ${styles.main__title}`}>Harry Potter characters</div>
      <List characters= {filter} />

    </main>
  )
}

