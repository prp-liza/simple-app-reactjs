import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

class Todos extends Component {

  	render() {

  		// console.log(this.props.todos);
  		
  		let todoItems;
	
		if(this.props.todos){
			todoItems = this.props.todos.map(todo => {
				// console.log(todo);
				return(
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				);
			});
		}

	    return (
	      <div className="todos">
	        <h1>Todo List</h1>  
	        <ul>
	        	{todoItems}	        	
	        </ul>
	        
	      </div>
	    );
	}
}

//props validation
Todos.propTypes  = {
	todos: PropTypes.array,
}

export default Todos;
