import React, { Component } from 'react'
import QuoteAndAuthor from './QuoteandAuthor';
import quotes from './QuoteDB';

import './QuoteMaker.css';

export default class QuoteMaker extends Component {

  //state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author
  }

  //generate diffrent quote function
  generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)

  }

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="q-container">
        {/* <h1 className="text-center">What our customers say</h1> */}
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    )
  }
}
