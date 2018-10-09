import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import autoBind from 'react-autobind'
import { Form } from '../../components/form/form'
import { booksActions } from "../../actions";

class AddNewBook extends Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = {
            name: '',
            description: ''
        }
    }

    handleName(event) {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    handleDescription(event) {
        this.setState({
            ...this.state,
            description: event.target.value
        })
    }

    handleAddNewBook(event) {
        event.preventDefault()
        
        const dispatch = this.props.dispatch;
        dispatch(booksActions.addNew(this.state.name, this.state.description))
    }

    render() {
        if(this.props.books.newBookAdded) {
            return <Redirect to='/dashboard'/>
        }

        return <div>
            <h1>Add new books</h1>
            {this.props.books.loading && 'Adding new book...'}
            <Form style={{
                width: '100%'
            }}>
                <label htmlFor='txtBookName'>Nome do livro: </label>
                <input id='txtBookName' type='text' onChange={this.handleName}></input>

                <label htmlFor='txtBookDescription'>Descrição do livro: </label>
                <textarea id='txtBookDescription' onChange={this.handleDescription}></textarea>
                <button onClick={this.handleAddNewBook}>Save</button>
            </Form>
        </div>

    }
}

function mapStateToProps(state) {
    const books = state.books;

    return {
        books
    }
}

export default connect(mapStateToProps)(AddNewBook)