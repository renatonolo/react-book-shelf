import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'

import { Books } from '../../components/books/books'

import { booksActions } from "../../actions";

class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        autoBind(this)
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks() {
        const dispatch = this.props.dispatch
        dispatch(booksActions.myBooks())
    }

    handleAddBook() {
        
    }

    render() {
        console.log(this.props.books.myBooks)
        return (
            <div>
                <h1>My Books</h1>
                {this.props.books.loading && 'Loading...'}
                <Books books={this.props.books.myBooks}></Books>
                <div>
                    <Link to='/addNewBook'>Add new book</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const books = state.books;

    return {
        books
    }
}

export default connect(mapStateToProps)(Dashboard)