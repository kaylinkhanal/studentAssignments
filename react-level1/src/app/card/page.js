import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
    const products = [
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack",
          "short_description": "Versatile backpack for everyday use.",
          "price": 109.95,
          "brand": "Fjallraven",
          "stock": 99,
          "image": "https://m.media-amazon.com/images/I/81zWnT1GY+L._AC_UY327_FMwebp_QL65_.jpg" 
        },
        {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "short_description": "Classic and comfortable t-shirts.",
          "price": 22.3,
          "brand": "Slim-fit",
          "stock": 175,
          "image": "https://m.media-amazon.com/images/I/51tXvROEuCS._AC_SX569_.jpg"
        },
        {
          "id": 3,
          "title": "Women's Casual Shoes",
          "short_description": "Stylish and comfortable shoes.",
          "price": 35.99,
          "brand": "Various",
          "stock": 120,
          "image": "https://m.media-amazon.com/images/I/81P3O0xZqBL._AC_SX575_.jpg"
        },
        {
          "id": 4,
          "title": "Towels",
          "short_description": "Soft and absorbent towels.",
          "price": 13.99,
          "brand": "Home Essentials",
          "stock": 250,
          "image": "https://m.media-amazon.com/images/I/91RxE++XfXL._AC_SX679_.jpg" 
        },
        {
          "id": 5,
          "title": "Mens Cotton Jacket",
          "short_description": "Comfortable and stylish jacket.",
          "price": 55.99,
          "brand": "Denim Co.",
          "stock": 78,
          "image": "https://m.media-amazon.com/images/I/919vT6tlCRL._AC_SX466_.jpg" 
        },
        {
          "id": 6,
          "title": "Mens Casual Slim Fit",
          "short_description": "Slim fit jeans for men.",
          "price": 25.99,
          "brand": "Denim Co.",
          "stock": 145,
          "image": "https://m.media-amazon.com/images/I/71kh27MQabL._SY741_.jpg" 
        },
        {
          "id": 7,
          "title": "WD 2TB Elements Portable External Hard Drive",
          "short_description": "Portable storage for your files.",
          "price": 53.99,
          "brand": "WD",
          "stock": 200,
          "image": "https://m.media-amazon.com/images/I/41KH-bTKcKL._AC_SX466_.jpg" 
        },
        {
          "id": 8,
          "title": "My Passport Ultra 2TB External Hard Drive",
          "short_description": "High-speed portable storage.",
          "price": 64.99,
          "brand": "WD",
          "stock": 180,
          "image": "https://m.media-amazon.com/images/I/A1LDRFOMlPL._AC_SX466_.jpg" 
        },
        {
          "id": 9,
          "title": "USB 2.0 Flash Drive",
          "short_description": "Small and convenient storage device.",
          "price": 11.99,
          "brand": "Generic",
          "stock": 500,
          "image": "https://m.media-amazon.com/images/I/61ERDR3tATL._SX679_.jpg" 
        },
        {
          "id": 10,
          "title": "Wireless Headphones",
          "short_description": "Enjoy your music wirelessly.",
          "price": 74.99,
          "brand": "Audio Tech",
          "stock": 125,
          "image": "https://m.media-amazon.com/images/I/41lArSiD5hL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
        },
        {
          "id": 11,
          "title": "iPhone 12 Pro Max",
          "short_description": "Latest flagship smartphone.",
          "price": 1099.00,
          "brand": "Apple",
          "stock": 50,
          "image": "https://m.media-amazon.com/images/I/71MHTD3uL4L.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
        },
        {
          "id": 12,
          "title": "Samsung Galaxy S21",
          "short_description": "Powerful Android smartphone.",
          "price": 799.00,
          "brand": "Samsung",
          "stock": 70,
          "image": "https://m.media-amazon.com/images/I/61-QMCHyUES._AC_SX679_.jpg" 
        },
        {
          "id": 13,
          "title": "Apple Watch Series 6",
          "short_description": "Smartwatch with advanced features.",
          "price": 399.00,
          "brand": "Apple",
          "stock": 85,
          "image": "https://m.media-amazon.com/images/I/71fxj9HPLPL._AC_SX522_.jpg" 
        },
        {
          "id": 14,
          "title": "Fitbit Charge 5",
          "short_description": "Fitness tracker with advanced health monitoring.",
          "price": 149.95,
          "brand": "Fitbit",
          "stock": 150,
          "image": "https://m.media-amazon.com/images/I/51CtR+quteL._AC_SY300_SX300_.jpg" 
        },
        {
          "id": 15,
          "title": "Amazon Echo Show 10",
          "short_description": "Smart display with Alexa.",
          "price": 249.99,
          "brand": "Amazon",
          "stock": 100,
          "image": "https://m.media-amazon.com/images/I/51mZTrzrBqL._AC_SX679_.jpg" 
        }
      ]

  return (
    <div className='bg-gray-100 flex justify-center '>
      <div className='w-fit h-full mx-40 py-10 flex-wrap bg-blue-50 flex justify-center gap-3'>
      {products.map((item) => {
        return (
         <div key={item.id} className='w-[300px] m-4 p-4 bg-blue-100 rounded-xl border-2 border-blue-400 border-solid shadow-2xl hover:translate-y-[-10px] transition-transform duration-300 ease-in-out'>
          <div className=' flex justify-center items-start h-[150px] w-full mb-4'>
            <Image src={item.image} height={100} width={100} alt='Product Image'></Image>
          </div>
          <p
              className='pt-6 p-2 font-bold text text-lg text-justify overflow-hidden whitespace-nowrap text-ellipsis'
            >
              {item.title}
            </p>
          <p className='font-thin text-sm text-gray-700 p-2'>Brand: {item.brand}</p>
          <div className='flex justify-between mb-4'>
          <p className='font-thin text-sm text-gray-700 p-2'>NPR. {item.price}</p>
          <p className='font-thin text-sm text-gray-700 p-2'>Instock {item.stock}</p>
          </div>
          <div className='flex  justify-evenly gap-4'>
            <Button className="w-full">Add to cart</Button>
            <Button className="w-full">Buy Now</Button>
          </div>
         </div>
        )
      })}
    </div>
    </div>
  )
}

export default ProductCard