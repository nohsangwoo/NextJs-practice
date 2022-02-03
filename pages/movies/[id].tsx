import { useRouter } from 'next/router'
import React from 'react'

const Detail = () => {
  const router = useRouter()
  console.log('movies router: ', router)
  return <div>Detail</div>
}

export default Detail
