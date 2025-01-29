import Image from 'next/image'
import React from 'react'

const Ecommerce = () => {
    const products = [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "description": "Experience immersive sound with these comfortable and stylish wireless headphones. Perfect for workouts, travel, or just relaxing at home.",
            "price": 99.99,
            "category": "Electronics",
            "images": [
                "https://iremaxnepal.com.np/wp-content/uploads/2024/03/0004_RB-850HB-16.JPG-jpg.webp", // First image
                "https://example.com/images/headphones2.jpg",
                "https://example.com/images/headphones3.jpg"
            ],
            "rating": 4.5,
            "reviews": [], 
            "availability": true,
            "brand": "SoundWave",
            "color": [], 
            "size": "One Size",
            "material": "Plastic and Foam",
            "weight": "250g",
            "dimensions": "15cm x 10cm x 5cm",
            "features": [] 
        },
        {
            "id": 2,
            "name": "Running Shoes",
            "description": "Lightweight and breathable running shoes designed for optimal performance and comfort. Perfect for hitting the track or the trails.",
            "price": 79.95,
            "category": "Sportswear",
            "images": [
                "https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg", // First image
                "https://example.com/images/runningshoes2.jpg"
            ],
            "rating": 4.2,
            "reviews": [],
            "availability": true,
            "brand": "SpeedStride",
            "color": [],
            "size": ["US 7", "US 8", "US 9", "US 10"],
            "material": "Mesh and Rubber",
            "weight": "300g",
            "dimensions": "25cm x 20cm x 10cm",
            "features": []
        },
        {
            "id": 3,
            "name": "Laptop Backpack",
            "description": "A spacious and durable backpack perfect for carrying your laptop and other essentials. Ideal for students, commuters, and travelers.",
            "price": 49.99,
            "category": "Bags",
            "images": [
                "https://img.drz.lazcdn.com/static/np/p/f794298104cfe4adc7eecbb3b08c42da.jpg_720x720q80.jpg" 
            ],
            "rating": 4.0,
            "reviews": [],
            "availability": true,
            "brand": "CarryAll",
            "color": [],
            "size": "Large",
            "material": "Nylon",
            "weight": "500g",
            "dimensions": "40cm x 30cm x 15cm",
            "features": []
        },
        {
            "id": 4,
            "name": "Smartwatch",
            "description": "Stay connected and track your fitness goals with this feature-packed smartwatch. Monitor your heart rate, steps, and sleep, and receive notifications on your wrist.",
            "price": 199.99,
            "category": "Electronics",
            "images": [
                "https://img.drz.lazcdn.com/static/np/p/63e1c77dc301a1e0cebc6ec8c7b451c6.png_720x720q80.png_.webp" // First image
            ],
            "rating": 4.7,
            "reviews": [],
            "availability": true,
            "brand": "TechLife",
            "color": [],
            "size": "One Size",
            "material": "Aluminum and Silicone",
            "weight": "50g",
            "dimensions": "5cm x 4cm x 1cm",
            "features": []
        },
        {
            "id": 5,
            "name": "Hiking Boots",
            "description": "Durable and waterproof hiking boots designed for rugged terrain. Provide excellent ankle support and traction for your outdoor adventures.",
            "price": 129.95,
            "category": "Sportswear",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0y81rwVYvJm4uarBMNmmLdOWFReBpMxgmg&s" // First image
            ],
            "rating": 4.3,
            "reviews": [],
            "availability": true,
            "brand": "Trailblazer",
            "color": [],
            "size": ["US 7", "US 8", "US 9", "US 10", "US 11"],
            "material": "Leather and Rubber",
            "weight": "800g",
            "dimensions": "30cm x 25cm x 15cm",
            "features": []
        },
        {
            "id": 6,
            "name": "Canvas Tote Bag",
            "description": "A stylish and versatile canvas tote bag perfect for everyday use. Carry your groceries, books, or other essentials in this eco-friendly bag.",
            "price": 29.99,
            "category": "Bags",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlc1JbPa8exHPi7V7dgcUV21c6XlWazTuL3w&s" // First image
            ],
            "rating": 4.5,
            "reviews": [],
            "availability": true,
            "brand": "EcoStyle",
            "color": [],
            "size": "Medium",
            "material": "Canvas",
            "weight": "300g",
            "dimensions": "35cm x 30cm x 10cm",
            "features": []
        }
    ];

    return (
        <div className="flex flex-wrap">
            {products.map((items) => {
                return (
                    <div key={items.id} className='flex flex-col bg-gray-100 p-2 m-2 shadow-xl w-60'>
                        <p className='font-bold'>{items.name} </p>
                        <Image src={items.images[0]} width={200} height={200} alt={items.name} />
                        <p>Price: ${items.price}</p>
                        <p>Brand: {items.brand}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Ecommerce;