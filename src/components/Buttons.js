import React from 'react';
import './List.css';
import './Buttons.css';

const Buttons = ({buttonClicked,toppings}) => {
	return (
			<ul className="d-flex flex-column align-items-center pl-0"> 
					<li> <button className = {toppings['Green Pepper']} onClick={buttonClicked}>Green Pepper</button></li>
					<li> <button className = {toppings['Ham']} onClick={buttonClicked}>Ham</button> </li>
					<li> <button className = {toppings['Mushroom']} onClick={buttonClicked}>Mushroom</button> </li>
					<li> <button className = {toppings['Olives']} onClick={buttonClicked}>Olives</button> </li>
					<li> <button className = {toppings['Onions']} onClick={buttonClicked}>Onions</button> </li>
					<li> <button className = {toppings['Pepperoni']} onClick={buttonClicked}>Pepperoni</button> </li>
					<li> <button className = {toppings['Pineapple']} onClick={buttonClicked}>Pineapple</button> </li>
					<li> <button className = {toppings['Tomato']} onClick={buttonClicked}>Tomato</button> </li>
			</ul>
	)
}

export default Buttons;