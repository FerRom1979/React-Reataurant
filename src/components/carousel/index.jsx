import React from "react"
import imgOne from "../../assets/img/img-home.jpg"
import imgTwo from "../../assets/img/food-two.jpg"
import imgThree from "../../assets/img/food-three.jpg"

const Carousel = () => {
  return (
    <div
      id='carouselExampleSlidesOnly'
      className='carousel slide w-100 h-50'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={imgOne} className='d-block w-100 rounded ' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={imgTwo} className='d-block w-100 rounded' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={imgThree} className='d-block w-100 rounded' alt='...' />
        </div>
      </div>
    </div>
  )
}

export default Carousel
