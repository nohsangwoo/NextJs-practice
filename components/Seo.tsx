import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
}
const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  )
}

export default Seo
