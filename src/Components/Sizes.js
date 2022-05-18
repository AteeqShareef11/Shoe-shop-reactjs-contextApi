import React from 'react'

const Sizes = ({sizes}) => {
  return (
    <div className='sizes'>
        {
            sizes.map((size,index)=>(
                <button key={index}>{size}</button>
            ))
        }
    </div>
  )
}

export default Sizes