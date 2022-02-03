import { useRouter } from 'next/router'
import React from 'react'

const Detail = () => {
  const router = useRouter()
  console.log('movies router: ', router)
  return (
    <div>
      <h4>{router.query.title || 'Loading...'}</h4>
    </div>
  )
}

export default Detail
