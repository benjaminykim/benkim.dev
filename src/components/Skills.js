import React from 'react'

export default function Skills({ data }) {
  return (
    <div className="skills">
			<p class="skill-title">Top Skills</p>
			<div className="skill-section">
				{data.top.map((skill) => {
					return (
								<div className="skill-item">{skill}</div>
					)
				})}
				<p class="skill-disclaimer">*If I had to select 5</p>
    	</div>
			<p class="skill-title">Frontend</p>
			<div className="skill-section">
				{data.frontend.map((skill) => {
					return (
								<div className="skill-item">{skill}</div>
					)
				})}
    	</div>
			<p class="skill-title">Backend</p>
			<div className="skill-section">
				{data.backend.map((skill) => {
					return (
								<div className="skill-item">{skill}</div>
					)
				})}
    	</div>
			<p class="skill-title">DevOps</p>
			<div className="skill-section">
				{data.devop.map((skill) => {
					return (
								<div className="skill-item">{skill}</div>
					)
				})}
    	</div>
			<p class="skill-title">Languages</p>
			<div className="skill-section">
				{data.language.map((skill) => {
					return (
								<div className="skill-item">{skill}</div>
					)
				})}
			<p class="skill-disclaimer">*I consider myself to be mostly language agnostic</p>
    	</div>
			<p class="skill-title">Libraries/Tools</p>
			<div className="skill-section">
				{data.library.map((skill) => {
					return (
								<div className="skill-item">{skill}</div>
					)
				})}
    	</div>
    </div>
  )
}