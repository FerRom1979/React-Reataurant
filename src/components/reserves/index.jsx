import React from "react"

const Reserves = () => {
  return (
    <div
      className='d-flex w-50 m-auto justify-content-center align-items-center p-2 d-grid flex-column flex-md-row fs-6'
      style={{ background: "#8fa0a8", position: "relative", bottom: "20px" }}
    >
      <div className='text-center p-1 p-sm-3 d-inline-block d-flex w-70 justify-content-center align-items-center wow fadeInUp animated fs-6'>
        <a href='#//' className='text-white border border-1 p-1 p-sm-3'>
          Make your reservation{" "}
        </a>
      </div>
      <div className='col-12 col-md-6 mt-md-3 text-center text-md-start text-sm-start mt-md-0 wow fadeInDown animated fs-6'>
        DAYS AND HOURS <br />
        RESTAURANT - Tuesday to Sunday from 11 a.m. to 00 a.m. <br />
        BAR - Tuesdays to Sundays from 6 p.m. to 2 a.m.
      </div>
    </div>
  )
}

export default Reserves
