import React from "react"
import Layout from '../components/layout/Layout.js'

import pdf from '../../static/resume.pdf'

export default function Home() {
  return (
    <Layout>
			<div className="container index center">
			  <embed src={pdf} width="800px" height="1050px" />
		  </div>
		</Layout>
	)
}
