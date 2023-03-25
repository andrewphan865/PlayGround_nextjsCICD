
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            APP_NAME : {process.env.APP_NAME}
          </p>
          <p>
            SF_URL : {process.env.SF_URL}
          </p>
          <p>
            AB_URL : {process.env.AB_URL}
          </p>
          <p>
            NEXT_PUBLIC_SF_URL : {process.env.NEXT_PUBLIC_SF_URL}
          </p>
        </div>
      </main>
    </>
  )
}