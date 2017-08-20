import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class BookShelf extends React.Component {

  static propTypes = {
    section: PropTypes.string.isRequired,
    shelfType: PropTypes.string.isRequired,
    books: PropTypes.array,
    onBookShelfChange: PropTypes.func.isRequired
  }

  onBookShelfChange = (bookId, shelfType) => {
      this.props.onBookShelfChange(bookId, shelfType);
   }

  render() {
    const books = this.props.books.filter((book) => {
     return book.shelf === this.props.shelfType
    });

    return (
      <div className="bookshelf">
         <h2 className="bookshelf-title">{this.props.section}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {books.map((book) => {
                      return (
                          <li key={book.id}>
                            <Book id={book.id} title={book.title}
                                  author={book.authors[0]}
                                  url={book.imageLinks.smallThumbnail}
                                  shelfType={this.props.shelfType}
                                  onBookShelfChange={this.onBookShelfChange}/>
                          </li>
                        );
                   })
                  }
              </ol>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    )
  }
}

export default BookShelf;
