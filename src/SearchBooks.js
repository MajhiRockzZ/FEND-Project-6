import React, {Component} from 'react'
import * as BookAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book';
import ShelfSelect from './ShelfSelect';
import PropTypes from 'prop-types'

class SearchBooks extends Component {
    state = {
        searchResult: []
    }

    changeShelf = (updateBook, shelf) => {
        const bookWithCompleteInfo = this.state.searchResult.find(book => book.id === updateBook.id)

        if (bookWithCompleteInfo) {
            this.props.onShelfChange(bookWithCompleteInfo, shelf);
        }
    }

    bulkShelfChange = (event) => {
        const targetShelf = event.target.value;
        this.props.onBulkShelfChange(targetShelf);
    }

    checkBook = (bookId, checkedStatus) => {
        const checkedBookWithInfo = this.state.searchResult.find(book => book.id === bookId)
        this.props.onBookChecked(checkedBookWithInfo, checkedStatus)
    }
}

SearchBooks.propTypes = {
    currentBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;