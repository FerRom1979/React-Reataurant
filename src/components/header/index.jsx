import React from "react"
import { Link } from "react-router-dom"
import { useMenu } from "../../context/menuContext"

const Header = () => {
  const { myMenu, authUser } = useMenu()

  return (
    <div className=' m-0 mx-2'>
      <nav className='navbar navbar-expand-md navbar-light bg-transparent '>
        <div className='container-fluid p-0 '>
          <h1
            className='mb-0 w-max-content'
            style={{
              fontFamily: "Shadows Into Light",
              color: "#946c3c",
              minWidth: "max-content",
            }}
          >
            React Restaurant
          </h1>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse d-md-flex justify-content-end'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto  mb-lg-0 w-100 justify-content-end align-items-center'>
              <li className='nav-item mx-md-2'>
                <Link
                  to={"/"}
                  style={{ color: "#946c3c", textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item mx-md-2'>
                <Link
                  to={"/menu-image"}
                  style={{ color: "#946c3c", textDecoration: "none" }}
                >
                  Menu
                </Link>
              </li>
              <li className='nav-item mx-md-2'>
                <a
                  href='//'
                  className='btn btn-link p-0'
                  style={{ color: "#946c3c", textDecoration: "none" }}
                  onClick={() => authUser(null)}
                >
                  Logout
                </a>
              </li>
              {myMenu.length > 0 && (
                <li className='nav-item mx-md-2'>
                  <Link
                    to={"/menu"}
                    style={{ color: "#946c3c", textDecoration: "none" }}
                  >
                    My Menu
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
