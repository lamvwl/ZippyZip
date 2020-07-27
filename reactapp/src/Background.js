import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import './Background.css';

import image1 from './assets/Boston.jpg'
import image2 from './assets/San_Francisco.jpg'
// import image3 from './assets/Vanuatu.jpg'
import image3 from './assets/estate.jpg'
import image4 from './assets/NewYork.jpg'

class Background extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3, image4  ]} />
      </div>
    )
  }
}

 
export default Background;