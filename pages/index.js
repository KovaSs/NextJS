import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="nodejs,nextjs,react,js" />
        <meta name="description" content="This is my first NextJS App" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/posts">
            <a className={styles.card}>
              <h3>Posts &rarr;</h3>
              <p>Show posts page</p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h3>About &rarr;</h3>
              <p>Show about page</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
