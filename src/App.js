import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
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

    /**
     * Bulk update shelf
     */

    bulkUpdateShelf = (shelf) => {
        const updatePromises = this.state.checkedBooks.map(book => BooksAPI.update(book, shelf));

        return Promise
            .all(updatePromises)
            .then(response => {
                this.setState(state => {
                    // Handling new books from search result
                    const newBooks = state.checkedBooks.filter(
                        checkedBook => {
                            const existInLibrary = state.books.find(book =>
                                book.id === checkedBook.id);
                            return !existInLibrary;
                        });
                    const newBooksWithUpdatedShelf = newBooks.map(
                        newBooks => {
                            newBooks.shelf = shelf;
                            return newBooks;
                        });
                    const currentBookWithUpdatedShelf = state.books.map(book => {
                        const bookExistInCheckedBooks = state.checkedBooks.find(
                            checkedBook => checkedBook.id === book.id)

                        if (bookExistInCheckedBooks) {
                            book.shelf = shelf;
                        }

                        return book;
                    });

                    return {
                        book: currentBookWithUpdatedShelf.concat(newBooksWithUpdatedShelf),
                        checkedBooks: [],
                    }
                })
            })
    };

    /**
     * Check/tick the book
     */
    checkBook = (checkedBook, checkedStatus) => {
        this.setState(state => {
            const existInCheckedBooks = state.checkedBooks.find(book => book.id === checkedBook.id);

            if (!existInCheckedBooks && checkedStatus === true) {
                return {
                    checkedBooks: state.checkedBooks.concat([checkedBook])
                }
            }

            if (checkedStatus === false) {
                return {
                    checkedBooks: state.checkedBooks.filter(book => book.id !== checkedBook.id)
                }
            }
        })
    };


    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={() =>
                    <ListBooks
                        books={this.state.books}
                        onShelfChange={this.updateShelf}
                        onBulkShelfChange={this.bulkUpdateShelf}
                        onBookChecked={this.checkBook}
                    />
                }/>
                <Route path='/search' render={() =>
                    <SearchBooks
                        currentBooks={this.state.books}
                        onShelfChange={this.updateShelf}
                        onBulkShelfChange={this.bulkUpdateShelf}
                        onBookChecked={this.checkBook}
                    />
                }/>
            </div>
        )
    }
}

export default BooksApp
