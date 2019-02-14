import React from 'react';
import './Pizza.css'
import pizza from '../imgs/pizza/bread.png';
import greenPepper from '../imgs/pizza/green-pepper.png';
import ham from '../imgs/pizza/ham.png';
import mushroom from '../imgs/pizza/mushroom.png';
import olives from '../imgs/pizza/olives.png';
import onions from '../imgs/pizza/onion.png';
import pepperoni from '../imgs/pizza/pepperoni.png';
import pineapple from '../imgs/pizza/pineapple.png';
import tomato from '../imgs/pizza/tomato.png';

const Pizza = ({}) => {
	return (
		<div class="col-12 d-flex justify-content-center">
			<div id="container">
				<img id="dough" src={pizza}/>
				<img class="toppings" src={greenPepper}/>
				<img class="toppings" src={ham}/>
				<img class="toppings" src={mushroom}/>
				<img class="toppings" src={olives}/>
				<img class="toppings" src={onions}/>
				<img class="toppings" src={pepperoni}/>
				<img class="toppings" src={pineapple}/>
				<img class="toppings" src={tomato}/>
			</div>
		</div>
	);
}

export default Pizza;