import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaqItem from './faqItem';

class Faqs extends Component {


  	deleteFaq(id){
  		this.props.onDelete(id);
  	}

  	render() {

  		// console.log(this.props.faqs);
  		
  		let faqItems;
	
		if(this.props.faqs){
			faqItems = this.props.faqs.map(faq => {
				// console.log(faq);
				return(
					<FaqItem
						onDelete={this.deleteFaq.bind(this)} 
						key={faq.id}
						faq={faq}
					/>
				);
			});
		}

  		// console.log(this.props.faqs);

	    return (
	      <div className="faqs">
	        <h1>FAQ List</h1>  
	        <ul>
	        	{faqItems}	        	
	        </ul>
	        
	      </div>
	    );
	}
}

//props validation
Faqs.propTypes  = {
	faqs: PropTypes.array,
	onDelete: PropTypes.func
}

export default Faqs;
