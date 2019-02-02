import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from './logo.svg';


class Quote extends Component {

  constructor(){
    super();

  }


  componentDidMount() {

   }

   componentDidUnmount() {


   }
  render() {

    const {quote, book, fading} = this.props.quote;
    let fadedClass = this.props.fading ? "fadeIn" :"fadeOut";
    return (

      <div className="Quote">
      <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}>

          <section>
            <p>{quote}</p>
            <p>{book}</p>
          </section>
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Quote;
