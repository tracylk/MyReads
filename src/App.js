import React from 'react'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'
import Header from './components/Header'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {


  state = {
     books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books: books});
      });
   }

  onBookShelfChange = (bookId, destShelf) =>{
     this.setState((state)=> {
            state.books.forEach((book) => {
                 if(book.id === bookId) {
console.log("book id: " + bookId + "   destShelf: " + destShelf);
                     book.shelf = destShelf;
                     BooksAPI.update(book, destShelf).then((res) => {
                      });
                 }
            });
      });
  }

  getBookShelf = (bookId) => {
      let bookShelf = "none";
     this.state.books.forEach((book) => {
         if(book.id === bookId) {
             bookShelf = book.shelf;
         }
     });
     return bookShelf;
  }

  onBookShelfAdd = (bookId, destShelf) =>{
      console.log("app.js - onBookshelfAdd");
   BooksAPI.get(bookId).then((book) => {
     this.setState((state)=> {
         let bookOnShelf = false;
        state.books.forEach((book) => {
             if(book.id === bookId) {
console.log("book id: " + bookId + "   destShelf: " + destShelf);
                 book.shelf = destShelf;
                 bookOnShelf = true;
                 BooksAPI.update(book, destShelf).then((res) => {
                  });
              }
            });
            if (!bookOnShelf) {
                book.shelf = destShelf;
                state.books.push(book);
                BooksAPI.update(book, destShelf).then((res) => {
                });
            }
      });
   });
  }

  render() {
    return (
      <div className="app">
          <Header  />
          <div>
            <Route exact path='/' render={() => (
              <div>
                <BookShelf section="Currently Reading" shelfType='currentlyReading' books={this.state.books} onBookShelfChange={this.onBookShelfChange}/>
                <BookShelf section="Read" shelfType='read' books={this.state.books} onBookShelfChange={this.onBookShelfChange}/>
                <BookShelf section="Want to Read" shelfType='wantToRead' books={this.state.books} onBookShelfChange={this.onBookShelfChange}/>
              </div>
            )}/>
            <Route path='/search' render={() => (
                <BookSearch onBookShelfAdd={this.onBookShelfAdd}  getBookShelf={this.getBookShelf} />
            )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
