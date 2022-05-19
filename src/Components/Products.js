import React, { Children } from 'react'
import { useContext,useState } from 'react'
import { DataContext } from './DataProvider'
import { Link } from 'react-router-dom'
import { Input } from '@mui/material'



const Products = () => {

 const value = useContext(DataContext)
 const [products]=value.products
 const [cart,setCart]=value.cart
 const[price,setPrice]=useState("")
 const [index, setIndex] = useState(0);
 const addCart = value.addCart
 const searchProducts = value.searchProducts
 const searchProductsNot=value.searchProductsNot
 const [input,setInput]= useState("")
 const [searchres,setSearchres]=useState([])

 console.log("title text",products.title)

 
 

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
    const data = e.target.value;
    setInput(data)
  //  console.log("input text",input)
  //  console.log("title text",products.title)
    if(input !== ""){
      const filterData =  products.filter((product) => {
        return  (product.title.toLowerCase()).includes(input.toLowerCase());
     });
     setSearchres(filterData)
    //  console.log("search result if",searchres)  
        
    } else{
      setSearchres(products)
      // console.log("search result else",searchres)  
    }

    setSearchres(products)
    

 
  
    // console.log("input enter",input)
    // console.log('filterdata==',filterData)
    // const prod = products
  //  if(filterData.length === 0){
  //   searchProductsNot(prod)
  //   console.log("productsall",prod)
  //    console.log("leth.products=> 0")
  //  }else {
  //   searchProducts(filterData);
  //  }
  

  }
   const sortHandler =(s)=>{
   console.log("click me")
   const valueOFselect = s.target.value
  
   setPrice(valueOFselect)
   console.log("price",price)
   console.log("select value",valueOFselect)
   if(valueOFselect === "low to high" ){
      const sort = products.sort((a,b)=> (a.price > b.price ? 1 : -1))
      console.log("sort", sort)
 }
 
 else if(valueOFselect === "high to low"){
    const sort = products.sort((a,b)=> (a.price > b.price ? -1 : 1))
          console.log("sort", sort)
 }
 else if(valueOFselect === "alphabatic A-Z"){
  const sort = products.sort((a,b)=> (a.title > b.title ? 1 : -1))
        console.log("sort", sort)
}
else if(valueOFselect === "alphabattic Z-A"){
  const sort = products.sort((a,b)=> (a.title > b.title ? -1 : 1))
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
    


        products.map(product=>(
               <div className='card' key={product._id}>
                   <Link to ={`/detailproduct/${product._id}`}>
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
                               <button onClick={()=> addCart(product._id)} >Add To Cart</button>

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

export default Products