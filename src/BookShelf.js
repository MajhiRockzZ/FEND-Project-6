import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
    const booksToDisplay = props.book.map((book) => (
        <li key={book.id}>
            <Book

            />
        </li>
    ))
}