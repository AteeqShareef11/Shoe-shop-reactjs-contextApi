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
 const [filterFn,setFilterFn]=useState({fn: items=>{return items;}})
 const[price,setPrice]=useState("")



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


  const searchHandle = (e) =>{
    let inputValue = e.target.value;
    console.log("inputValue",inputValue)
    setFilterFn({
      fn: items=>{
        if(inputValue === "")
        return items
        else
        return items.filter(x=> x.title.toLowerCase().includes(inputValue))
      }
    })
  
  }

   const sortHandler =(s)=>{
   console.log("click me")
   const valueOFselect = s.target.value
  
   setPrice(valueOFselect)
   console.log("price",price)
   console.log("select value",valueOFselect)
   if(valueOFselect === "low to high" ){
      const sort = womenproducts.sort((a,b)=> (a.price > b.price ? 1 : -1))
      console.log("sort", sort)
 }
 
 else if(valueOFselect === "high to low"){
    const sort = womenproducts.sort((a,b)=> (a.price > b.price ? -1 : 1))
          console.log("sort", sort)
 }
 else if(valueOFselect === "alphabatic A-Z"){
  const sort = womenproducts.sort((a,b)=> (a.title > b.title ? 1 : -1))
        console.log("sort", sort)
}
else if(valueOFselect === "alphabattic Z-A"){
  const sort = womenproducts.sort((a,b)=> (a.title > b.title ? -1 : 1))
        console.log("sort", sort)
}

  }

  return (
    <>

<div className='search'>
    <div className='product-input'>
      <input type="text" placeholder="Search From Here" onChange={searchHandle}/>
    </div>
      <div>
           <label for="sortby">Sort By:</label>
            <select onChange={sortHandler}  name="sortby" id="sortby">
            <option value="sort from">Sort From</option>
              <option value="low to high">Low To High</option>
              <option value="high to low">High To Low</option>
              <option value="alphabatic A-Z">Alphatic A-Z</option>
              <option value="alphabattic Z-A">Alphatic Z-A</option>
            </select>
      </div>
    </div>
    <div className='products'>
       {
      filterFn.fn(womenproducts).map(product=>(
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