import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
class SearchPage extends React.Component{
  state={
    bookList:[],
  }
  componentDidMount() {
    this.searchBooks('')
  }
  async searchBooks(term){
    if( term !== ''){
      let search_results = await BooksAPI.search(term);
      this.setState({
        bookList:search_results,
      });
    }
    else{
      this.setState({
        bookList:[]
        },
      );
    }
  }
  render() {
    return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to='/'>Close</Link>
      <div className="search-books-input-wrapper">
        <input type="text" onChange={(e) => this.searchBooks(e.target.value)} placeholder="Search by title or author"/>
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {this.state.bookList.constructor === Array ? (this.state.bookList.map((book)=><Book key={book.id} info={book} updateShelves={this.props.updateShelves}/>)):(<h2>No Results!</h2>)}
      </ol>
    </div>
  </div>)
  }
}
export default SearchPage