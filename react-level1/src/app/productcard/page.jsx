import Image from "next/image";

const productData = [
  {
    id: 1,
    name: "Traditional Dhaka Shawl",
    description: "Handwoven Dhaka shawl, perfect for traditional events.",
    price: 2500,
    category: "Traditional Clothing",
    stock: 20,
    image:
      "https://amazinghandsnepal.com/wp-content/uploads/2023/06/Nepali-Dhaka-Tribal-Shawl-1-1.jpg",
    rating: 4.7,
    reviews: 10,
  },
  {
    id: 2,
    name: "Modern Kurta Set",
    description: "Stylish kurta set with modern designs for all occasions.",
    price: 3500,
    category: "Modern Clothing",
    stock: 15,
    image:
      "https://www.galstyles.com/wp-content/uploads/2017/05/Latest-Men-Modern-Kurta-Styles-Designs-Collection-2018-19-by-Chinyere-11.jpeg",
    rating: 4.5,
    reviews: 8,
  },
  {
    id: 3,
    name: "Dhaka Topi",
    description: "Iconic Nepali Dhaka topi for formal and cultural events.",
    price: 500,
    category: "Accessories",
    stock: 50,
    image:
      "https://crafthousenepal.com/wp-content/uploads/2019/02/palpali-dhaka-topi-basic.jpg",
    rating: 4.8,
    reviews: 12,
  },
  {
    id: 4,
    name: "Modern Trousers",
    description: "Comfortable and stylish trousers for daily wear.",
    price: 2000,
    category: "Modern Clothing",
    stock: 30,
    image: "https://www.gap.com/webcontent/0053/855/052/cn53855052.jpg",
    rating: 4.4,
    reviews: 6,
  },
];

const ProductLists = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Product List
      </h2>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-10 xl:gap-x-8">
        {productData.map((product) => (
          <div
            key={product.id}
            className="group relative w-full sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)] xl:flex-[0_0_calc(25%-24px)]"
          >
            <Image
              alt={product.name}
              src={product.image}
              width={500}
              height={500}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                Rs. {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
