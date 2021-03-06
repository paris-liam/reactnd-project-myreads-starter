import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book'

class MainPage extends React.Component{
  async componentDidMount() {
    await this.props.updateShelves();
    console.log('mounted')
  }
  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.current.map((book_info)=><Book key={book_info.id} info={book_info} updateShelves={this.props.updateShelves}/>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.want.map((book_info)=><Book key={book_info.id} info={book_info} updateShelves={this.props.updateShelves}/>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.read.map((book_info)=><Book key={book_info.id} info={book_info} updateShelves={this.props.updateShelves}/>)}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}
export default MainPage
