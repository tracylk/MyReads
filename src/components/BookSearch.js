import React from 'react'
import '../App.css'
import Book from './Book'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';

class BookSearch extends React.Component {

    static propTypes = {
        onBookShelfAdd : PropTypes.func,
        getBookShelf : PropTypes.func.isRequired
    }

    state = {
        results : []
    }

  onBookShelfSearch = (event) => {
        const query = event.target.value;

        BooksAPI.search(query, 10).then((books)=> {
            this.setState({result:[]});
            setTimeout(() => {
                if(books && books.length > 0) {
                    books.forEach((book) => {
                        book.shelf = this.props.getBookShelf(book.id);
                    });
                }
                this.setState({results:books});
                }, 300);
        });
    }

    onBookShelfChange = (bookId, shelfType) => {
        console.log("BookSearch - onBookShelfChange  bookid: " + {bookId} + " shelftype: " + shelfType);
          this.props.onBookShelfAdd(bookId, shelfType);
          this.setState((state) => {
              state.results.forEach((book) => {
                  if(book.id === bookId) {
                      book.shelf = shelfType;
                  }
              });
          });

   }

  render() {

    return (
          <div className="booksearch">
              <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/" />
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author"  onKeyUp={this.onBookShelfSearch} />
                    </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {this.state.results && this.state.results.length > 0 && this.state.results.map((book) => {
                        return (
                                  <li key={book.id}>
                                    <Book id={book.id}
                                          title={book.title}
                                          author={book.authors && book.authors.length > 0 ? book.authors[0] : ''}
                                          url={book.imageLinks.smallThumbnail}
                                          shelfType={book.shelf}
                                          onBookShelfChange={this.onBookShelfChange}/>
                                  </li>
                                );
                           })
                          }

                    </ol>
                </div>
              </div>
          </div>
        )}
  }


export default BookSearch;
