import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  params: string[]
}

const Detail = ({ params }: Props) => {
  // const router = useRouter()
  const [title, id] = (params || []) as any[]
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default Detail

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    props: {
      params: ctx?.params?.params,
    },
  }
}
