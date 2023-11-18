import React, { Component } from "react";
import Slider from "react-slick";
import './row.css'
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <p className="p"> Trending Now </p>
        <Slider className="slider"{...settings}>
          <div>
         <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" ><img src= { require ('./icons/https_specials-8.png').default}/></a>
                     
           </div>
          <div>
            <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"> <img src= { require ('./icons/https_specials-7.png').default}/></a>
          </div>
          <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4">  <img src= { require ('./icons/https_specials-6.png').default}/></a>
          </div>
          <div>
          <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-5.png').default}/></a>
                     
           </div>
           <div>
          <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-4.png').default}/></a>
                     
           </div>
           <div>
          <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-3.png').default}/></a>
                     
           </div>
          <div>
          <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-2.png').default}/></a>
                     
           </div>
           <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-1.png').default}/></a>
                     
           </div>
           <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-7.png').default}/></a>
                     
           </div>
           <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-6.png').default}/></a>
                     
           </div>
           <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"> <img src= { require ('./icons/https_specials-8.png').default}/></a>
                     
           </div>
           <div>
          <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-2.png').default}/></a>
                     
           </div>
           <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-1.png').default}/></a>
                     
           </div>
           <div>
           <a href="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"><img src= { require ('./icons/https_specials-7.png').default}/></a>
                     
           </div>
        </Slider>
      </div>
      
    );
  }
}










