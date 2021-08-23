import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ btntype, label, name }) => {
	return (
		<button className="btn" type={btntype} name={name}>
			{label}
		</button>
	);
};
Button.propTypes = {
	btntype: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
export default Button;
