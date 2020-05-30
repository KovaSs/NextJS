import { useState, useEffect } from 'react'
import Link from 'next/link'

import { MainLayout } from '@layouts'

export function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    if (!serverPosts) frontLoadPost()

    async function frontLoadPost() {
      const frontPosts = await loadPosts()
      setPosts(frontPosts);
    }
  }, [])

  function renderPosts() {
    return posts.map(post => (
      <li key={post.id}>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))
  }

  if (!posts) return (
    <MainLayout>
      <h2>Loading...</h2>
    </MainLayout>
  )

  return (
    <MainLayout>
      <h1>Posts page</h1>
      <ul>{renderPosts()}</ul>
    </MainLayout>
  );
}

async function loadPosts() {
  const res = await fetch('http://localhost:4200/posts')
  return await res.json()
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) return { posts: null }
  const posts = await loadPosts()
  return { posts }
}
