
export const ImageGalleryItem = ({image}) => {
    return (
        <li className="ImageGalleryItem">
            <img 
                className="ImageGalleryItem-image" 
                src={image.webformatURL} 
                alt={image.tags} 
                width="249" 
                data-source={image.largeImageURL}
            />
        </li>
    );
}