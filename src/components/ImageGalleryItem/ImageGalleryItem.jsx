
export const ImageGalleryItem = (image) => {
    console.log(image)
    return (
        <li className="gallery-item">
            <img src={image.webformatURL} alt={image.tags} width="249"/>
        </li>
    );
}