import React, {Component} from 'react'
import * as BookAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'
import ShelfSelect from './ShelfSelect'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  state = {
    query : '',
    searchResult: []
  };

  changeShelf = (updateBook, shelf) => {
    const bookWithCompleteInfo = this.state.searchResult.find(book => book.id === updateBook.id);

    if (bookWithCompleteInfo) {
      this.props.onShelfChange(bookWithCompleteInfo, shelf);
    }
  };

  bulkShelfChange = (event) => {
    const targetShelf = event.target.value;
    this.props.onBulkShelfChange(targetShelf);
  };

  checkBook = (bookId, checkedStatus) => {
    const checkedBookWithInfo = this.state.searchResult.find(book => book.id === bookId)
    this.props.onBookChecked(checkedBookWithInfo, checkedStatus)
  };

  search = (query) => {
    BookAPI.search(query).then(response => {
      if (query.length === 0 || query === "") {
        this.setState({ searchResult: [] })
      }
      else if (!response.error) {
        this.setState({
          searchResult: response.map(book => {
            const bookFoundInLibrary = this.props.currentBooks.find(
              currentBook => currentBook.id === book.id);

            if (bookFoundInLibrary) {
              book.shelf = bookFoundInLibrary.shelf;
            } else {
              this.shelf = "";
              this.bookFoundInLibrary = "";
              this.setState({ query: ''})
            }
            return book;
          })
        })
      } else {
        this.setState({ searchResult: []})
      }
    })
  };

  render() {
    const booksToDisplay = this.state.searchResult.map(book => (
      <li key={book.id}>
        <Book
          id={book.id}
          title={book.title}
          authors={book.authors}
          thumbnail={book.imageLinks && book.imageLinks.thumbnail}
          shelf={book.shelf}
          onShelfChange={this.changeShelf}
          onBookChecked={this.checkBook}
        />
      </li>
    ));


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   onChange={(event) => this.search(event.target.value)}/>
          </div>
          <div className="bulk-shelf-changer">
            <ShelfSelect onChange={this.bulkShelfChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{booksToDisplay}</ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  currentBooks: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;
