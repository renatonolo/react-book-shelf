import React from 'react'
import Book from '../../containers/book/book'

import './books.scss'

export const Books = props => {
    let list = [];
    props.books.forEach(book => {
        list.push(
            <li key={book.key}>
                <Book book={book}></Book>
            </li>
        )
    })

    return <ul className="bs_books">
        {list}
    </ul>
}