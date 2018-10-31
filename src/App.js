import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        checkedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }
}

export default BooksApp
