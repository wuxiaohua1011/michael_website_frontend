import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import ImageViewer from "react-simple-image-viewer";

import Main from '../layouts/Main';

const PhotoGallery = () => {
    const [images, setImages] = useState([]); 
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);


    useEffect(() => {
        if (isInitialRender) {
          setIsInitialRender(false);
          var new_images = [] 
          var host = process.env.REACT_APP_SERVER_URL
          // var port = process.env.REACT_APP_SERVER_PORT
          var base_url = "https://" + host;
          console.log("Base url: "+base_url);
          axios.get(base_url+"/v2/photos/list",{
                headers: {
                'Access-Control-Allow-Origin': true,
                },
              }).then(resp => {
                for (var i = 0; i < resp.data.photos.length; i++) {
                  var image_name = resp.data.photos[i]
                  var query_path = base_url + "/v2/photos/?fname=" + image_name;
                  new_images.push(query_path) 
                }
                setImages(new_images);
              });
        }
    }, [images, isInitialRender])
      


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    
    return (
      <div>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
          ))}
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}
    </div>
    );
}

const Gallery = () => (

  <Main
    title="Gallery"
    description="Michael's Photography Gallery"
  >
  
    <PhotoGallery />
  </Main>
);

export default Gallery;