'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Ecommerce = () => {
    const product = 
        [
            {
              "id": "1",
              "name": "Awesome T-Shirt",
              "description": "A comfortable and stylish t-shirt made of 100% cotton.",
              "price": 19.99,
              "currency": "USD",
              "category": "Apparel",
              "images": [
                "https://m.media-amazon.com/images/I/61U8HNja1FL._AC_UY1000_.jpg",
                
              ],
              "sizes": ["S", "M", "L", "XL"],
              "colors": ["Red", "Blue", "Green", "Black"],
              "inStock": true,
              "sku": "TSHIRT-001"
            },


            {
              "id": "2",
              "name": "Cozy Hoodie",
              "description": "A warm and cozy hoodie perfect for chilly evenings.",
              "price": 49.99,
              "currency": "USD",
              "category": "Apparel",
              "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST52Zp7WGDBBMjRJwf_kR0Z54zogfz6uz5UQ&s"
              ],
              "sizes": ["S", "M", "L", "XL", "XXL"],
              "colors": ["Gray", "Navy", "Burgundy"],
              "inStock": false,
              "sku": "HOODIE-001"
            },


              {
              "id": "3",
              "name": "Wireless Headphones",
              "description": "High-quality wireless headphones with noise cancellation.",
              "price": 99.99,
              "currency": "USD",
              "category": "Electronics",
              "images": [
               "https://m.media-amazon.com/images/I/71q39PVplrL.jpg"
              ],
              "colors": ["Black", "White"],
              "inStock": true,
              "sku": "HEADPHONES-001",
                "specifications": {
                    "batteryLife": "20 hours",
                    "bluetoothVersion": "5.0",
                    "weight": "250g"
                }
            },


              {
              "id": "4",
              "name": "Ceramic Mug",
              "description": "A stylish ceramic mug for your favorite beverages.",
              "price": 12.50,
              "currency": "USD",
              "category": "Kitchen",
              "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_VC-QP8I0gml8Y27L3uuNpUyzL7QZ5fVdA&s"
              ],
              "colors": ["White", "Blue", "Green", "Yellow"],
              "inStock": true,
              "sku": "MUG-001"
            },
            {
              "id": "5",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            },
            {
              "id": "6",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            },
            {
              "id": "7",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            },
            {
              "id": "8",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            } ,
            {
              "id": "9",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            },
             {
              "id": "10",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            },
            {
              "id": "11",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            },

            {
              "id": "12",
              "name": "Denim Jacket",
              "description": "A classic denim jacket, perfect for any occasion.",
              "price": 79.99,
              "currency": "USD",
              "category": "Clothing",
              "images": [
                "https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
              ],
              
              "colors": ["Blue", "Black", "Grey"],
              "sizes": ["S", "M", "L", "XL"],
              "inStock": true,
              "sku": "JKT-001"
            }

            
          ]
    
  return (
    <div className='flex flex-wrap gap-10 m-4 justify-center'>
        {product.map((item)=>{
            return(
                <div key={item.id} className=" flex-col bg-gray-100 shadow-xl rounded-lg p-4 w-60">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <Image src={item.images[0]} alt="Product Image" width={150} height={150} 
            className="rounded-lg justify-center"    />
            <p className="mt-2 font-bold">Price: ${item.price.toFixed(2)}</p>
            <p className="mt-1">Currency: {item.currency}</p>
            <p className="mt-1">Category: {item.category}</p>
            <p className="mt-1">Colors: {item.colors.join(', ')}</p>
            <div className='flex gap-0 justify-center'>
            <div className="m-3">
              <Button 
              className="bg-orange-600 hover:bg-orange-500 rounded-full font-bold">Add to cart</Button>
            </div>
            <div className="m-3 pr-3">
              <Button 
              className="bg-orange-600 hover:bg-orange-500 rounded-full pl-10 font-bold  ">Buy</Button>
            </div>
            </div>
          </div>
            )                    
        })}
    </div>
  )
}

export default Ecommerce