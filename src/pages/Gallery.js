import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

var Carousel = require('react-responsive-carousel').Carousel;

import Main from '../layouts/Main';

const PhotoGallery = () => {
    var images = ["https://www.publicdomainpictures.net/pictures/30000/velka/cactus-sunrise-13464458423Df.jpg",
    "https://as2.ftcdn.net/jpg/03/21/57/91/220_F_321579179_jgVJjgwGLwalzcQMVPYLV2OXkYjNvDlU.jpg",
    "https://drive.google.com/uc?export=view&id=171ngy9afALLt3qgcX_rVOmR7WvjuLP49"
  ];
    return (
      <div>      
         <Carousel>
            {images.map((image_name) => 
              <div key={image_name}>
                <img src={image_name}/>
                <p className="legend">{image_name}</p>
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