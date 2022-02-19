import React from "react"

const Card = ({ menuMock }) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='row mx-5 my-4 w-75'>
        <div className='col'>
          <div className='card'>
            <div>
              <img
                src={menuMock[0].image}
                className='card-img-top '
                alt='...'
                style={{ maxHeight: "400px" }}
              />
            </div>

            <div className='card-body'>
              <h6>{menuMock[0].title}</h6>
              <p className='card-text'>
                <span
                  dangerouslySetInnerHTML={{ __html: menuMock[0].summary }}
                />
              </p>
              <p>Health Score: {menuMock[0].healthScore}</p>
              <p>
                Ready in minutes:
                {menuMock[0].readyInMinutes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
