import React from 'react'
import NavBar from './NavBar'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
