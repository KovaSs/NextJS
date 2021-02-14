import { useState, useEffect } from 'react'
import { MainLayout } from '@layouts'

export default function Posts({ posts }) {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   loadPosts()
  // }, [])

  // async function loadPosts() {
  //   const res = await fetch('http://localhost:4200/posts')
  //   const json = await res.json()
  //   setPosts(json)
  // }

  function renderPosts() {
    return posts.map(post => <li key={post.id}>{post.title}</li>)
  }

  return (
    <MainLayout>
      <h1>Posts page</h1>
      <ul>{renderPosts()}</ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const res = await fetch('http://localhost:4200/posts')
  const posts = await res.json()
  return { posts }
}
