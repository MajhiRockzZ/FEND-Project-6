import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    render() {
        const {id, title, thumbnail, shelf, authors, rating} = this.props;

        return (
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${thumbnail})`
                    }}>
                    </div>
                    <ShelfSelect onChange={this.changeShelf} value={shelf}/>
                </div>
                <div className='book-title'>{title}</div>
                {authors && authors.map(author => (
                    <div key={author} className='book-authors'>{author}</div>
                ))}
            </div>
        )
    }
}


export default Book;