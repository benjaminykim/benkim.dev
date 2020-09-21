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
							<div className="cell company">{node.title}</div>
							<div className="cell light description">{node.description}</div>
							<div></div>
							<div className="cell simple light description role">{node.role}</div>
							<div className="cell simple light description stack">{node.stack}</div>
						</a>
        )
      })}
    </div>
  )
}