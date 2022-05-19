import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from "../Assets/cart.svg"
import Xmark from "../Assets/xmark-solid.svg"
import MenuIcon from "../Assets/bars-solid.svg"
import { useContext,useState } from 'react'
import { DataContext } from './DataProvider'




const Header = () => {
    const [menu, setMenu] = useState(false)
    const value =useContext(DataContext)
    const [cart]=value.cart
    const toggelMenue=()=>{
        setMenu(!menu)
    }
    const styleMenu = {
        left: menu? 0 :"-100%"
    }
    
  return (
    <header>
        <div className='logo'>
            <h1><Link to="/">Heals</Link></h1>
        </div>
        <div className='menu' onClick={toggelMenue}>
            <img src={MenuIcon} alt='' width="30"/>
        </div>
        <ul className='list-item' style={styleMenu}>
            <li>
            <Link to="/">Home</Link>
            </li>

             <li>
                 <Link to="">About</Link>
             </li>
             
             <li>
             <div class="dropdown">
               <button class="dropbtn">Products
                      <i class="fa fa-caret-down"></i>
               </button>
                <div class="dropdown-content">
                    <li>
                    <Link to="/products">Men Products</Link>
                    </li>
                    <li>
                    <Link to="/womenproducts">Women Products</Link>
                    </li>
                    <li>
                    <Link to="/kidproducts" >kids Products</Link>
                    </li>
                </div>
           </div> 
             </li>

             <li>
             <Link to="/login">login/Register</Link>
              </li>

              
              <li>
             <img src={Xmark} alt="" width="30" className='menu' onClick={toggelMenue}/>
              </li>
              
                
               
            
        </ul>
        <div className='cart-icon'>
        <span>{cart?.length}</span>
        <Link to="/cart">
        <img src={CartIcon} alt='' width="30"/>
        </Link>
            
        </div>
    </header>
  )
}

export default Header