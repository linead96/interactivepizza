import React, {Component} from 'react';
import './App.css';
import Pizza from '../components/Pizza';
import List from '../components/List';
import '../styles/bootstrap.min.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			toppings: {'Green Pepper': 'off' ,'Ham': 'off','Mushroom': 'off', 'Olives':'off','Pepperoni': 'off', 'Pineapple': 'off','Tomato':'off'}
		}
	}

	onButtonClicked = (event) => {
		const toppings = this.state.toppings;
		if(toppings[event.target.innerText] === 'off')
			toppings[event.target.innerText] = 'on'
		else 
			toppings[event.target.innerText] = 'off'
		this.setState({
			toppings: toppings
		});
	}

	render() {
		return (
			<div id="body">
			<h1 className="text-center pt-5 mb-5" >Interactive Pizza</h1>
			<Pizza toppings = {this.state.toppings}/>
			<List buttonClicked = {this.onButtonClicked} toppings={this.state.toppings}/>
			</div>
		)
	}
}

export default App;