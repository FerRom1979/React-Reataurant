import React from "react"
import { Link } from "react-router-dom"
import menuImg from "../../assets/img/menu-img.jpg"
import cocktails from "../../assets/img/cocktails.jpg"

const HeroImageMenu = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <div
        className='img-fluid w-100 text-center mb-5 mt-1'
        style={{ color: "#946c3c" }}
      >
        <h2>Our menu's</h2>
      </div>

      <div className='w-75'>
        <Link to={"/menu-list"}>
          <img src={menuImg} alt='menu' className='w-100' />
        </Link>
      </div>
      <div
        className='img-fluid w-100 text-center mb-2'
        style={{ color: "#946c3c" }}
      >
        <h2>menu's</h2>
      </div>
      <div className='w-75 my-4'>
        <Link to={"/"}>
          <img src={cocktails} alt='cocktails' className='w-100' />
        </Link>
      </div>
      <div
        className='img-fluid w-100 text-center mb-2'
        style={{ color: "#946c3c" }}
      >
        <h2>Cocktails</h2>
      </div>
    </div>
  )
}

export default HeroImageMenu
