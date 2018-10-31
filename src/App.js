import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        checkedBooks: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }

    /**
     * Update shelf for a book
     */
    updateShelf = (updatedBook, shelf) => {
        BooksApp.update(updatedBook, shelf).then(response => {
            this.setState(state => {
                let currentBooks = [];
                const bookFoundInLibrary = state.books.find(book =>
                    book.id === updatedBook.id);

                if (bookFoundInLibrary) {
                    currentBooks = state.books.map(book => {
                        if (book.id === updatedBook.id) {
                            book.shelf = shelf;
                        }
                        return book;
                    })
                } else {
                    updatedBook.shelf = shelf;
                    currentBooks = state.books.concat([updatedBook]);
                }
                return {book: currentBooks};
            })
        })
    }
}

export default BooksApp
