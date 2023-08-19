
import List from './components/List'
import styles from './styles/Page.module.scss'
import localFont from 'next/font/local'

const myFont = localFont({ src: './fonts/HarryP.ttf' })

interface IHOME {
  data: any;
}

export default function Home(props: IHOME) {
  console.log('de', props)
  return (
    <main className={styles.main}>
      <div className={`${myFont.className} ${styles.main__title}`}>Persons Harry Potter</div>
      <List />

    </main>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://hp-api.onrender.com/api/characters`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
