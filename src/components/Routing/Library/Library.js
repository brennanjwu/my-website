import React from 'react';
import books from '../../../books.js';
import BookTile from '../../BookTile.js';
import './Library.scss';
import { v4 as uuidV4 } from 'uuid';

function Library() {

    return (
        <div>
            <h1>My Library</h1>
            <p>Here are some of the my favorite books in my collection that I would recommend. These are affiliate links so purchasing from me would help.</p>
            <div className="book-list">
                {books.map((book, index) => 
                    { return <BookTile
                        key={uuidV4()}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        link={book.link}
                        opinion={book.opinion} />
                })}
            </div>
        </div>
    );
}

export default Library;