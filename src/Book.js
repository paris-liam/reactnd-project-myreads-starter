import React from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'
class Book extends React.Component{
    constructor(props){
        super(props);
        let temp_image =  this.props.info.imageLinks !== undefined ? (this.props.info.imageLinks.thumbnail):(undefined)
        this.state={
            title:this.props.info.title,
            id:this.props.info.id,
            authors:this.props.info.authors,
            image: temp_image,
            shelf:this.props.info.shelf
        };

    }
    async updateStatus(newShelf){
        this.setState({shelf:newShelf})
        await BooksAPI.update(this.state,newShelf)
        await this.props.updateShelves();
        console.log('updated')
    }
    render(){
        return(
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+this.state.image+'")'}}></div>
                <div className="book-shelf-changer">
                  <select className='shelf_select' value={this.state.shelf} onChange={(e) => this.updateStatus(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="no_shelf">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.state.title}</div>
              <div className="book-authors">{ (this.state.authors !== undefined && this.state.authors.constructor === Array) && this.state.authors.map((author)=><span key={author}>{author}</span>)}</div>
            </div>
          </li>
        )
    }
}
Book.propTypes = {
    info: PropTypes.shape({
        title:PropTypes.string,
        id:PropTypes.string,
        authors:PropTypes.array,
        imageLinks:PropTypes.object,
        shelf:PropTypes.string

    })
}
Book.defaultProps = {
    info:{
        title:"unavalible",
        id:"unavail",
        authors:["unavail"],
        imageLinks:{thumbnail:''},
        shelf:undefined
    }
}
export default Book;