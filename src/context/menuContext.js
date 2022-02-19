import axios from "axios"
import React, { useEffect, useState, useContext } from "react"
import swal from "sweetalert"

const Menu = React.createContext()

export const useMenu = () => {
  const context = useContext(Menu)
  if (!context) throw new Error("There is not auth provider")
  return context
}

export function MenuProvider({ children }) {
  const [veganMenu, setVeganMenu] = useState([])
  const [menu, setMenu] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = useState()
  const [newMenus, setNewMenus] = useState()
  const [myMenu, setMyMenu] = useState([])

  async function authUser(user) {
    if (!user) {
      localStorage.removeItem("token")
      return setAuth(null)
    }
    try {
      setLoading(true)

      const res = await axios.post("http://challenge-react.alkemy.org/", {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("token", res.data.token)
      setAuth(res.data.token)
      setLoading(false)
      setError()
    } catch (err) {
      setError(err)
      setLoading(false)
      setTimeout(() => {
        setError()
      }, 3000)
    }
  }

  async function getData() {
    try {
      setLoading(true)
      const veganRes = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=7797eee7326f4de786de8300e5d2863d&diet=vegan&number=10&includeNutrition=false&addRecipeInformation=true"
      )
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=7797eee7326f4de786de8300e5d2863d&diet=paleo&number=10&includeNutrition=false&addRecipeInformation=true"
      )
      setVeganMenu(veganRes.data.results)
      setMenu(res.data.results)
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  async function getFoodName(foodName) {
    try {
      setLoading(true)
      setError(false)
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=7797eee7326f4de786de8300e5d2863d&query=${foodName}&maxFat=25&number=10&includeNutrition=false&addRecipeInformation=true`
      )
      await setNewMenus(res.data.results)
      setLoading(false)
    } catch (err) {
      setError(err)
    }
    return { error }
  }

  async function getMyMenu(menu) {
    let menuVegan = 0
    myMenu.map((food) => {
      if (food.vegan) {
        menuVegan += 1
      }
      return menuVegan
    })
    if ((myMenu.length === 3) & (menuVegan !== 2)) {
      setMyMenu(myMenu.filter((food) => food.vegan !== true))
      return swal({
        text: "El menu debe contener dos menu vegan",
        icon: "error",
        timer: 4000,
      })
    }
    if (myMenu.length > 3) {
      return swal({
        text: "ya tienes cuatro ordenes en el menu si deseas cambiar debes eliminar alguna orden",
        icon: "info",
        timer: 4000,
      })
    }

    await setMyMenu([...myMenu, menu])
  }
  function deleteFoodOrder(foodOrder) {
    return setMyMenu(myMenu.filter((food) => food.id !== foodOrder.id))
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) setAuth(token)
    getData()
  }, [])

  return (
    <Menu.Provider
      value={{
        veganMenu,
        menu,
        error,
        loading,
        authUser,
        auth,
        getFoodName,
        newMenus,
        getMyMenu,
        myMenu,
        deleteFoodOrder,
      }}
    >
      {children}
    </Menu.Provider>
  )
}

export function useAuthUser() {
  return useContext(Menu).authUser
}
export function useGetFoodName() {
  return useContext(Menu).getFoodName
}
export function useGetMyMenu() {
  return useContext(Menu).getMyMenu
}
export function useDeleteFoodOrder() {
  return useContext(Menu).deleteFoodOrder
}

export default Menu
