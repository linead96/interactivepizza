import React from 'react';

const TextField = ({textFieldUpdate}) => {
	return (
			<input type="text" placeholder="Enter text here" onChange={textFieldUpdate} />
	)
}

export default TextField;