import { Component } from 'react'
import Notiflix from 'notiflix';
import { RotatingLines } from  'react-loader-spinner'
import {getImage} from './services'
import {ImageGallery} from 'components/ImageGallery/ImageGallery'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
import {Searchbar} from 'components/ImageSearch/Searchbar'
import {Button} from 'components/Button/Button'
import {Modal} from 'components/Modal/Modal'


import './styles.css'

let innerHeight = window.innerHeight;

export class App extends Component {
  state = {
    searchText: '',
    image: null,
    isLoading: false,
    page: 1,
    totalPage: 0,
    largeImageURL: '',
  }

  componentDidUpdate(_, prevState) {
    if(prevState.searchText !== this.state.searchText || prevState.page !== this.state.page) {
      this.setState({isLoading: true});
      getImage(this.state.searchText, this.state.page)
        .then((response) => {
          if (response.data.hits.length === 0) {
              Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
              return;
          }
          if (this.state.page > 1) {
              this.setState((prev) => ({
                image: [...prev.image, ...response.data.hits],
              }))
          }  else {
            this.setState({image: response.data.hits});
          }
          this.setState({totalPage: response.data.totalHits});
        })
        .catch(function(error) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        })
        .finally(() => {
          this.setState({isLoading: false});
        })
    }
  }

  handleChange = (searchText) => {
    this.setState({searchText})
    this.setState({page: 1});
  }

  handleSubmit = () => {
    // if (this.state.searchText) {
      this.setState({page: this.state.page + 1});
      this.scroll();
    // }
  }

  openModal = (e) => {
    this.setState((prev) =>({largeImageURL: e.target.dataset.source}))
  }

  closeModal = () => {
    this.setState((prev) =>({largeImageURL: ''}))
  }

  scroll = () => {

    innerHeight = innerHeight + window.innerHeight
    window.scrollBy({
      top: innerHeight,
      behavior: "smooth",
    });
    // window.scroll(0, window.innerHeight);
  } 

  render() {
    const {image, isLoading, largeImageURL, page, totalPage} = this.state;

    return (
      <div>
        <header className="Searchbar">
          <Searchbar handleChange={this.handleChange}/>
        </header>
        <>
            <ImageGallery openModal={this.openModal}>
                {image && image.map((el) => {
                  return (
                    <ImageGalleryItem key={el.id} image={el}/>
                )})}  
            </ImageGallery>
            
            {largeImageURL && <Modal largeImageURL={largeImageURL} closeModal={this.closeModal}/>}
            
            {isLoading && 
            <div className="RotatingLines">
              <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </div>
            }

            {page <= totalPage &&  <Button handleSubmit={this.handleSubmit}/>}
          </>
      </div>
    );
  };
};
