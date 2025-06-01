import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class Newscom extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false
    };
  }

  async componentDidMount() {
    let url = "";
    let data = await fetch(url);
    let parsedData = await data.json(); // ❗FIX: call json() as a function
    this.setState({ article: parsedData.articles }); // ❗FIX: should be 'articles' not 'article'
  }

  handlePreclick= async() => {
    
    let url = "";
    let data = await fetch(url);
    let parsedData = await data.json(); // ❗FIX: call json() as a function

    this.setState({
        page: this.state.page-1,
        
      })
  }

  handleNextclick= async() => {

    let url = "";
    let data = await fetch(url);
    let parsedData = await data.json(); // ❗FIX: call json() as a function

    this.setState({
        page: this.state.page+1,
        
      })
  }

  render() {
    return (
      <div className="container my-5">
        <h1>ABC News - HEADLINES</h1>
        <div className="row my-5">
          {this.state.article.map((element) => (
            <div className="col-md-4" key={element.url}> {/* ✅ FIX: wrap with () and move key here */}
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage} // ❗FIX: it's `urlToImage` from API, not `imageUrl`
              />
            </div>
          ))}
        </div>
        <div className="conatainer d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePreclick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextclick}> Next &rarr; </button>

        </div>
      </div>
    );
  }
}

export default Newscom;
