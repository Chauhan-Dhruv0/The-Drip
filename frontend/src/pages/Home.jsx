import { useEffect,useState } from "react";
import HeroSection from "../components/Common/HeroSection";
import SalePage from "../components/Common/Salepage";
import GenderCollectionSection from "../components/Products/GenderCollecionSection"
import NewArrival from "../components/Products/NewArrival";
import ProductDetail from "../components/Products/ProductDetail";
import {useDispatch, useSelector} from "react-redux";
import { fetchProductsByFilters } from "../redux/Slice/productSlice";
import axios from "axios";

function Home() {

  const dispatch = useDispatch();
  const { products, loading ,error} = useSelector((state)=> state.products);
  const [bestSellerProducts,setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch products for specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
  
    // Fetch best seller
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data); // ✅ set the fetched data
      } catch (error) {
        console.error("Failed to fetch best seller:", error);
      }
    };
  
    fetchBestSeller(); // ✅ CALL the function here
  }, [dispatch]);
  
  return (
    <>
      <SalePage />
      <HeroSection />
      <GenderCollectionSection/>
      <NewArrival/>

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold  bg-gray-50">Best Seller</h2>
      {bestSellerProducts ? (
        <ProductDetail productId={bestSellerProducts._id} />
      ):(
        <p className="text-center">Loading Best seller</p>
      )}
      

     
    </>
  );
}

export default Home;
