import React from 'react';
import './List.css';

const List = ({}) => {
	return (
		<div class="d-flex flex-column align-items-center mt-5">
			<h2 class="text-center"> List of Toppings </h2>
				<ul class="d-flex flex-column align-items-center pl-0"> 
					<li> <button>Green Pepper</button></li>
					<li> <button>Ham</button> </li>
					<li> <button>Mushroom</button> </li>
					<li> <button>Olives</button> </li>
					<li> <button>Onions</button> </li>
					<li> <button>Pepperoni</button> </li>
					<li> <button>Pineapple</button> </li>
					<li> <button>Tomato</button> </li>
				</ul>
		</div>
	)
}

export default List;