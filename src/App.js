import React, { Component } from 'react';
import uuid from 'uuid';
import Faqs from './components/faqs';
import AddFaq from './components/addFaq';
import $ from 'jquery';
import Todos from './components/todos';



class App extends Component {
  
  constructor() {
    super();
    this.state = {
      faqs: [],
      todos: []
    }
  }

  getToDos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          // console.log(this.state.todos);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getFaqs() {
    this.setState({
      faqs: [
        {
          id: uuid.v4(),
          title: "What is FAQ",
          answer: "Frequently Asked Questions",
          tag: "Definition"
        },
        {
          id: uuid.v4(),
          title: "What is Praips",
          answer: "Human+Bot Customer Service Plateform",
          tag: "Artificial Intelligence"
        },
        {
          id: uuid.v4(),
          title: "Hoste discursatore rupium",
          answer: "Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste",
          tag: "Lorem Ipsum"
        }
      ]
    });
  }

  componentWillMount() {
    this.getFaqs();
    this.getToDos();
    
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddFaq(faq){
    let faqs = this.state.faqs;   //get everything from the state
    faqs.push(faq);               //push the new faq on the state
    this.setState({faqs:faqs});   //send the state again
  }


  handleDeleteFaq(id){
    let faqs = this.state.faqs;                       //get everything from the state
    let index = faqs.findIndex(x => x.id === id);     //get the id that we need from the state
    faqs.splice(index,1);                             //delete the faq on the state
    this.setState({faqs:faqs});                       //send the state again
    // console.log(faqs);                        
  }

  render() {
    return (
      <div className="App">
        My App
        <AddFaq addFaq ={this.handleAddFaq.bind(this)}/>
        <Faqs faqs={this.state.faqs} onDelete={this.handleDeleteFaq.bind(this)}/>
        <Todos todos={this.state.todos}/>
      </div>
      

    );
  }
}



export default App;


