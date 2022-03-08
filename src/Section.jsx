const Section = ({title, children}) => (
	<div className="section">
		<div className="title">{title}</div>
		<div className="content">
			{children}
		</div>
	</div>
)

export default Section;