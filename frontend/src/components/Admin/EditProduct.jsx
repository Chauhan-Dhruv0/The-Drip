import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/Slice/productSlice";
import { updateProduct } from "../../redux/Slice/adminProductSlice";
import axios from "axios";

function EditProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selectedProduct, loading, error, similarProducts } = useSelector(
        (state) => state.products
    );
    const fileInputRef = useRef(null);
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        gender: "",
        images: [],
    });

    const [uploading, setUploading] = useState(false); //img uploading status
    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetails(id));
            // console.log("Fetching product with ID:", id);
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedProduct) {
            console.log("Product from Redux:", selectedProduct);

            setProductData(selectedProduct);
        }
    }, [selectedProduct]);

    const handleImageUpload = async (e) => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("image", files);
        try {
            setUploading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setProductData((prevData) => ({
                ...prevData,
                images: [...prevData.images, { url: data.imageUrl, altText: "" }],
            }));
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
        // const newImages = await Promise.all(
        //     files.map((file) => {
        //         return new Promise((resolve) => {
        //             const reader = new FileReader();
        //             reader.onload = () => resolve({ url: reader.result });
        //             reader.readAsDataURL(file);
        //         });
        //     })
        // );
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleArrayChange = (e, field) => {
        setProductData({
            ...productData,
            [field]: e.target.value
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean),
        });
    };

    const handleImageRemove = (index) => {
        setProductData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ id, productData }));
        navigate("/admin/products");
        // console.log("Product Data:", productData);
        // Here you would send productData to your API
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error:{error}</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md bg-white">
            <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows={4}
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Count in Stock */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Count in Stock</label>
                    <input
                        type="number"
                        name="countInStock"
                        value={productData.countInStock}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* SKU */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={productData.sku}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Sizes */}
                <div className="mb-4">
                    <label className="block font-semibold">Sizes (comma-separated)</label>
                    <input
                        type="text"
                        name="sizes"
                        value={productData.sizes.join(", ")}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                sizes: e.target.value.split(",").map((size) => size.trim()),
                            })
                        }
                        className="w-full p-2 border rounded-md"
                        placeholder="e.g., S, M, L, XL"
                    />
                </div>

                {/* Colors */}
                <div className="mb-4">
                    <label className="block font-semibold">
                        Colors (comma-separated)
                    </label>
                    <input
                        type="text"
                        name="colors"
                        value={productData.colors.join(", ")}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                colors: e.target.value.split(",").map((color) => color.trim()),
                            })
                        }
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* ... (other form fields remain the same) ... */}

                {/* Product Images Preview */}
                <div className="mb-4">
                    <label className="block font-semibold">Product Images</label>
                    <div className="flex gap-2 flex-wrap">
                        {productData.images.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image.url}
                                    alt={`Product ${index}`}
                                    className="w-24 h-24 object-cover rounded-md border hover:opacity-75 transition-opacity"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleImageRemove(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <div className="relative">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                ref={fileInputRef}
                                id="imageUpload"
                            />
                            <label
                                htmlFor="imageUpload"
                                className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer hover:border-blue-500 transition-colors"
                            >
                                <span className="text-gray-500 text-4xl">+</span>
                            </label>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditProduct;
