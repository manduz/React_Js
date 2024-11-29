function ImageItem({image}) {
    console.log(image);
    return  <div>
        <img 
            className="imageListImg"
            src = {image.urls.small} 
            alt={image.alt.description}
        />
    </div> ;
}

export default ImageItem;