import React from "react"

const Message = ({ validateField }) => {
  if (validateField) {
    return (
      <div className='border border-danger border-2 p-2 text-center text-danger bg-opacity-10 my-4 rounded-3'>
        All fields are required
      </div>
    )
  }

  return null
}

export default Message
