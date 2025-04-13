const products = [
    {
      _id: 101,
      name: "Classic Oxford Button-Down Shirt",
      price: 39.99,
      description:
        "A premium cotton Oxford shirt with a button-down collar, perfect for both casual and formal occasions.",
      brand: "Urban Threads",
      category: "Top Wear",
      gender: "Men",
      material: "Cotton",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [
        { name: "Red", hex: "#FF0000" },
        { name: "Blue", hex: "#0000FF" },
        { name: "Black", hex: "#000000" },
      ],
      images: [
        { url: "/assets/shirt1.webp", altText: "Oxford Shirt" },
        { url: "/assets/shirt2.webp", altText: "Oxford Shirt Alternate" },
      ],
    },
    {
      _id: 102,
      name: "Slim Fit Denim Jeans",
      price: 49.99,
      description:
        "Stylish and comfortable denim jeans with a slim fit, designed for everyday wear.",
      brand: "Modern Fit",
      category: "Bottom Wear",
      gender: "Men",
      material: "Denim",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Blue", hex: "#1E3A8A" },
        { name: "Black", hex: "#000000" },
        { name: "Gray", hex: "#808080" },
      ],
      images: [
        { url: "/assets/jeans1.webp", altText: "Slim Fit Jeans" },
        { url: "/assets/jeans2.webp", altText: "Denim Jeans Alternate" },
      ],
    },
    {
      _id: 103,
      name: "Casual Cotton T-Shirt",
      price: 19.99,
      description:
        "Soft and breathable cotton t-shirt, perfect for everyday comfort.",
      brand: "Street Style",
      category: "Top Wear",
      gender: "Unisex",
      material: "Cotton",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Black", hex: "#000000" },
        { name: "Green", hex: "#008000" },
      ],
      images: [
        { url: "/assets/tshirt1.webp", altText: "Casual Cotton T-Shirt" },
        { url: "/assets/tshirt2.webp", altText: "T-Shirt Alternate" },
      ],
    },
    {
      _id: 104,
      name: "Elegant Silk Blouse",
      price: 59.99,
      description:
        "A lightweight and elegant silk blouse, ideal for formal and semi-formal occasions.",
      brand: "Fashionista",
      category: "Top Wear",
      gender: "Women",
      material: "Silk",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Pink", hex: "#FFC0CB" },
        { name: "Beige", hex: "#F5F5DC" },
        { name: "Navy", hex: "#000080" },
      ],
      images: [
        { url: "/assets/blouse1.webp", altText: "Elegant Silk Blouse" },
        { url: "/assets/blouse2.webp", altText: "Silk Blouse Alternate" },
      ],
    },
    {
      _id: 105,
      name: "Warm Fleece Hoodie",
      price: 45.99,
      description:
        "A cozy fleece hoodie to keep you warm during the chilly seasons.",
      brand: "ChicStyle",
      category: "Top Wear",
      gender: "Unisex",
      material: "Fleece",
      sizes: ["M", "L", "XL", "XXL"],
      colors: [
        { name: "Gray", hex: "#808080" },
        { name: "Red", hex: "#FF0000" },
        { name: "Blue", hex: "#0000FF" },
      ],
      images: [
        { url: "/assets/hoodie1.webp", altText: "Warm Fleece Hoodie" },
        { url: "/assets/hoodie2.webp", altText: "Fleece Hoodie Alternate" },
      ],
    },
    {
      _id: 106,
      name: "Leather Jacket",
      price: 89.99,
      description:
        "A rugged leather jacket with a modern cut, perfect for adding edge to any outfit.",
      brand: "Urban Edge",
      category: "Outerwear",
      gender: "Men",
      material: "Leather",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Brown", hex: "#8B4513" },
      ],
      images: [
        { url: "/assets/leatherjacket1.webp", altText: "Leather Jacket Front" },
        { url: "/assets/leatherjacket2.webp", altText: "Leather Jacket Back" },
      ],
    },
    {
      _id: 107,
      name: "Pleated Midi Skirt",
      price: 34.99,
      description:
        "A stylish pleated midi skirt that offers a flattering silhouette for any occasion.",
      brand: "Fashionista",
      category: "Bottom Wear",
      gender: "Women",
      material: "Polyester",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Navy", hex: "#000080" },
        { name: "Emerald", hex: "#50C878" },
      ],
      images: [
        { url: "/assets/skirt1.webp", altText: "Pleated Midi Skirt" },
        { url: "/assets/skirt2.webp", altText: "Skirt Alternate" },
      ],
    },
    {
      _id: 108,
      name: "Sports Running Shorts",
      price: 24.99,
      description:
        "Lightweight and breathable running shorts designed for high performance.",
      brand: "Active Life",
      category: "Bottom Wear",
      gender: "Men",
      material: "Polyester",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Gray", hex: "#808080" },
        { name: "Blue", hex: "#0000FF" },
      ],
      images: [
        { url: "/assets/shorts1.webp", altText: "Running Shorts" },
        { url: "/assets/shorts2.webp", altText: "Shorts Alternate" },
      ],
    },
    {
      _id: 109,
      name: "Athletic Leggings",
      price: 29.99,
      description:
        "High-stretch leggings ideal for workouts and everyday comfort.",
      brand: "FitWear",
      category: "Bottom Wear",
      gender: "Women",
      material: "Spandex",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Purple", hex: "#800080" },
      ],
      images: [
        { url: "/assets/leggings1.webp", altText: "Athletic Leggings" },
        { url: "/assets/leggings2.webp", altText: "Leggings Alternate" },
      ],
    },
    {
      _id: 110,
      name: "Waterproof Windbreaker",
      price: 39.99,
      description:
        "A versatile waterproof windbreaker designed for unpredictable weather.",
      brand: "StormGuard",
      category: "Outerwear",
      gender: "Unisex",
      material: "Nylon",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Yellow", hex: "#FFFF00" },
        { name: "Blue", hex: "#0000FF" },
      ],
      images: [
        { url: "/assets/windbreaker1.webp", altText: "Waterproof Windbreaker" },
        { url: "/assets/windbreaker2.webp", altText: "Windbreaker Alternate" },
      ],
    },
    {
      _id: 111,
      name: "Casual Polo Shirt",
      price: 27.99,
      description:
        "A timeless polo shirt with a clean design, suitable for both work and play.",
      brand: "Urban Threads",
      category: "Top Wear",
      gender: "Men",
      material: "Cotton",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Navy", hex: "#000080" },
        { name: "Red", hex: "#FF0000" },
      ],
      images: [
        { url: "/assets/polo1.webp", altText: "Casual Polo Shirt" },
        { url: "/assets/polo2.webp", altText: "Polo Shirt Alternate" },
      ],
    },
    {
      _id: 112,
      name: "Denim Jacket",
      price: 49.99,
      description:
        "A classic denim jacket with a vintage wash, perfect for layering in cooler weather.",
      brand: "Retro Revival",
      category: "Outerwear",
      gender: "Women",
      material: "Denim",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Blue", hex: "#1E90FF" },
        { name: "Black", hex: "#000000" },
      ],
      images: [
        { url: "/assets/denimjacket1.webp", altText: "Denim Jacket" },
        { url: "/assets/denimjacket2.webp", altText: "Jacket Alternate" },
      ],
    },
    {
      _id: 113,
      name: "Striped Sweater",
      price: 32.99,
      description:
        "A cozy striped sweater that pairs perfectly with jeans or chinos.",
      brand: "Cozy Corner",
      category: "Top Wear",
      gender: "Unisex",
      material: "Wool Blend",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Gray", hex: "#808080" },
        { name: "Navy", hex: "#000080" },
      ],
      images: [
        { url: "/assets/sweater1.webp", altText: "Striped Sweater" },
        { url: "/assets/sweater2.webp", altText: "Sweater Alternate" },
      ],
    },
    {
      _id: 114,
      name: "Classic Trench Coat",
      price: 79.99,
      description:
        "An elegant trench coat with a tailored fit, perfect for rainy days.",
      brand: "Elegance",
      category: "Outerwear",
      gender: "Women",
      material: "Cotton Blend",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Beige", hex: "#F5F5DC" },
        { name: "Black", hex: "#000000" },
      ],
      images: [
        { url: "/assets/trenchcoat1.webp", altText: "Classic Trench Coat" },
        { url: "/assets/trenchcoat2.webp", altText: "Trench Coat Alternate" },
      ],
    },
    {
      _id: 115,
      name: "Cargo Shorts",
      price: 34.99,
      description:
        "Durable cargo shorts with multiple pockets, ideal for outdoor adventures.",
      brand: "Adventure Co.",
      category: "Bottom Wear",
      gender: "Men",
      material: "Cotton",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Khaki", hex: "#C3B091" },
        { name: "Olive", hex: "#556B2F" },
      ],
      images: [
        { url: "/assets/cargoshorts1.webp", altText: "Cargo Shorts" },
        { url: "/assets/cargoshorts2.webp", altText: "Shorts Alternate" },
      ],
    },
    {
      _id: 116,
      name: "Floral Summer Dress",
      price: 44.99,
      description:
        "A light and airy floral dress, perfect for warm summer days.",
      brand: "Summer Bloom",
      category: "Dress",
      gender: "Women",
      material: "Cotton",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Floral", hex: "#FF69B4" },
        { name: "White", hex: "#FFFFFF" },
      ],
      images: [
        { url: "/assets/summerdress1.webp", altText: "Floral Summer Dress" },
        { url: "/assets/summerdress2.webp", altText: "Dress Alternate" },
      ],
    },
    {
      _id: 117,
      name: "Wool Overcoat",
      price: 129.99,
      description:
        "A timeless wool overcoat designed to keep you warm in the coldest weather.",
      brand: "Classic Wear",
      category: "Outerwear",
      gender: "Men",
      material: "Wool",
      sizes: ["L", "XL", "XXL"],
      colors: [
        { name: "Charcoal", hex: "#36454F" },
        { name: "Black", hex: "#000000" },
      ],
      images: [
        { url: "/assets/overcoat1.webp", altText: "Wool Overcoat" },
        { url: "/assets/overcoat2.webp", altText: "Overcoat Alternate" },
      ],
    },
    {
      _id: 118,
      name: "Slim Fit Chinos",
      price: 39.99,
      description:
        "Comfortable and versatile slim fit chinos suitable for both casual and business wear.",
      brand: "Urban Threads",
      category: "Bottom Wear",
      gender: "Men",
      material: "Cotton",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Beige", hex: "#F5F5DC" },
        { name: "Navy", hex: "#000080" },
      ],
      images: [
        { url: "/assets/chinos1.webp", altText: "Slim Fit Chinos" },
        { url: "/assets/chinos2.webp", altText: "Chinos Alternate" },
      ],
    },
    {
      _id: 119,
      name: "Bohemian Maxi Dress",
      price: 54.99,
      description:
        "A flowy maxi dress with bohemian prints, perfect for a relaxed yet chic look.",
      brand: "Boho Chic",
      category: "Dress",
      gender: "Women",
      material: "Viscose",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Multicolor", hex: "#FF69B4" },
        { name: "White", hex: "#FFFFFF" },
      ],
      images: [
        { url: "/assets/maxidress1.webp", altText: "Bohemian Maxi Dress" },
        { url: "/assets/maxidress2.webp", altText: "Dress Alternate" },
      ],
    },
    {
      _id: 120,
      name: "Sportswear Zip-Up Jacket",
      price: 59.99,
      description:
        "A performance zip-up jacket designed for both athletic activities and casual outings.",
      brand: "Active Life",
      category: "Outerwear",
      gender: "Unisex",
      material: "Polyester",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Red", hex: "#FF0000" },
      ],
      images: [
        { url: "/assets/zipjacket1.webp", altText: "Zip-Up Jacket" },
        { url: "/assets/zipjacket2.webp", altText: "Jacket Alternate" },
      ],
    },
    {
      _id: 121,
      name: "Printed Crew Neck Sweatshirt",
      price: 29.99,
      description:
        "A casual crew neck sweatshirt featuring bold prints, perfect for everyday wear.",
      brand: "Street Style",
      category: "Top Wear",
      gender: "Unisex",
      material: "Cotton Blend",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Black", hex: "#000000" },
      ],
      images: [
        { url: "/assets/sweatshirt1.webp", altText: "Printed Sweatshirt" },
        { url: "/assets/sweatshirt2.webp", altText: "Sweatshirt Alternate" },
      ],
    },
    {
      _id: 122,
      name: "Slim Fit Formal Trousers",
      price: 49.99,
      description:
        "Tailored formal trousers with a slim fit, perfect for office wear and formal occasions.",
      brand: "Modern Fit",
      category: "Bottom Wear",
      gender: "Men",
      material: "Polyester Blend",
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Gray", hex: "#808080" },
      ],
      images: [
        { url: "/assets/trousers1.webp", altText: "Formal Trousers" },
        { url: "/assets/trousers2.webp", altText: "Trousers Alternate" },
      ],
    },
    {
      _id: 123,
      name: "V-Neck Cashmere Sweater",
      price: 69.99,
      description:
        "A luxurious cashmere sweater with a V-neck design for a refined look.",
      brand: "Luxury Knit",
      category: "Top Wear",
      gender: "Women",
      material: "Cashmere",
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Burgundy", hex: "#800020" },
      ],
      images: [
        { url: "/assets/cashmeresweater1.webp", altText: "Cashmere Sweater" },
        { url: "/assets/cashmeresweater2.webp", altText: "Sweater Alternate" },
      ],
    },
    {
      _id: 124,
      name: "Rugged Work Boots",
      price: 89.99,
      description:
        "Durable and rugged work boots built for safety and comfort in tough conditions.",
      brand: "Urban Edge",
      category: "Footwear",
      gender: "Men",
      material: "Leather",
      sizes: ["9", "10", "11", "12"],
      colors: [
        { name: "Brown", hex: "#8B4513" },
        { name: "Black", hex: "#000000" },
      ],
      images: [
        { url: "/assets/workboots1.webp", altText: "Rugged Work Boots" },
        { url: "/assets/workboots2.webp", altText: "Boots Alternate" },
      ],
    },
    {
      _id: 125,
      name: "Elegant Stiletto Heels",
      price: 69.99,
      description:
        "Sophisticated stiletto heels designed to elevate any outfit with grace.",
      brand: "Fashionista",
      category: "Footwear",
      gender: "Women",
      material: "Suede",
      sizes: ["6", "7", "8", "9"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Red", hex: "#FF0000" },
      ],
      images: [
        { url: "/assets/heels1.webp", altText: "Elegant Stiletto Heels" },
        { url: "/assets/heels2.webp", altText: "Heels Alternate" },
      ],
    },
  ];
  
  export default products;
  