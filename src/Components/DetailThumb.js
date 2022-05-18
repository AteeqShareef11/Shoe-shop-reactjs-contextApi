import React from 'react'

const DetailThumb = ({images ,setIndex}) => {
  return (
    <div className='detailthumb'>
        {
           images.map((img,index)=>(
            <img src={img} alt="" key={index} onClick={()=> setIndex(index)}></img>
           ))
        }
    </div>
  )
}

export default DetailThumb