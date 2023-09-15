import { Component } from 'react';

const basicLightbox = require('basiclightbox')

export class Modal extends Component {
    state={}

    componentDidMount() {
        window.addEventListener('keydown', this.onKeydownEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeydownEsc);
    }

    onKeydownEsc = (e) => {
        if (e.code === 'Escape') this.props.closeModal()
    }


    render() {
    const {largeImageURL, closeModal} = this.props
    console.log(largeImageURL)
    return (
        <div className="Overlay" onClick={closeModal}>
            <div className="Modal">
                {basicLightbox.create(`
                    <img src="${largeImageURL}" width="800" height="600">`).show()}
                {/* <img src={largeImageURL} alt="" width="800" height="600"/> */}
            </div>
        </div>
    );
    }
}