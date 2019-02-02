import React, { Component } from 'react';
import Quote from './Quote.js';
import quotes from "./data/quotes.json";
import logo from './logo.svg';

import './App.css';


class App extends Component {

  constructor(){
    super();
    let startQuote = this.getNewQuote();
    this.state = {
      currentQuote:{
        quote:startQuote.quote,
        book:startQuote.book,
        authors:startQuote.authors
      },
      timeout:2000,
      fading:false
    }
    this.getNewQuote = this.getNewQuote.bind(this);
    this.getNewQuote();
  }


  getNewQuote(){
    let quoteIdx = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIdx];
  }

  getNewStyle(){

  }
  componentDidMount() {
     this.timeout = setInterval(() => {
       this.getNewQuote();
       let nextQuote = this.getNewQuote();
       this.setState({currentQuote:nextQuote});
       this.setState({fading:true});

     }, this.state.timeout);

   }

   componentDidUnmount() {
    clearInterval(this.state.timeout);
   }


  render() {

    const {quote, book, fading} = this.state;


    return (

      <div className="App">
        <Quote quote={this.state.currentQuote} fade={this.state.fading} />
      </div>
    );
  }
}

export default App;
