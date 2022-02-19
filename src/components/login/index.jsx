import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu, { useAuthUser } from "../../context/menuContext"
import Message from "../message"
import swal from "sweetalert"

const Login = () => {
  const authUser = useAuthUser()
  const [userData, setUserData] = useState({})
  const { error, auth, loading } = useContext(Menu)
  const [validateField, setValidateField] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValidateField(false)
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userData.email || !userData.password) {
      return setValidateField(true)
    }
    authUser(userData)
    e.target.reset()
  }
  if (error) {
    swal({
      text: "Error! Invalid email or password",
      icon: "error",
      timer: 4000,
    })
  }

  useEffect(() => {
    if (auth) navigate("/")
  }, [auth, navigate])

  return (
    <div className='container'>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center text-center h-100'>
          <div className='spinner-border text-danger ' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Message validateField={validateField} />
          <form
            onSubmit={handleSubmit}
            className='d-lg-flex justify-content-center'
          >
            <div className='mb-3 m-lg-2'>
              <label
                htmlFor='exampleInputEmail1'
                className='form-label'
                style={{ color: "#946c3c" }}
              >
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                name='email'
                onChange={handleChange}
              />
              <div
                id='emailHelp'
                className='form-text'
                style={{ color: "#946c3c" }}
              >
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className='mb-3 m-lg-2'>
              <label
                htmlFor='exampleInputPassword1'
                className='form-label'
                style={{ color: "#946c3c" }}
              >
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                onChange={handleChange}
                name='password'
              />
            </div>
            <div className=' d-lg-flex align-items-center'>
              <button
                type='submit'
                className='btn border-none text-white w-100 '
                disabled={loading && true}
                style={{
                  maxHeight: "38px",
                  marginTop: "6px",
                  background: "#8fa0a8",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default Login
