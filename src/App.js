import React from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';


class BooksApp extends React.Component{
  state = {
    current_shelf:[],
    want_shelf:[],
    read_shelf:[],
  }
  async updateShelves() {
    let book_data = await BooksAPI.getAll();
    this.setState({
        want_shelf: book_data.filter(bookinfo => bookinfo.shelf==="wantToRead"),
        read_shelf: book_data.filter(bookinfo => bookinfo.shelf==="read"),
        current_shelf: book_data.filter(bookinfo => bookinfo.shelf==="currentlyReading")
      });
  }
  render(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(props) => <MainPage current={this.state.current_shelf} want={this.state.want_shelf} read={this.state.read_shelf} updateShelves={this.updateShelves.bind(this)} />} />
        <Route exact path='/search' render={(props) => <SearchPage current={this.state.current_shelf} want={this.state.want_shelf} read={this.state.read_shelf} updateShelves={this.updateShelves.bind(this)}  />} />
        <Route render={MainPage} />{/*if link is not found, takes to main page*/}
      </Switch>
    </BrowserRouter>
  )}
}
export default BooksApp
