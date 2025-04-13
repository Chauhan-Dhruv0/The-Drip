// import React from 'react'
// import {Link} from 'react-router-dom'

// function ProductGrid({products}) {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
//         {products.map((product,index)=>(
//             <Link key={index} to={`/product/${product.id}`} className='block'>
//                 <div className='bg-white p-4 rounded-lg'>
//                     <div className='w-full h-96 mb-4'>
//                         <img 
//                             src={product.images[0].url} 
//                             alt={product.images[0].altText || product.name}
//                             className='w-full h-full object-cover rounded-lg'  />
//                     </div>
//                     <h3 className='text-sm mb-2'>{product.name}</h3>
//                     <p className='text-gray-500 font-medium text-sm tracking-tighter'>${product.price}</p>
//                 </div>
//             </Link>
//         ))}
//     </div>
//   )
// }

// export default ProductGrid


import React from 'react'
import { Link } from 'react-router-dom'

function ProductGrid({ products , loading,error}) {
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error : {error}</p>
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 lg:gap-8">
      {products.map((product,index) => (
        <Link
          key={index}
          to={`/product/${product._id}`}
          className="group block transition-transform hover:scale-[1.015]"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            {/* <div className="aspect-h-1 aspect-w-1 mb-5 overflow-hidden rounded-lg">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                loading="lazy"
              />
            </div> */}
            <div className="mb-5 overflow-hidden rounded-lg h-64 w-full bg-gray-100">
  <img
    src={product.images[0].url}
    alt={product.images[0].altText || product.name}
    className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
    loading="lazy"
  />
</div>

            
            <div className="space-y-1.5">
              <h3 className="text-base font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-lg font-semibold text-gray-800">
                ${product.price}
                {product.comparePrice && (
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ${product.comparePrice}
                  </span>
                )}
              </p>
            </div>
            
            {product.soldOut && (
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                  Sold Out
                </span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid