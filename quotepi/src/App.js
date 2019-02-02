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
      timeout:10000,
      fading:false
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    this.getNewQuote();
  }


  getNewQuote(){
    let quoteIdx = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIdx];
  }

  getNewStyle(){

  }
  componentDidMount(prevProps, prevState) {

    this.timeout = setInterval(() => {
            let nextQuote = this.getNewQuote();
      this.setState({currentQuote:nextQuote, fading:true});

      setInterval(()=>{
        this.setState({fading:false});
      }, this.state.timeout-250);

    }, this.state.timeout);
   }

   componentDidUpdate(){
     // this.setState({fading:false});
   }
   // componentDidMount(){
   //
   // }

   // componentWillUnmount() {
   //   this.setState({fading:false});
   //   clearInterval(this.state.timeout);
   // }

   componentDidUpdate(prevProps, prevState){


   }


  render() {

    const {quote, book, fading} = this.state;
    console.log('Fading', fading);
    return (

      <div className="App">
        <Quote quote={this.state.currentQuote} fade={this.state.fading} />
      </div>
    );
  }
}

export default App;
