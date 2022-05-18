import React from 'react'
import { useContext,useState,useRef } from 'react'
import { DataContext } from './DataProvider'
import { Link,useParams} from 'react-router-dom'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailThumb from './DetailThumb'


const DetailWomenProduts = () => {
    const {id} = useParams();
 const value = useContext(DataContext)
 const [womenproducts]=value.womenproducts
 const [index, setIndex] = useState(0);
 const imgDiv = useRef();
 const addCartW=value.addCartW

 
 const details= womenproducts.filter((product,index)=>{
     return product._id === id;
 })
 const handleMouseMove = e =>{
    const{left, top, width, height} = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    imgDiv.current.style.backgroundPosition= `${x}% ${y}% `
    
}

  return (
    <>
            <div className='products'>
    {
        details?.map(product=>(
            <div className='details' key={product._id}>
            <div className='img-container' key={product._id} onMouseMove={handleMouseMove}
                style={{backgroundImage: `url(${product.images[index]})`}} ref={imgDiv} onMouseLeave={()=>imgDiv.current.style.backgroundPosition= `center` }/>
                <div className='box-details'>
                    <h2 title={product.title}>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <Colors colors={product.colors}/>
                    <Sizes sizes={product.sizes}/>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <DetailThumb className="images" images={product.images} setIndex={setIndex}/>
                     <Link to="/cart">
                    <button onClick={()=> addCartW(product._id)} className='cartbutton'>Add To Cart</button>
                    </Link>
                </div>
            </div>
        ))
    }
 </div>
    </>
  )
}

export default DetailWomenProduts