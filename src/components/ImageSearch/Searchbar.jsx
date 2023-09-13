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
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
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