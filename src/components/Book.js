import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookMenu from './BookMenu'
import PropTypes from 'prop-types'


class Book extends React.Component {

  render() {
    return (
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <div className="book">
                    {props.books.map((book) =>
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: {book.url}}}></div>
                          <div className="book-shelf-changer">
                            <BookMenu />
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                     )}
                </div>
              </li>
            </ol>
          </div>

        )}
  }


export default Book;
