import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.myClick = this.myClick.bind(this);
  }

  myClick() {
  	document.getElementsByClassName('wrapper')[0].style.backgroundColor = '#F9F5A6FF';
  }

  render() {
    return (
    		// <div className="wrapper">
    		<button onClick={this.myClick} className="clicker">Изменить дизайн</button>
    		// </div>
    	);
   }
}

export default Button;