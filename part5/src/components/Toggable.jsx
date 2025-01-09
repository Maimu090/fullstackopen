import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';

const Toggable = forwardRef((props, ref) => {
	const [visible, setVisible] = useState(false);

	const hideWhenVisible = { display: visible ? 'none' : '' };
	const showWhenVisible = { display: visible ? '' : 'none' };

	const toggleVisibility = () => {
		setVisible(!visible);
	};

	useImperativeHandle(ref, () => {
		toggleVisibility;
	});
	return (
		<div>
			<div style={hideWhenVisible}>
				<button onClick={toggleVisibility}>{props.buttonLabel}</button>
			</div>
			<div style={showWhenVisible}>
				{props.children}
				<button onClick={toggleVisibility}>cancel</button>
			</div>
		</div>
	);
});

Toggable.displayName = 'Toggable';

export default Toggable;

Toggable.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
};