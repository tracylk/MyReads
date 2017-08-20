import React from 'react'
import '../App.css'
import BookMenu from './BookMenu'
import PropTypes from 'prop-types'


class Book extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        author: PropTypes.string,
        url: PropTypes.string,
        shelfType: PropTypes.string,
        id:PropTypes.string,
        onBookShelfChange: PropTypes.func.isRequired
    };

    onBookShelfChangeHandler = (shelfType) => {
console.log("shelf type: " + {shelfType})
        this.props.onBookShelfChange(this.props.id, shelfType);
    }

  render() {
      return (
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={
                          { width: 128, height: 193,
                            backgroundImage: `url("${this.props.url}")`
                          }
                        }>
                    </div>
                    <BookMenu shelfType={this.props.shelfType} onBookShelfChangeHandler={this.onBookShelfChangeHandler} />
                  </div>

                  <div className="book-title">{this.props.title}</div>
                  <div className="book-authors">{this.props.author}</div>
                </div>
      )}
  }


export default Book;
