import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../../style.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
			<Footer />
    </>
  )
}
