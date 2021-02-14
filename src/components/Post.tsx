
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from '@layouts'

interface Props {
  post: {
    id: number;
    title: string;
    body: string;
  }
}

export function Post({ post: serverPost }: Props) {
  const { query } = useRouter()

  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    async function frontLoadPost() {
      const frontPost = await loadPost(query.id)
      setPost(frontPost);
    }
    if (!serverPost) frontLoadPost()
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
  const res = await fetch(`http://localhost:4200/posts/${postId}`)
  return await res.json()
}


Post.getInitialProps = async ({ query, req }) => {
  if (!req) return { post: null }
  const post = await loadPost(query.id);
  return { post }
}