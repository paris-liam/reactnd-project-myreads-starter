import React from 'react';
import {Link} from 'react-router-dom';
 import * as BooksAPI from './BooksAPI'
 import Book from './Book'
class SearchPage extends React.Component{
  state={
    search:'',
    bookList:[],
    searchError:false,
  }
  async search(term){
    let search_results = await BooksAPI.search(term);
    this.setState({
      search:term,
      bookList:search_results,
      searchError:search_results.hasOwnProperty('error')
    })
  }
  render() {
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
        {this.state.searchError ? (<h2>No Results!</h2>):(this.state.bookList.map((book)=>{<Book info={book}/>}))}
      </ol>
    </div>
  </div>)
  }
}
export default SearchPage
