import { useRouter } from 'next/router'

import { MainLayout } from '../../components/MainLayout'

export default function Post() {
  const { query } = useRouter()

  return (
    <MainLayout>
      <h1>{`Post ${query.id}`}</h1>
    </MainLayout>
  )
}