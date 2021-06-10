import React from 'react'
// import quotes from './QuoteDB';
import './QuoteandAuthor.css';


export default function QuoteAndAuthor(props) {


    const quotes = [
        {
            "quote": "Happy customer Quote 1",
            "author": "Happy customer 1"
        },
        {
            "quote": "Happy customer quote 2",
            "author": "Happy customer 2"
        },
    
        {
            "quote": "Happy customer quote 4",
            "author": "Happy customer 4"
        },
        {
            "quote": "Happy customer quote 5",
            "author": "Happy customer 5"
        },
        
    ]

    const { quote, generateRandomQuote } = props;
    return (
        <div className="quote-card" >

            <div className="quote-card-body">
            

                <p className="quote-card-text">{quote.quote}</p>

               
                <div className="icon-div">
                <i class="fa fa-circle fa-5x" aria-hidden="true"></i>
                </div>
                
                <h5 className="quote-card-title">- {quote.author}</h5>


                <button class="quote-button"
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit"> <i class="fa fa-circle" aria-hidden="true"></i></button>
                {/* <button
                    className="ml-3"
                    onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"><i class="fab fa-twitter"></i> Share Quote</button> */}
            </div>
        </div>
    )
}