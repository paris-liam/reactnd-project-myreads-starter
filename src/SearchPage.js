import React from 'react';
import {Link} from 'react-router-dom';
 import * as BooksAPI from './BooksAPI'
 import Book from './Book'
class SearchPage extends React.Component{
  state={
    search:'',
    bookList:[]
  }
  search(term){
    let search_results = BooksAPI.search(term);
    this.setState({
      search:term,
      bookList:search_results
    })
  }
  render() {
    {console.log(BooksAPI.search('k'))}
    return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to='/'>Close</Link>
      <div className="search-books-input-wrapper">
        <input type="text" value={this.state.search} onChange={(e) => this.search(e.target.value)} placeholder="Search by title or author"/>
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {this.state.bookList.map((book)=>{<Book info={book}/>})}
      </ol>
    </div>
  </div>)
  }
}
export default SearchPage