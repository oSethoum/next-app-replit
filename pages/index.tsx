import type { NextPage } from 'next'
import styles from '@/styles/page.module.css'
import { Text, Stupid, Separation, Extra, FanArt } from "@/components"


const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>

          <p>Page created by &nbsp;</p>
          <code className={styles.code}>Foxycrafter</code>

        </div>
        <Text />


      </div>
      <Stupid />
      <Separation />

      <Extra />
      <Separation />
      <FanArt />
    </main>
  )
}

export default Home
