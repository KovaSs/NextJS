import Head from 'next/head'

import styles from '../styles/Home.module.css'

export const defaulHeadtMeta = {
  title: 'NextJS App',
  keywords: 'nodejs,nextjs,react,js',
  description: 'This is my first NextJS App',
}

export function MainLayout({ className, children, head }) {
  const meta = { ...defaulHeadtMeta, ...head }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={meta.keywords} />
        <meta name="description" content={meta.description} />
      </Head>
      <div className={styles.container}>
        <nav><h1>Navigation</h1></nav>
        <main>{children}</main>
      </div>
    </>
  )
}