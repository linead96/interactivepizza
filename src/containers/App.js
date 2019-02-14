import React, {Component} from 'react';
import './App.css';
import Pizza from '../components/Pizza';
import List from '../components/List';
import '../styles/bootstrap.min.css';
// import TextField from '../components/TextField';
// import Button from '../components/Button';
// import Label from '../components/Label';

class App extends Component {
	constructor(){
		super();
		this.state = {
			// text: '',
			// label: ''
		}
	}

	// onTextFieldUpdated = (event) => {
	// 	this.setState({text: event.target.value})
	// }

	// onButtonClicked = (event) => {
	// 	this.setState({label: this.state.text})
	// }

	render() {
		// const {label} = this.state;
		// console.log(label);
		return (
			// <div>
			// <TextField textFieldUpdate = {this.onTextFieldUpdated}/>
			// <Button buttonClicked = {this.onButtonClicked}/>
			// <Label label={label}/>
			// </div>
			<div id="body">
			<h1 class="text-center pt-5 mb-5" >Interactive Pizza</h1>
			<Pizza/>
			<List />
			</div>
		)
	}
}

export default App;