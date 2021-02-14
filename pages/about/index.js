import Router from 'next/router'

import { MainLayout } from '../../components/MainLayout'

export default function About() {
  function goTo(url) {
    Router.push(url)
  }

  return (
    <MainLayout>
      <h1>About</h1>
      <button onClick={() => goTo('/')}>Go to home</button>
      <button onClick={() => goTo('/posts')}>Go to posts</button>
    </MainLayout>
  )
}