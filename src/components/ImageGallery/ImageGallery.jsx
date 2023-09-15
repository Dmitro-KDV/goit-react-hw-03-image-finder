

export const ImageGallery = ({children, openModal}) => {
    return (
        <ul className="ImageGallery" onClick={openModal}>
            {children}
        </ul>
    );
}