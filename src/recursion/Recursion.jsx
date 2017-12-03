import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

function One(props) {
  return <span>{props.name || 'winter'}</span>
}

function Two(props) {
  return <span>{props.name || 'is'}</span>
}

function Three(props) {
  return <span>{props.name || 'coming'}</span>
}

// assign components below
const components = [<One />, <Two />, <Three />];

export default class Recursion extends Component {
	render() {
  	return (
    	<div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
