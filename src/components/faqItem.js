import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FaqItem extends Component {

	deleteFaq(id){
		this.props.onDelete(id);
	}
		
  	
  	render() {
  		
  		// console.log(this.props.faq);
	    
	    return (
			<li className="faq">
				<strong>{this.props.faq.title} </strong> <br/> 
				- Answer : {this.props.faq.answer} <br/> 
				- Tag : {this.props.faq.tag} <br/>
				<a href="#" onClick={this.deleteFaq.bind(this, this.props.faq.id)}>X</a>        
			</li>
	    );
	}
}

//props validation
FaqItem.propTypes  = {
	faq: PropTypes.object,
	onDelete: PropTypes.func
}

export default FaqItem;
