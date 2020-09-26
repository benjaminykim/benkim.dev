import React from 'react'
import { formatDate } from '../utils/helpers'

export default function PostPreview({ data }) {
  return (
    <div>
			{data.map((node) => {
				return (
					<div className="post-preview">
						<a className="post-preview" href={"/blog/" + node.path}>
							<p className="post-preview-title">{node.title}</p>
							<p className="post-preview-date">{formatDate(node.date)}</p>
							<p className="post-preview-description">{node.description}</p>
						</a>
					</div>
				)
			})}
    </div>
  )
}