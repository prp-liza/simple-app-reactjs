import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';


class AddFaq extends Component {

  	constructor() {
    	super();
    	this.state = {
      		newFaq: {}
    	}
  	}

  	static defaultProps = {
  		tags:['Definition', 'Artificial Intelligence', 'Lorem Ipsum']

  	}

  	handleSubmit(e){

  		if(this.refs.title.value === ''){
  			alert('title is required');
  		}else{
  			this.setState({
          newFaq:{
    				id: uuid.v4(),
    				title: this.refs.title.value,
    				answer: this.refs.answer.value,
    				tag: this.refs.tag.value,
    			}
        }, function(){
  				// console.log(this.state.newFaq)
  				this.props.addFaq(this.state.newFaq);
  			})
  		}
  		e.preventDefault();
  	}

  	render() {

  		let tagOptions = this.props.tags.map(tag =>{
        // console.log(tag);
  			return <option key={tag} value={tag}>{tag}</option>
  		})
      

	    return (
	      <div>
	        <h3>Add FAQ</h3>
	        <form onSubmit={this.handleSubmit.bind(this)}>
	        	<div>
	        		<label>Title</label> <br/>
	        		<input type="text" ref="title"/>
	        	</div>
	        	<div>
	        		<label>Answer</label> <br/>
	        		<input type="text" ref="answer"/>
	        	</div>
	        	<div>
	        		<label>Tag</label> <br/>
	        		<select ref="tag">{tagOptions}</select>
	        	</div> <br/>
	        	<input type="submit" value="Submit"/>
	        </form>
	        
	      </div>
	    );
	}
}

//props validation
AddFaq.propTypes  = {
  tags: PropTypes.array,
  addFaq: PropTypes.func
}

export default AddFaq;
