import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfSelect from './ShelfSelect'

class Book extends Component {

  changeShelf = (event) => {
    this.props.onShelfChange({id: this.props.id}, event.target.value);
  };

  handleChecked = (event) => {
    this.props.onBookChecked(this.props.id, event.target.checked);
  };

  render() {
    const {id, title, thumbnail, shelf, authors} = this.props;

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
        <div>
          <input type='checkbox' name='chk-book' value={id} onChange={this.handleChecked}/>
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  authors: PropTypes.array,
  onShelfChange: PropTypes.func.isRequired,
  onBookChecked: PropTypes.func
};

export default Book;