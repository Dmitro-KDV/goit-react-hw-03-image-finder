import { Component } from 'react'
import {getImage} from '../services'
import Notiflix from 'notiflix';
import {ImageGallery} from 'components/ImageGallery/ImageGallery'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'

export class ContentInfo extends Component {
  state = {
    image: ''
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.searchText !== this.props.searchText) {
      getImage(this.props.searchText)
        .then((response) => {
          if (response.data.hits.length === 0) {
              Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
              return;
          }
          this.setState({ image: response.data.hits});

        })
        .catch(function(error) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });

    }
  }
  
  render() {
    const {image} = this.state;
    return (
      <>
        <ImageGallery>
            {image && image.map((el) => {
              return (
                <ImageGalleryItem key={el.id} image={el}/>
            )})}  
        </ImageGallery>
      </>
  )};
};
