import { useRouter } from 'next/router'

export default function Post({ id }) {
  const { query } = useRouter()
  return <h1>{`Post ${query.id}`}</h1>
}