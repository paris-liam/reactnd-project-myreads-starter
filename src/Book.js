import React from 'react';
import * as BooksAPI from './BooksAPI';
class Book extends React.Component{
    state={
        title:this.props.info.title,
        id:this.props.info.id,
        authors:this.props.info.authors,
        image:this.props.info.imageLinks.thumbnail,
        shelf:this.props.info.shelf,
    }
    updateShelf(newShelf){
        if(newShelf !== this.state.shelf){
           this.setState({
               shelf:newShelf
           })
           console.log(BooksAPI.update(this.state,newShelf))

        }
    }
    render(){
        return(
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+this.state.image+'")'}}></div>
                <div className="book-shelf-changer">
                  <select className='shelf_select' onChange={(e) => this.updateShelf(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.state.title}</div>
              <div className="book-authors">{this.state.authors.map((author)=><span key={author}>{author}</span>)}</div>
            </div>
          </li>
        )
    }
}
export default Book;