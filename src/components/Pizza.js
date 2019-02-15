import React from 'react';
import './Pizza.css'
import dough from '../imgs/pizza/bread.png';
import Topping from './Topping.js';
import Dough from './Dough.js';

function ToppingState(props){
	let toppingArray = [];
	// if(props.toppings['Green Pepper'] === 'off')
	// 	toppingArray.push(<Topping toppingName={'greenPepper'}/>)
	for (let index in props.toppings) {
		console.log(index, props.toppings[index]);
		if(props.toppings[index] === 'on')
			toppingArray.push(<Topping toppingName={index}/>)
	}
	return toppingArray;
}

const Pizza = ({toppings}) => {
	console.log(toppings);
	return (
		<div className="col-12 d-flex justify-content-center">
			<div id="container">
				<Dough/>
				<ToppingState toppings = {toppings}/>
			</div>
		</div>
	)
}

export default Pizza;