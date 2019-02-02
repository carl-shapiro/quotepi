import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from './logo.svg';


class Quote extends Component {

  constructor(){
    super();

  }


  componentDidMount() {

   }

   componentWillUnmount() {


   }
  render() {

    const {quote, book, fade} = this.props.quote;
    let fadedClass = this.props.fade ? "fadeIn" :"fadeOut";

    console.log("Faded class", fadedClass);
    return (

      <div className="Quote">


          <section className={fadedClass}>
            <p>{quote}</p>
            <p>{book}</p>
          </section>
      </div>
    );
  }
}

export default Quote;
