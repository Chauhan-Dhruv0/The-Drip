import React, { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/Slice/productSlice";
import { addToCart } from "../../redux/Slice/cartSlice";

function ProductDetail({ productId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [selectedImage, setSelectedImage] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedImage(selectedProduct.images?.[0]?.url || "");
      setSelectedSize(selectedProduct.sizes?.[0] || null);
      setSelectedColor(selectedProduct.colors?.[0] || null);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart");
      return;
    }

    setButtonDisabled(true);

    const cartItem = {
      productId: selectedProduct._id,
      quantity,
      size: selectedSize,
      color: selectedColor,
      guestId,
      userId: user?._id,
    };

    dispatch(addToCart(cartItem))
      .then(() => {
        toast.success("Product added to cart", { duration: 1000 });
      })
      .catch(() => {
        toast.error("Failed to add product to cart");
      })
      .finally(() => {
        setButtonDisabled(false);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedProduct) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 p-6">
          {/* Image Gallery */}
          <div className="md:w-1/2 flex flex-col gap-2">
            <div className="h-90 w-90 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {selectedProduct.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.url)}
                  className={`shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden ${
                    selectedImage === image.url
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.altText}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 space-y-4">
            <div className="space-y-1">
              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                Best Seller
              </span>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h1>
              <p className="text-xl font-semibold text-gray-900">
                ${selectedProduct.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              {selectedProduct.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-900">COLOR</h3>
              <div className="flex gap-2">
                {selectedProduct.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      // selectedColor?.name === color.name
                      //   ? "border-gray-900"
                      //   : "border-gray-200"
                      selectedColor === color ? "border-gray-900" : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color.toLocaleLowerCase() ,filter:"brightness(0.5)"}}
                    
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-900">SIZE</h3>
              <div className="grid grid-cols-5 gap-2">
                {selectedProduct.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1 text-sm font-medium rounded-md transition-colors ${
                      selectedSize === size
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">QTY</span>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="py-2 px-3 text-gray-500 hover:text-gray-900"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="py-2 px-3 text-gray-500 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            {/* Product Details */}
            <div className="pt-2 border-t border-gray-200">
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="w-24 text-sm text-gray-600">Brand</dt>
                  <dd className="text-sm text-gray-900">
                    {selectedProduct.brand}
                  </dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-sm text-gray-600">Material</dt>
                  <dd className="text-sm text-gray-900">
                    {selectedProduct.material}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-10">
        <h2 className="text-2xl text-center font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid products={similarProducts} loading={loading} error={error}/>
      </div>
    </div>
  );
}

export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import ProductGrid from "./ProductGrid";
// import { toast } from "sonner";
// import { useCart } from "../Cart/CartContext";
// import products from "./products";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProductDetails,
//   fetchSimilarProducts,
// } from "../../redux/Slice/productSlice";

// function ProductDetail({ productId }) {
//   const { addToCart } = useCart();
//   const { id } = useParams();
//   const dispatch = useDispatch;
//   const { selectedProduct, loading, error, similarProducts } = useSelector(
//     (state) => state.products
//   );

//   const { user, guestId } = useSelector((state) => state.auth);
//   const [selectedImage, setSelectedImage] = useState(
//     selectedProduct.images[0].url
//   );
//   const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0]);
//   const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [isButtonDisabled, setButtonDisabled] = useState(false);

//   const productFetchId = productId || id;
//   useEffect(() => {
//     if (productFetchId) {
//       dispatch(fetchProductDetails(productFetchId));
//       dispatch(fetchSimilarProducts({ id: productFetchId }));
//     }
//   }, [dispatch, productFetchId]);

//   const handleAddToCart = () => {
//     if (!selectedSize || !selectedColor) {
//       toast.error("Please select a size and color before adding to cart");
//       return;
//     }

//     const productToAdd = {
//       productID: selectedProduct._id,
//       name: selectedProduct.name,
//       size: selectedSize,
//       color: selectedColor.name,
//       quantity: quantity,
//       price: selectedProduct.price,
//       image: selectedProduct.images[0].url,
//     };

//     setButtonDisabled(true);

//     addToCart(productToAdd);
//     toast.success("Product added to cart!");
//     dispatch(
//       addToCart({
//         productId: productFetchId,
//         quantity,
//         size: selectedSize,
//         color: selectedColor,
//         guestId,
//         userId: user?._id,
//       })
//     )
//       .then(() => {
//         toast.success("Product added to cart", {
//           duration: 100,
//         });
//       })
//       .finally(() => {
//         setButtonDisabled(false);
//       });
//     // setTimeout(() => setButtonDisabled(false), 500);
//   };
//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>Error : {error}</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-4">
//       {selectedProduct && (
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row gap-4 p-6">
//           {/* Image Gallery */}
//           <div className="md:w-1/2 flex flex-col gap-2">
//             <div className="h-90 w-90 bg-gray-100 rounded-xl overflow-hidden">
//               <img
//                 src={selectedImage}
//                 alt="Main Product"
//                 className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="flex gap-2 overflow-x-auto pb-1">
//               {selectedProduct.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(image.url)}
//                   className={`shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden ${selectedImage === image.url
//                     ? "border-black"
//                     : "border-gray-200"
//                     }`}
//                 >
//                   <img
//                     src={image.url}
//                     alt={image.altText}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="md:w-1/2 space-y-4">
//             <div className="space-y-1">
//               <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
//                 Best Seller
//               </span>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 {selectedProduct.name}
//               </h1>
//               <p className="text-xl font-semibold text-gray-900">
//                 ${selectedProduct.price.toFixed(2)}
//               </p>
//             </div>

//             <p className="text-gray-600 leading-relaxed text-sm">
//               {selectedProduct.description}
//             </p>

//             {/* Color Selection */}
//             <div className="space-y-2">
//               <h3 className="text-sm font-semibold text-gray-900">COLOR</h3>
//               <div className="flex gap-2">
//                 {selectedProduct.colors.map((color, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedColor(color)}
//                     className={`w-8 h-8 rounded-full border-2 ${selectedColor.name === color.name
//                       ? "border-gray-900"
//                       : "border-gray-200"
//                       }`}
//                     style={{ backgroundColor: color.hex }}
//                     title={color.name}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div className="space-y-2">
//               <h3 className="text-sm font-semibold text-gray-900">SIZE</h3>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedProduct.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`py-1 text-sm font-medium rounded-md transition-colors ${selectedSize === size
//                       ? "bg-gray-900 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4 pt-2">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-semibold text-gray-900">QTY</span>
//                 <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="py-2 px-3 text-gray-500 hover:text-gray-900"
//                   >
//                     -
//                   </button>
//                   <span className="w-6 text-center">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="py-2 px-3 text-gray-500 hover:text-gray-900"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleAddToCart}
//               disabled={isButtonDisabled}
//               className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled
//                 ? "cursor-not-allowed opacity-50"
//                 : "hover:bg-gray-900"
//                 }`}
//             >
//               {isButtonDisabled ? "Adding..." : "ADD TO CART"}
//             </button>

//             {/* Product Details */}
//             <div className="pt-2 border-t border-gray-200">
//               <dl className="space-y-2">
//                 <div className="flex">
//                   <dt className="w-24 text-sm text-gray-600">Brand</dt>
//                   <dd className="text-sm text-gray-900">
//                     {selectedProduct.brand}
//                   </dd>
//                 </div>
//                 <div className="flex">
//                   <dt className="w-24 text-sm text-gray-600">Material</dt>
//                   <dd className="text-sm text-gray-900">
//                     {selectedProduct.material}
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         </div>
//       </div>
//       )}
//       <div className="mt-10">
//         <h2 className="text-2xl text-center font-medium mb-4">
//           You May Also Like
//         </h2>
//         <ProductGrid products={similarProducts} />
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

// const selectedProduct = {
//   _id:123,
//   name: "Classic Oxford Button-Down Shirt",
//   price: 39.99,
//   description:
//     "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
//   brand: "Urban Threads",
//   material: "Cotton",
//   sizes: ["S", "M", "L", "XL", "XXL"],
//   colors: [
//     { name: "Maroon", hex: "#640D14" },
//     { name: "Navy", hex: "#1F3B70" },
//     { name: "Olive", hex: "#556B2F" },
//   ],
//   images: [
//     { url: "/assets/page-assets/MenShirts.webp", altText: "Oxford Shirt" },
//     { url: "/assets/page-assets/shirt2.webp", altText: "Oxford Shirt Alternate" },
//   ],
// };

// const similarProducts = [
//   {
//     _id: 1,
//     name: "Product 1",
//     price: 100,
//     images: [{ url: "https://tiimg.tistatic.com/fp/1/007/644/easy-to-wear-breathable-small-georgette-fancy-printed-ladies-top--197.jpg" }]
//   },
//   {
//     _id: 2,
//     name: "Product 2",
//     price: 100,
//     images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2022/1/US/AN/IE/2985467/tops-500x500.jpg" }]
//   },
//   {
//     _id: 3,
//     name: "Product 3",
//     price: 100,
//     images: [{ url: "https://picsum.photos/500/500?random=3" }]
//   },
//   {
//     _id: 4,
//     name: "Product 4",
//     price: 100,
//     images: [{ url: "https://picsum.photos/500/500?random=4" }]
//   },
// ]
