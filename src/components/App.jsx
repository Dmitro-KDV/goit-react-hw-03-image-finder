// import axios from "axios";
import { Component } from 'react'
import {Searchbar} from 'components/ImageSearch/Searchbar'
import {ContentInfo} from 'components/ContentInfo/ContentInfo'

export class App extends Component {
  state = {
    searchText: ''
  }

  handleChange = (searchText) => {
    this.setState({searchText})
  }

  render() {
    return (
      <div>
        <header className="searchbar">
          <Searchbar handleChange={this.handleChange}/>
        </header>
        <ContentInfo searchText={this.state.searchText}/>
      </div>
    );
  };
};
