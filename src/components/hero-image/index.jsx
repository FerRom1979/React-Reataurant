import React from "react"

const HeroImage = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `${img}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "attachment",
      }}
      className='hero'
    ></div>
  )
}

export default HeroImage
