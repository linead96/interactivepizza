import React from 'react';
import './Topping.css';
import greenPepper from '../imgs/pizza/green-pepper.png';
import ham from '../imgs/pizza/ham.png';
import mushroom from '../imgs/pizza/mushroom.png';
import olives from '../imgs/pizza/olives.png';
import onions from '../imgs/pizza/onion.png';
import pepperoni from '../imgs/pizza/pepperoni.png';
import pineapple from '../imgs/pizza/pineapple.png';
import tomato from '../imgs/pizza/tomato.png';
const pizzaToppings = {'Green Pepper':greenPepper, 'Ham': ham,'Mushroom': mushroom, 'Olives':olives,'Onions': onions,'Pepperoni': pepperoni, 'Pineapple': pineapple,'Tomato':tomato};

const Topping = ({toppingName}) => {
	return (	
		<img alt="toppings" className="toppings" src={pizzaToppings[toppingName]}/>
	)
};

export default Topping;