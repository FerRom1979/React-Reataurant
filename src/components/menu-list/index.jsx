import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Menu from "../../context/menuContext"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const initialValues = {
  search: "",
}
const validationSchema = Yup.object({
  search: Yup.string()
    .min(3, "the search for must have three characters at hand ")
    .required("This field is required"),
})

const MenuList = () => {
  const { menu, veganMenu, newMenus, getFoodName } = useContext(Menu)

  const onSubmit = async (values) => {
    await getFoodName(values.search)
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <h2 className='text-center me-2' style={{ color: "#946c3c" }}>
          MenuList
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <>
                {formik.isSubmitting ? (
                  <h2>loading....</h2>
                ) : (
                  <Form>
                    <div className='d-flex'>
                      <Field
                        className='form-control me-2'
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                        name='search'
                      />

                      <button
                        className='btn'
                        type='submit'
                        style={{
                          color: "#946c3c",
                          border: "1px solid #946c3c",
                        }}
                      >
                        Search
                      </button>
                    </div>

                    {formik.errors.search && formik.touched.search ? (
                      <div
                        className='border border-danger border-2 p-2 text-center text-danger bg-opacity-10 my-4 rounded-3'
                        style={{ position: "relative" }}
                      >
                        {formik?.errors.search}
                      </div>
                    ) : null}

                    {newMenus?.length > 0 && (
                      <button
                        className='btn w-100'
                        style={{
                          color: "#946c3c",
                          border: "1px solid #946c3c",
                        }}
                        onClick={() => getFoodName(null)}
                      >
                        clear search
                      </button>
                    )}
                  </Form>
                )}
              </>
            )
          }}
        </Formik>
      </div>

      <div className='row mb-4 '>
        {newMenus?.length > 0 && (
          <div className='col-12 col-md-4 mt-4'>
            <h4 style={{ color: "#946c3c" }}>New Menu</h4>
            <ol className='list-group list-group-numbered '>
              {newMenus &&
                newMenus.map((item) => {
                  return (
                    <Link
                      to={`/menu-list/${item.id}`}
                      key={item.id}
                      style={{ textDecoration: "none" }}
                    >
                      <li className='list-group-item bg-transparent'>
                        {item.title}
                      </li>
                    </Link>
                  )
                })}
            </ol>
          </div>
        )}

        <div
          className={`col-12 ${
            newMenus?.length > 0 ? "col-md-4 " : "col-md-6"
          } mt-4 `}
        >
          <h4 style={{ color: "#946c3c" }}>Vegan</h4>
          <ol className='list-group list-group-numbered '>
            {veganMenu &&
              veganMenu.map((item) => {
                return (
                  <Link
                    to={`/menu-list/${item.id}`}
                    key={item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <li className='list-group-item bg-transparent'>
                      {item.title}
                    </li>
                  </Link>
                )
              })}
          </ol>
        </div>
        <div
          className={`col-12 ${
            newMenus?.length > 0 ? "col-md-4 " : "col-md-6"
          } mt-4 `}
        >
          <h4 style={{ color: "#946c3c" }}>Normal</h4>
          <ol className='list-group list-group-numbered'>
            {menu &&
              menu.map((item) => {
                return (
                  <Link
                    to={`/menu-list/${item.id}`}
                    key={item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <li className='list-group-item bg-transparent'>
                      {item.title}
                    </li>
                  </Link>
                )
              })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default MenuList
