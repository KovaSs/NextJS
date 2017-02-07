import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NextPageContext } from 'next'

import { MainLayout } from '@layouts'

import * as Types from './types.d'

interface Props {
  posts: Types.Post[];
}

export function Posts({ posts: serverPosts }: Props) {
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
  const res = await fetch(`${process.env.API_URL}/posts`)
  return await res.json()
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) return { posts: null }
  const posts: Types.Post[] = await loadPosts()
  return { posts }
}
