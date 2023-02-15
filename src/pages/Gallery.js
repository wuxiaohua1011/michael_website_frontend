import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

var Carousel = require('react-responsive-carousel').Carousel;

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
          var port = process.env.REACT_APP_SERVER_PORT
          var version = "v3";
          var base_url = "http://" + host+":"+port + "/" + version;
          console.log("Base url: "+base_url);

          axios.get(base_url+"/photos/list",  {
              timeout: 10000,
              headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
              }
          }).then(resp => {
                for (var i = 0; i < resp.data.photos.length; i++) {
                  new_images.push(resp.data.photos[i]) 
                }
                setImages(new_images);
              });
        }
    }, [images, isInitialRender])
    return (
      <div>      
         <Carousel>
            {images.map((photoName_gdriveFileID) => 
              <div key={photoName_gdriveFileID.photo_fname}>
                <img src={"https://drive.google.com/uc?export=view&id="+photoName_gdriveFileID.gdrive_file_id}/>
                <p className="legend">{photoName_gdriveFileID.photo_fname}</p>
              </div>
              )
            }
            </Carousel>
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