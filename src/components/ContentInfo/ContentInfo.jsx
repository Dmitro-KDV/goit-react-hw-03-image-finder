import { Component } from 'react'
import Notiflix from 'notiflix';
import {getImage} from '../services'
import {ImageGallery} from 'components/ImageGallery/ImageGallery'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'

export class ContentInfo extends Component {
  state = {
    image: null,
    isLoading: false,
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.searchText !== this.props.searchText) {
      this.setState({isLoading: true});
      getImage(this.props.searchText)
        .then((response) => {
          if (response.data.hits.length === 0) {
              Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
              return;
          }
          this.setState({image: response.data.hits});

        })
        .finally (() => {
          this.state({isLoading: false});
        })
        .catch(function(error) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });

    }
  }
  
  render() {
    const {image, isLoading} = this.state;
    return (
      <>
        {isLoading && <h1>Loading .....</h1>}
        <ImageGallery>
            {image && image.map((el) => {
              return (
                <ImageGalleryItem key={el.id} image={el}/>
            )})}  
        </ImageGallery>
      </>
  )};
};
