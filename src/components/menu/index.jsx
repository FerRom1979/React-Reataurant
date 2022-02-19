import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMenu } from "../../context/menuContext"

const MyMenu = () => {
  const [menuData, setMenuData] = useState()
  const navigate = useNavigate()

  const { myMenu, deleteFoodOrder } = useMenu()

  useEffect(() => {
    let data = {
      totalPrice: 0,
      ready: 0,
      healthScore: 0,
    }

    myMenu.map((food) => {
      data.totalPrice += food.pricePerServing
      data.ready += food.readyInMinutes
      data.healthScore += food.healthScore
      return data
    })
    setMenuData(data)
  }, [myMenu])

  const getFood = () => {
    let menuVegan = 0
    myMenu.map((food) => {
      if (food.vegan) {
        menuVegan += 1
      }
      return menuVegan
    })
  }
  if (myMenu.length <= 0) navigate("/menu-list")

  return (
    <div className='container'>
      <button onClick={() => getFood()}>test</button>
      {menuData && (
        <div className='d-flex flex-column justify-content-center  align-items-center bg-info text-white p-2 mb-2 rounded-1 flex-md-row justify-content-md-around align-items-md-baseline'>
          <h2 className='m-0'>Ticket</h2>
          <p className='m-0'>Total A pagar: {menuData.totalPrice}</p>
          <p className='m-0'>Listo en: {menuData.ready / 4} Minutos</p>
          <p className='m-0'>
            El Health Score es de: {menuData.healthScore / 4}
          </p>
        </div>
      )}

      {myMenu &&
        myMenu.map((menu, index) => {
          return (
            <div className='card text-center mb-4' key={index}>
              <div className='card-header'>Your Menu</div>
              <div className='card-body'>
                <h5 className='card-title'>{menu.title}</h5>
                <p className='card-text'>Price: {menu.pricePerServing}</p>
                <p className='card-text'>
                  Servido in {menu.readyInMinutes} minuns
                </p>
                <button
                  onClick={() => deleteFoodOrder(menu)}
                  className='btn btn-primary'
                >
                  Delete Order
                </button>
              </div>
              <div className='card-footer text-muted'>
                <span>{menu.vegan ? "Is Vegan" : "not is Vegan"}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default MyMenu
