import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";
import Version from './Version';

var destination = document.querySelector('#container');


ReactDOM.render(
  <div>
        <Version/>
	<TodoList/>
  </div>, 
  destination
);
