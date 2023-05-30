import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

var Carousel = require('react-responsive-carousel').Carousel;

import Main from '../layouts/Main';

const PhotoGallery = () => {
  const images = [
    "1ePHIQP1o8-dMd_0k3Tps2LhtLGsCSJTb",
    "13k_YOuxTjjVN_kITORxryuyGRu8K_f2y",
    "1L11Cp_dQRMa55NgRZx5mE22JXnxOxQQw",
    "1uu-ASMy2u2weMaXGwmbfta6xKIzktH0E",
    "1PTXtIYdgDaAwKr-_3UNq13EsLORQUq1I",
    "1UwXa_OJ37AdrEEdPZBY-8czMONbFA5my",
    "1fDidhtYvAKnDiKe2vty4OJcKwCS5TBwf",
    "1M7P8bt6AZc66cC5gCjSooYCTpfkPB9yn",
    "1027gRMG0hn35NV2aJE7A2pFX6laorYVo",
    "1ePHIQP1o8-dMd_0k3Tps2LhtLGsCSJTb",
    "1J3HWtWuL5CjSYPEskQw_R-1Y-f9QiKnV",
    "1I3EUbKQQsak1NpXi3B8RKIH4T0JISyYt",
    "16OEv_nPmcar5Gb1RNB6HXccPd2_yJVbs",
    "1hiZkeEhi477pyPyKJshGKgtU2pgedac3",
    "12ChWMNMfnv-OP_5jmXMYJQ-NGNqPUO3Q"
  ];

  return (
    <div>
      <Carousel>
        {images.map((image_id, i) => (
          <div key={i}>
            <img src={"https://drive.google.com/uc?export=view&id=" + image_id} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Gallery = () => (
  <Main title="Gallery" description="Michael's Photography Gallery">
    <PhotoGallery />
  </Main>
);

export default Gallery;
