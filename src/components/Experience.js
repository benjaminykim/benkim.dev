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
							<div className="company">{node.title}</div>
							<div className="expCell right">{node.description}</div>
							<div className="expCell footer left">{node.date}</div>
							<div className="expCell footer right">{node.stack}</div>
							<div className="expCell footer left bottom">{node.role}</div>
							<div></div>
						</a>
        )
      })}
    </div>
  )
}