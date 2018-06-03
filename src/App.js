import React from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

const BooksApp = () =>({
  render(){
    return(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/search' component={SearchPage} />
      <Route component={MainPage} />{/*if link is not found, takes to main page*/}
    </Switch>
    </BrowserRouter>)}
})
export default BooksApp
