import Head from 'next/head'

// Get page - /posts
export default function Posts() {
  return (
    <>
      <Head>
          <title>NextJS App | Posts</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <h1>Posts page</h1>
    </>
  );
}