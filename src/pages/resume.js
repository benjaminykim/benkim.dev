import React from "react"
import Layout from '../components/layout/Layout.js'
import { Document } from 'react-pdf'

export default function Home() {
  return (
    <Layout>
			<div className="container index">
				<Document file='../../static/resume.pdf' />
				<h1>Resume</h1>
		  </div>
		</Layout>
	)
}
