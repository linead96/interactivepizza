import React from 'react';
import './List.css';
import ToppingsTitle from './ToppingsTitle.js';

const List = ({buttonClicked}) => {
	return (
		<div className="d-flex flex-column align-items-center mt-5">
			<ToppingsTitle/>
				<ul className="d-flex flex-column align-items-center pl-0"> 
					<li> <button onClick={buttonClicked}>Green Pepper</button></li>
					<li> <button onClick={buttonClicked}>Ham</button> </li>
					<li> <button onClick={buttonClicked}>Mushroom</button> </li>
					<li> <button onClick={buttonClicked}>Olives</button> </li>
					<li> <button onClick={buttonClicked}>Onions</button> </li>
					<li> <button onClick={buttonClicked}>Pepperoni</button> </li>
					<li> <button onClick={buttonClicked}>Pineapple</button> </li>
					<li> <button onClick={buttonClicked}>Tomato</button> </li>
				</ul>
		</div>
	)
}

export default List;