import React from 'react'

const ProductCard = () => {

  //  async function fetchProducts(){
  //   try {
  //     const data = await fetch('https://fakestoreapi.com/products')
  //     const products = await data.json()
  //     console.log(products);

  //     setProducts(products)
  //     setLoading(false)

  //   } catch (error) {
  //     console.log("Error fetching products:", error);
  //     console.log("==========An error occurred while fetching products.=============");

  //     setLoading(false)
      
  //   }
  // }

//   useEffect(() => {
//     fetchProducts();
//   }, []);

  return (
    <div className='bg-red-500'>
      <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden font-sans my-5">
      <img
        src=""
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Sample Product</h2>
        <p className="text-green-600 font-medium mb-2">$19.99</p>
        <p className="text-gray-600 text-sm mb-4">
          This is a sample product description. It provides details about the product features and benefits.
        </p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  )
}

export default ProductCard




