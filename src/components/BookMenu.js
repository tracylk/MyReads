import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';

class BookMenu extends React.Component {
  static propTypes = {
    shelfType : PropTypes.string.isRequired,
    onBookShelfChangeHandler: PropTypes.func.isRequired

  }

  onBookShelfChangeHandler = (event) => {
      console.log("BookMenu - onBookshelfChangeHandler");
     this.props.onBookShelfChangeHandler(event.target.value);
  }

  render() {
    return (
        <div className="book-shelf-changer">
          <select value={this.props.shelfType} onChange={this.onBookShelfChangeHandler}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>

    )}
  }


export default BookMenu;
