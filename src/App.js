import React from 'react'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'
import Header from './components/Header'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">
            <Header />
            <Route exact path="/" render={ (props) => ( <BookShelf {...props}  section='Currently Reading' /> )} />
            <Route exact path="/" render={ (props) => ( <BookShelf {...props}  section='Want To Read' /> )} />
            <Route exact path="/" render={ (props) => ( <BookShelf {...props}  section='Read' /> )} />
            <Route path="/search" component={BookSearch}/>
      </div>
    )
  }
}

export default BooksApp
