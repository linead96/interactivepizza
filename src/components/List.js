import React from 'react';
import './List.css';
import ToppingsTitle from './ToppingsTitle.js';
import Buttons from './Buttons.js';

const List = ({buttonClicked, toppings}) => {
	return (
		<div className="d-flex flex-column align-items-center mt-5 mb-5 pb-5">
			<ToppingsTitle/>
				<ul className="d-flex flex-column align-items-center pl-0"> 
					<Buttons buttonClicked = {buttonClicked} toppings={toppings}/>
				</ul>
		</div>
	)
}

export default List;