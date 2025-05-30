import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newscom extends Component {

 article = [

 ];


  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false
    }
  }

  render() {
    return (
        <div className="container my-5">
          <h1>ABC News - HEADLINES</h1>
          <div className="row my-5">
            <div className="col-md-4">
                 <NewsItem title="mytitle" description="mydesc" imageUrl=""/>
            </div>
             <div className="col-md-4">
                 <NewsItem title="mytitle" description="mydesc" imageUrl=""/>
            </div>
             <div className="col-md-4">
                 <NewsItem title="mytitle" description="mydesc" imageUrl=""/>
            </div>
           
          
          </div>
        </div>
        
      
    )
  }
}

export default Newscom;
