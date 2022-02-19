/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Menu from "../../context/menuContext"
import Card from "../card"

const MenuDetails = () => {
  const { menu, veganMenu, newMenus, getMyMenu } = useContext(Menu)
  const navigate = useNavigate()

  const [menuMock, setMenuMock] = useState()

  const { id } = useParams()

  const handleMenu = async () => {
    const menusArr = (await menu.concat(veganMenu)) || []
    if (newMenus) {
      const menus = (await newMenus.concat(menusArr)) || []
      const newMenu = await menus.filter((menu) => menu.id === parseInt(id))
      await setMenuMock(newMenu)
    } else {
      const newMenu = await menusArr.filter((menu) => menu.id === parseInt(id))
      await setMenuMock(newMenu)
    }
  }

  useEffect(() => {
    handleMenu()
  }, [])

  return (
    <div className=''>
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h3 style={{ color: "rgb(148, 108, 60)" }}>MAIN DISH</h3>

        <div
          className='border-bottom border-1 border-warning w-100'
          style={{ background: "rgb(148, 108, 60)" }}
        ></div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <button
            className='btn bg-transparent '
            style={{ color: "rgb(148, 108, 60)" }}
            onClick={() => navigate("/menu-list")}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M0 12l9-8v6h15v4h-15v6z' fill='rgb(148, 108, 60)' />
            </svg>
            Back
          </button>
        </div>
        <div>
          <button
            type='submit'
            className='btn border-none text-white w-100 rounded-pill'
            style={{
              maxHeight: "38px",
              marginTop: "6px",
              background: "#8fa0a8",
            }}
            onClick={() => getMyMenu(menuMock[0])}
          >
            ADD TO MENU
          </button>
        </div>
      </div>

      <div>{menuMock && <Card menuMock={menuMock} />}</div>
    </div>
  )
}

export default MenuDetails
