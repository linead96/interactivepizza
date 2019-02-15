import React from 'react';
import './Pizza.css'
import Topping from './Topping.js';
import Dough from './Dough.js';

function ToppingState(props){
	let toppingArray = [];
	for (let index in props.toppings) {
		if(props.toppings[index] === 'on')
			toppingArray.push(<Topping toppingName={index}/>)
	}
	return toppingArray;
}

const Pizza = ({toppings}) => {
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