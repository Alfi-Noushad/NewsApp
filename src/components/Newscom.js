import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newscom extends Component {
  render() {
    return (
        <div className="container my-5">
          <h1>ABC News - HEADLINES</h1>
          <div className="row my-5">
            <div className="col-md-4">
                 <NewsItem/>
            </div>
             <div className="col-md-4">
                 <NewsItem/>
            </div>
             <div className="col-md-4">
                 <NewsItem/>
            </div>
           
          
          </div>
        </div>
        
      
    )
  }
}

export default Newscom;
