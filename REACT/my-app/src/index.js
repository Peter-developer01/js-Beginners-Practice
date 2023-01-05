import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './Button'
import reportWebVitals from './reportWebVitals';

/* function Greet(props) {

	// let phrase = 'World!'

	return (
			<h1>Hello {props.phrase}! My name is {props.name}</h1>
		)
}

function GreetAll() {
	return (
		<div>
			<Greet phrase="World" name="Peter" />
			<Greet phrase="World" name="Anna" />
			<Greet phrase="World" name="Alex" />
		</div>
	)
}

const element = <Greet phrase="World" name="Peter" />; */

class MyApp extends React.Component {
	render() {
		return (
				<div className="wrapper">
				  <Clock />
				  <Button />
				</div>
			)
	}
}

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
