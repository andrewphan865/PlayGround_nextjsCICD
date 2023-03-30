
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            GLOBAL_APP_NAME : {global.process.env.APP_NAME}
          </p>
          <p>
            APP_NAME : {process.env.APP_NAME}
          </p>
          <p>
            GLOBAL_SF_URL : {global.process.env.F_URL}
          </p>
          <p>
            SF_URL : {process.env.F_URL}
          </p>
          <p>
            GLOBAL_NEXT_PUBLIC_SF_URL : {global.process.env.NEXT_PUBLIC_SF_URL}
          </p>
          <p>
            NEXT_PUBLIC_SF_URL : {process.env.NEXT_PUBLIC_SF_URL}
          </p>
        </div>
      </main>
    </>
  )
}