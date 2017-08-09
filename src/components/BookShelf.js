import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'
import BookSearch from './BookSearch'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BookShelf extends React.Component {

var books = [
{id: 1, url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api", title: "To Kill a Mockingbird", author: "Harper Lee" },
{id: 2, url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api", title: "Ender's Game", author: "rson Scott Card"}
]
  render() {
    return (
      <div className="bookshelf-list">
          <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.section}</h2>
              <Book books={this.props.books}/>
          </div>

          <div className="open-search">
              <Link to="/search">Add a book</Link>
          </div>
      </div>
    )
  }
}

export default BookShelf;
