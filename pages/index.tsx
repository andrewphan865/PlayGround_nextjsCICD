import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const { APP_NAME, SF_URL, AB_URL } = publicRuntimeConfig;


export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            APP_NAME : {APP_NAME}
          </p>
          <p>
            SF_URL : {SF_URL}
          </p>
          <p>
            AB_URL : {AB_URL}
          </p>

        </div>
      </main>
    </>
  )
}