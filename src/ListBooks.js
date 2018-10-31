import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';
import ShelfSelect from '/ShelfSelect';
import PropTypes from 'prop-types';

class ListBooks extends Component {
    bulkShelfChange = (event) => {
        const targetShelf = event.target.value;
        this.props.onBulkShelfChange(targetShelf);
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default ListBooks;