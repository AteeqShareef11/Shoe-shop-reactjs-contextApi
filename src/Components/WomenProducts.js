import React from 'react'
import { useContext,useState } from 'react'
import { DataContext } from './DataProvider'
import { Link } from 'react-router-dom'

const WomenProducts = () => {
 const value = useContext(DataContext)
 const [womenproducts]=value.womenproducts
 const [cart,setCart]=value.cart;
 const [index, setIndex] = useState(0);
 const addCartW = value.addCartW

 const removeitem = id=>{
    if(window.confirm("Do You Want To Remove This Item?")){
     cart.forEach((item,index)=>{
       if(item._id === id){
         cart.splice(index,1)
       }
     })
     setCart([...cart])
    }
  
  }
  return (
    <>
    <div className='products'>
       {
        womenproducts.map(product=>(
               <div className='card' key={product._id}>
                   <Link to ={`/womendetailproduct/${product._id}`}>
                       <img src={product.images[index]} alt='' className='images'/>
                   </Link>
                   <div className='box'>
                       <h2>{product.title}</h2>
                       <p>{product.description}</p>
                       <h3>${product.price}</h3>
                       {
                           cart.find((item)=> item._id === product._id) ?
                           (
                               <>
                               <button onClick={()=> removeitem(product._id)} className="remove-cart" >Remove From Cart</button>

                               </>
                           ) : (
                               <>
                               <button onClick={()=> addCartW(product._id)} >Add To Cart</button>

                               </>
                           )
                       
                       
                       }
                       
                   </div>
               </div>
           ))
       }
    </div>
    </>
  )
}

export default WomenProducts