import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  	
  	render() {
  		
  		// console.log(this.props.todo);
	    
	    return (
			<li className="todo">
				<strong>{this.props.todo.title} </strong>
			</li>
	    );
	}
}

//props validation
TodoItem.propTypes  = {
	todo: PropTypes.object
}

export default TodoItem;
