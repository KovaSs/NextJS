import Head from 'next/head'
import Router from 'next/router'

export default function About() {
  function goTo(url) {
    Router.push(url)
  }

  return (
    <>
      <Head>
        <title>NextJS App | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
      <button onClick={() => goTo('/')}>Go to home</button>
      <button onClick={() => goTo('/posts')}>Go to posts</button>
    </>
  )
}