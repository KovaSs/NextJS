import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post() {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>NextJS App | Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{`Post ${query.id}`}</h1>
    </>
  )
}