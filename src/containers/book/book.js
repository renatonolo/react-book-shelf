import React from 'react'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'

import './book.scss'
import { booksActions } from '../../actions';

class Book extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)
    }

    handleRemoveClick(book) {
        const dispatch = this.props.dispatch

        dispatch(booksActions.remove(book.key))
    }

    render() {
        return <div className="bs_book">
            <p>Nome do livro: {this.props.book.name}</p>
            <p>Descrição: {this.props.book.description}</p>
            <button onClick={() => {
                this.handleRemoveClick(this.props.book)
            }}>Remover</button>
        </div>
    }
}

export default connect()(Book)