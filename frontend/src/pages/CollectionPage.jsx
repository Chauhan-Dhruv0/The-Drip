import React, { useEffect, useRef, useState,useMemo } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";
import SortOptions from "../components/Products/SortOption";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/Slice/productSlice";


function CollectionPage() {

  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {products ,loading,error} = useSelector((state)=> state.products);
  const queryParams = Object.fromEntries([...searchParams]);

  // const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(()=>{
    dispatch(fetchProductsByFilters({ collection, ...queryParams}));
  },[dispatch,collection,searchParams])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);





  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        Filter
      </button>

      {/* Filter sidebar */}
      {/* <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto 
          transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar  />

      </div> */}
      <div
  ref={sidebarRef}
  className={`${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto 
    transition-transform duration-300 lg:static lg:translate-x-0 lg:w-64`}
>
  <FilterSidebar />
</div>


      <div className="flex-grow p-4 w-full">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort selection */}
        <SortOptions />

        {/* Products Grid */}
        <ProductGrid products={products} loading={loading} error={error} />
        {/* <ProductGrid products={sortedProducts} /> */}
      </div>
    </div>
  );
}

export default CollectionPage;


// import { useSearchParams } from "react-router-dom";


  // const [searchParams] = useSearchParams();
  // const sortBy = searchParams.get("sortBy");

  // const sortedProducts = useMemo(() => {
  //   const productsCopy = [...products];
  //   switch (sortBy) {
  //     case "priceAsc":
  //       return productsCopy.sort((a, b) => a.price - b.price);
  //     case "priceDesc":
  //       return productsCopy.sort((a, b) => b.price - a.price);
  //     // Add other sorting cases
  //     default:
  //       return productsCopy;
  //   }
  // }, [products, sortBy]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const fetchedProducts = [
  //       {
  //         _id: 1,
  //         name: "Product 1",
  //         price: 100,
  //         images: [{ url: "https://tiimg.tistatic.com/fp/1/007/644/easy-to-wear-breathable-small-georgette-fancy-printed-ladies-top--197.jpg" }],
  //       },
  //       {
  //         _id: 2,
  //         name: "Product 2",
  //         price: 150,
  //         images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2022/1/US/AN/IE/2985467/tops-500x500.jpg" }],
  //       },
  //       {
  //         _id: 3,
  //         name: "Product 3",
  //         price: 120,
  //         images: [{ url: "https://5.imimg.com/data5/ECOM/Default/2023/6/317033867/ZG/EL/AI/9422220/pauljones-brand-summer-long-sleeve-men-s-plaid-shirts-slim-fit-men-casual-shirts-high-quality-500x500.jpg" }],
  //       },
  //       {
  //         _id: 4,
  //         name: "Product 4",
  //         price: 200,
  //         images: [{ url: "https://vader-prod.s3.amazonaws.com/1721661703-mhl-tshirts-rhone-252-669e79021e027.jpg" }],
  //       },
  //       {
  //         _id: 5,
  //         name: "Product 5",
  //         price: 180,
  //         images: [{ url: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/HLJN004336_1.JPG" }],
  //       },
  //     ];
  //     setProducts(fetchedProducts);
  //   }, 1000);
  // }, []);
