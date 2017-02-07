
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import { MainLayout } from '@layouts'

import * as Types from './types.d'

interface Props {
  post: Types.Post
}

export function Post({ post: serverPost }: Props) {
  const { query } = useRouter()

  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    if (!serverPost) frontLoadPost()

    async function frontLoadPost() {
      const frontPost = await loadPost(query.id)
      setPost(frontPost);
    }
  }, [])

  if (!post) return (
    <MainLayout>
      <h2>Loading...</h2>
    </MainLayout>
  )

  return (
    <MainLayout>
      <h2>{post.title}</h2>
      <hr/>
      <div>{post.body}</div>
    </MainLayout>
  )
}

async function loadPost(postId: string | string[]) {
  const res = await fetch(`${process.env.API_URL}/posts/${postId}`)
  return await res.json()
}


interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) return { post: null }
  const post: Types.Post = await loadPost(query.id);
  return { post }
}