import React from 'react'

export default function Experience({ data }) {
  return (
    <div className="grid exp">
      {data.map((node) => {
        return (
						<a
							href={node.path || node.source}
							key={node.path || node.source}
							className="row"
							target="_blank"
							rel="noreferrer"
						>
							<div></div>
							<div className="company">{node.title}</div>
							<div className="expCell">{node.description}</div>
							<div></div>
							<div className="expCell footer">{node.date}</div>
							<div className="expCell footer">{node.stack}</div>
							<div></div>
							<div className="expCell footer stack">{node.role}</div>
							<div></div>
						</a>
        )
      })}
    </div>
  )
}