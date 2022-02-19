import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import HeroImageMenu from "../../pages/menu"
import Header from "../header"
import Login from "../login"
import MyMenu from "../menu"
import MenuDetails from "../menu-details"
import MenuList from "../menu-list"
import { ProtectedRoutes } from "../protecterRoute"

const ManagementRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path='menu-image'
            element={
              <ProtectedRoutes>
                <HeroImageMenu />
              </ProtectedRoutes>
            }
          />
          <Route
            path='menu-list/:id'
            element={
              <ProtectedRoutes>
                <MenuDetails />
              </ProtectedRoutes>
            }
          />
          <Route
            path='menu-list'
            element={
              <ProtectedRoutes>
                <MenuList />
              </ProtectedRoutes>
            }
          />
          <Route
            path='menu'
            element={
              <ProtectedRoutes>
                <MyMenu />
              </ProtectedRoutes>
            }
          />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ManagementRoutes
