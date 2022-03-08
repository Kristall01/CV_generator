const Contact = ({icon, href, children}) => {

	return (
		<div>
			<i className={icon}></i>
			<a href={href}>{children}</a>
		</div>
	)

};

export default Contact;