import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: [],
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  // Static data arrays
  const categories = ["Top Wear", "Bottom Wear"];
  const genders = ["Men", "Women", "Unisex"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  // Initialize filters from URL params
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color ? params.color.split(",") : [],
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
    });
  }, [searchParams]);

  // Update URL params when filters change
  // useEffect(() => {
  //   const params = new URLSearchParams();

  //   Object.entries(filters).forEach(([key, value]) => {
  //     if (key === "minPrice" || key === "maxPrice") {
  //       if (value !== (key === "minPrice" ? 0 : 100)) {
  //         params.set(key, value.toString());
  //       }
  //     } else if (Array.isArray(value)) {
  //       if (value.length > 0) params.set(key, value.join(","));
  //     } else if (value) {
  //       params.set(key, value);
  //     }
  //   });

  //   setSearchParams(params);
  // }, [filters, setSearchParams]);
  // In FilterSidebar.jsx
  
useEffect(() => {
  // Create a copy of existing search params to preserve non-filter parameters
  const newParams = new URLSearchParams(searchParams.toString());

  // Remove all existing filter-related parameters to avoid stale data
  const filterKeys = ['category', 'gender', 'color', 'size', 'material', 'brand', 'minPrice', 'maxPrice'];
  filterKeys.forEach(key => newParams.delete(key));

  // Add current filter values to the URL params
  Object.entries(filters).forEach(([key, value]) => {
    if (key === "minPrice" || key === "maxPrice") {
      if (value !== (key === "minPrice" ? 0 : 100)) {
        newParams.set(key, value.toString());
      }
    } else if (Array.isArray(value)) {
      if (value.length > 0) newParams.set(key, value.join(","));
    } else if (value) {
      newParams.set(key, value);
    }
  });

  setSearchParams(newParams);
}, [filters, setSearchParams, searchParams]); // Add searchParams to dependencies

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = (newFilters[name] || []).filter(
          (item) => item !== value
        );
      }
    } else {
      newFilters[name] =
        name === "minPrice" || name === "maxPrice" ? Number(value) : value;
    }

    setFilters(newFilters);
    // console.log(newFilters);
  };

  return (
    <div className="p-4 w-auto">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        {colors.map((color) => (
          <div key={color} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="color"
              value={color}
              checked={filters.color.includes(color)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{color}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="maxPrice"
          min={0}
          max={100}
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>${filters.minPrice}</span>
          <span>${filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
