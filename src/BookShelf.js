import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
    const booksToDisplay = props.book.map((book) => (
        <li key={book.id}>
            <Book
                id={book.id}
                title={book.title}
                authors={book.authors}
                thumbnail={book.imageLinks && book.imageLinks.thumbnail}
                shelf={book.shelf}
                rating={book.ratingsCount}
                onShelfChange={props.onShelfChange}
                onBookChecked={props.onBookChecked}
            />
        </li>
    ))

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{props.title}</h2>
            <div className='bookshelf-books'>
                <ol className='books-grid'>
                    {booksToDisplay}
                </ol>
            </div>
        </div>
    )
};

export default BookShelf;