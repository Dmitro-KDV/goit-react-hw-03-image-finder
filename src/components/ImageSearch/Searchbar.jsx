// import {Form, Label} from './Phonebook.stiled';

import { Component } from 'react'

export class Searchbar extends Component {
    state = {
        value: '',
    }
    handleChange = ({target: {value}}) => {
        this.setState({value});
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleChange(this.state.value)
    }
      
    render() {
        return ( 
            <>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </form>
            </>
        );
    }
}