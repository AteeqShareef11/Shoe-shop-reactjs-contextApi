import { inputAdornmentClasses } from '@mui/material';
import React from 'react'
import { createContext, useState, useEffect } from 'react'


export const DataContext = createContext()

const DataProvider = (props) => {


    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Power - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-6006-_2_2400x.jpg?v=1643349152",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-6006-_1_2400x.jpg?v=1643349152",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-6006-_3_2400x.jpg?v=1643349152",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-6006-_5_2400x.jpg?v=1643349152"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 107,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "2",
            "title": "NorthStar - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5418-_2_2400x.jpg?v=1650434487",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5418-_1_2400x.jpg?v=1650434487", 
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5418-_3_2400x.jpg?v=1650434487", 
               "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5418-_5_2400x.jpg?v=1650434487"                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "3",
            "title": "Bata 3D Energy - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-9002-_2_2400x.jpg?v=1643349308",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-9002-_1_2400x.jpg?v=1643349308",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-9002-_3_2400x.jpg?v=1643349308",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/820-9002-_5_2400x.jpg?v=1643349308",
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "4",
            "title": "Skechers - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9410-_2_2400x.jpg?v=1650434728",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9410-_1_2400x.jpg?v=1650434727",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9410-_3_2400x.jpg?v=1650434727",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9410-_5_2400x.jpg?v=1650434728"            
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "5",
            "title": "NorthStar - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-3420-_2_2400x.jpg?v=1650434333",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-3420-_1_2400x.jpg?v=1650434333",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-3420-_3_2400x.jpg?v=1650434333",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-3420-_5_2400x.jpg?v=1650434333"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "6",
            "title": "Power - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9411-_2_2400x.jpg?v=1650434758",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9411-_1_2400x.jpg?v=1650434758",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9411-_3_2400x.jpg?v=1650434758",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9411-_4_2400x.jpg?v=1650434758"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count":1,
            "category":"Men"
        }
        ,
        {
            "_id": "7",
            "title": "Bata 3D Energy - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5416-_2_2400x.jpg?v=1650434457",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5416-_1_2400x.jpg?v=1650434457",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5416-_3_2400x.jpg?v=1650434457",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-5416-_5_2400x.jpg?v=1650434457"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 107,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "8",
            "title": "Power - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6416-_2_2400x.jpg?v=1650434610",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6416-_1_2400x.jpg?v=1650434610",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6416-_3_2400x.jpg?v=1650434610",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6416-_5_2400x.jpg?v=1650434610"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 108,
            "count":1,
            "category":"Men"
        },
        {
            "_id": "9",
            "title": "Power - Men",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-6101-_2_2400x.jpg?v=1647947351",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-6101-_3_2400x.jpg?v=1647947352",
                   "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-6101-_4_2400x.jpg?v=1647947351"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 109,
            "count":1,
            "category":"Men"
        },

        {
            "_id": "10",
            "title": "Justice League - Kids",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/151-9024-_2_2400x.jpg?v=1637318030",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/151-9024-_1_2400x.jpg?v=1637318029",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/151-9024-_3_2400x.jpg?v=1637318030",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/151-9024-_4_2400x.jpg?v=1637318030"

                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count":1,
            "category":"kids"
        }
        ,
        {
            "_id": "11",
            "title": "Justice League - Kids",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6039-_2_2400x.jpg?v=1638528987",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6039-_1_2400x.jpg?v=1638528987",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6039-_3_2400x.jpg?v=1638528987",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6039-_4_2400x.jpg?v=1638528987"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 107,
            "count":1,
            "category":"kids"
        },
        {
            "_id": "12",
            "title": "Bubble Gummers - Boys",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6057-_2_2400x.jpg?v=1637317727",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6057-_1_2400x.jpg?v=1637317727",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6057-_3_2400x.jpg?v=1637317727",
                    "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6057-_4_2400x.jpg?v=1637317727"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 108,
            "count":1,
            "category":"kids"
        },
        {
            "_id": "13",
            "title": "Justice League - Kids",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-9032-_2_2400x.jpg?v=1638529022",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-9032-_1_2400x.jpg?v=1638529022",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-9032-_4_2400x.jpg?v=1638529022"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 109,
            "count":1,
            "category":"kids"
        }




    ]);
    
    const [womenproducts, setWomenProducts] = useState([
        {
            "_id": "10",
            "title": "Marie Claire - Women",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-8242-_2_2400x.jpg?v=1650269916",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-8242-_1_2400x.jpg?v=1650269916",
                   "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-8242-_3_2400x.jpg?v=1650269916",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-8242-_4_2400x.jpg?v=1650269916"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "11",
            "title": "Claire Claire - Women",
            "images": [
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-8232-_2_2400x.jpg?v=1650276307",
                "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-8232-_1_2400x.jpg?v=1650276307",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-8232-_3_2400x.jpg?v=1650276307",
            
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count":1
        },
        {
            "_id": "12",
            "title": "Bpnzi Claire - Women",
            "images": [
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-3002-_2_2400x.jpg?v=1650269694",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-3002-_1_2400x.jpg?v=1650269694",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-3002-_3_2400x.jpg?v=1650269694",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/770-3002-_4_2400x.jpg?v=1650269694"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count":1
        },
        {
            "_id": "13",
            "title": "Gentizia Claire - Women",
            "images": [
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-7254-_2_2400x.jpg?v=1650269546",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-7254-_1_2400x.jpg?v=1650269546",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-7254-_3_2400x.jpg?v=1650269548",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-7254-_4_2400x.jpg?v=1650269546"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count":1
        },
        {
            "_id": "14",
            "title": "Marie Claire - Women",
            "images": [
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/501-9021-_2_2400x.jpg?v=1640066199",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/501-9021-_1_2400x.jpg?v=1640066199",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/501-9021-_3_2400x.jpg?v=1640066199",
                   "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/501-9021-_3_2400x.jpg?v=1640066199"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count":1
        },
        {
            "_id": "15",
            "title": "Farie  - Women",
            "images": [
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-6235-_2_2400x.jpg?v=1650269405",
                 "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-6235-_1_2400x.jpg?v=1650269405",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-6235-_3_2400x.jpg?v=1650269405",
                  "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/670-6235-_4_2400x.jpg?v=1650269405"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count":1
        }
       
    ]);

    const [cart,setCart]=useState([])

    const addCart = (id) =>{
        const check = cart.every(item=>{
            return item._id !== id
        })
        if(check){
            const data= products.filter(product=>{
                return product._id === id;
            })
           setCart([...cart,...data])
        } else{
            alert("The Product has been added into the cart")
        }

    }
    const addCartW = (id) =>{
        const check = cart.every(item=>{
            return item._id !== id
        })
        if(check){
            const data= womenproducts.filter(product=>{
                return product._id === id;
            })
           setCart([...cart,...data])
        } else{
            alert("The Product has been added into the cart")
        }

    }
    const searchProductsNot =(arrNot)=>{
       setProducts(products);
    }
    const searchProducts=(filterArr)=>{
     console.log('fileters array in dataprovider.js==>',filterArr)
     setProducts(filterArr);

     
    }

    useEffect(() => {
        const dataCart=JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
       }, []);
 
      useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
      }, [cart]);


 const value={
     products:[products,setProducts],
     womenproducts:[womenproducts,setWomenProducts],
     cart:[cart,setCart],
     addCart:addCart,
     addCartW:addCartW,
     searchProducts:searchProducts,
     searchProductsNot:searchProductsNot

    }
  return (
    <>
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
    </>
  )
}

export default DataProvider