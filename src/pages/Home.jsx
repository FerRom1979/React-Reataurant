import React from "react"
import Carousel from "../components/carousel"
import Reserves from "../components/reserves"

const Home = () => {
  return (
    <div className='container-fluid'>
      <div
        className='d-flex justify-content-center align-items-center w-100  h-100'
        style={{}}
      >
        <Carousel />
      </div>
      <div>
        <Reserves />
      </div>
    </div>
  )
}

export default Home
