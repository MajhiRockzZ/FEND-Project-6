import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            </div>
        </div>
    )
}