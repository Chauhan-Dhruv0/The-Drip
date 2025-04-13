const products = [
    {
        name: "Classic Oxford Button-Down Shirt",
        description:
            "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
        price: 39.99,
        discountPrice: 34.99,
        countInStock: 20,
        sku: "OX-SH-001",
        category: "Top Wear",
        brand: "Urban Threads",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#FF0000", "#0000FF", "#FFFF00"],
        collections: "Business Casual",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Classic Oxford Button-Down Shirt Front View",
            },
            {
                url: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Classic Oxford Button-Down Shirt Back View",
            },
        ],
        rating: 4.5,
        numReviews: 12,
    },
    {
        name: "Slim-Fit Stretch Shirt",
        description:
            "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
        price: 29.99,
        discountPrice: 24.99,
        countInStock: 35,
        sku: "SLIM-SH-002",
        category: "Top Wear",
        brand: "Modern Fit",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#000080", "#800020"],
        collections: "Formal Wear",
        material: "Cotton Blend",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Slim-Fit Stretch Shirt Front View",
            },
            {
                url: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Slim-Fit Stretch Shirt Back View",
            },
        ],
        rating: 4.8,
        numReviews: 15,
    },
    {
        name: "Casual Denim Shirt",
        description:
            "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
        price: 49.99,
        discountPrice: 44.99,
        countInStock: 15,
        sku: "CAS-DEN-003",
        category: "Top Wear",
        brand: "Street Style",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#ADD8E6", "#00008B"],
        collections: "Casual Wear",
        material: "Denim",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Casual Denim Shirt Front View",
            },
            {
                url: "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Casual Denim Shirt Back View",
            },
        ],
        rating: 4.6,
        numReviews: 8,
    },
    {
        name: "Printed Resort Shirt",
        description:
            "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
        price: 29.99,
        discountPrice: 22.99,
        countInStock: 25,
        sku: "PRNT-RES-004",
        category: "Top Wear",
        brand: "Beach Breeze",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFDD00", "#000080"],
        collections: "Vacation Wear",
        material: "Viscose",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Printed Resort Shirt Front View",
            },
            {
                url: "https://images.unsplash.com/photo-1559334417-8ca889427fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Printed Resort Shirt Back View",
            },
        ],
        rating: 4.4,
        numReviews: 10,
    },
    {
        name: "Slim-Fit Easy-Iron Shirt",
        description:
            "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
        price: 34.99,
        discountPrice: 29.99,
        countInStock: 30,
        sku: "SLIM-EIR-005",
        category: "Top Wear",
        brand: "Urban Chic",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFFFFF", "#808080"],
        collections: "Business Wear",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Slim-Fit Easy-Iron Shirt Front View",
            },
            {
                url: "https://images.unsplash.com/photo-160803060933-f68e7d17f141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Slim-Fit Easy-Iron Shirt Front View",
            },
        ],
        rating: 5,
        numReviews: 14,
    },
    {
        name: "Polo T-Shirt with Ribbed Collar",
        description:
            "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
        price: 24.99,
        discountPrice: 19.99,
        countInStock: 50,
        sku: "POLO-TSH-006",
        category: "Top Wear",
        brand: "Polo Classics",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFFFFF", "#000080", "#FF0000"],
        collections: "Casual Wear",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Polo T-Shirt Front View",
            },
            {
                url: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Polo T-Shirt Back View",
            },
        ],
        rating: 4.3,
        numReviews: 22,
    },
    {
        name: "Oversized Graphic T-Shirt",
        description:
            "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
        price: 19.99,
        discountPrice: 15.99,
        countInStock: 40,
        sku: "OVS-GRF-007",
        category: "Top Wear",
        brand: "Street Vibes",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#808080"],
        collections: "Streetwear",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1588703787681-99ef7a1e1092?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Oversized Graphic T-Shirt Front View",
            },
        ],
        rating: 4.6,
        numReviews: 30,
    },
    {
        name: "Regular-Fit Henley Shirt",
        description:
            "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
        price: 22.99,
        discountPrice: 18.99,
        countInStock: 35,
        sku: "REG-HEN-008",
        category: "Top Wear",
        brand: "Heritage Wear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#AAAAA9", "#808000", "#000000"],
        collections: "Casual Wear",
        material: "Cotton Blend",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Regular-Fit Henley Shirt Front View",
            },
        ],
        rating: 4.5,
        numReviews: 25,
    },
    {
        name: "Long-Sleeve Thermal Tee",
        description:
            "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
        price: 27.99,
        discountPrice: 22.99,
        countInStock: 20,
        sku: "LST-THR-009",
        category: "Top Wear",
        brand: "Winter Basics",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#36454F", "#006400", "#000080"],
        collections: "Winter Essentials",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1610897600804-c36e67348499?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Long-Sleeve Thermal Tee Front View",
            },
        ],
        rating: 4.4,
        numReviews: 18,
    },
    {
        name: "V-Neck Classic T-Shirt",
        description:
            "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
        price: 14.99,
        discountPrice: 11.99,
        countInStock: 60,
        sku: "VNECK-CLS-010",
        category: "Top Wear",
        brand: "Everyday Comfort",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFFFFF", "#000000", "#000080"],
        collections: "Basics",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "V-Neck Classic T-Shirt Front View",
            },
        ],
        rating: 4.7,
        numReviews: 28,
    },
    {
        name: "Slim Fit Joggers",
        description:
            "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
        price: 40,
        discountPrice: 35,
        countInStock: 20,
        sku: "BW-001",
        category: "Bottom Wear",
        brand: "ActiveWear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#808080", "#000080"],
        collections: "Casual Collection",
        material: "Cotton Blend",
        gender: "Men",
        images: [
            {
                url: "https://images.unsplash.com/photo-1590666027616-38c9a90a654d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                altText: "Slim Fit Joggers Front View",
            },
        ],
        rating: 4.5,
        numReviews: 12,
    },
    [
        {
            "name": "Cargo Joggers",
            "description":
                "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
            "price": 45,
            "discountPrice": 40,
            "countInStock": 15,
            "sku": "BW-002",
            "category": "Bottom Wear",
            "brand": "UrbanStyle",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#808000", "#000000"],
            "collections": "Urban Collection",
            "material": "Cotton",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Cargo Joggers Front View"
                }
            ],
            "rating": 4.7,
            "numReviews": 20
        },
        {
            "name": "Tapered Sweatpants",
            "description":
                "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
            "price": 35,
            "discountPrice": 30,
            "countInStock": 25,
            "sku": "BW-003",
            "category": "Bottom Wear",
            "brand": "ChillZone",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#808080", "#36454F", "#0000FF"],
            "collections": "Lounge Collection",
            "material": "Fleece",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Tapered Sweatpants Front View"
                }
            ],
            "rating": 4.3,
            "numReviews": 18
        },
        {
            "name": "Denim Jeans",
            "description":
                "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
            "price": 60,
            "discountPrice": 50,
            "countInStock": 30,
            "sku": "BW-004",
            "category": "Bottom Wear",
            "brand": "DenimCo",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#00008B", "#ADD8E6"],
            "collections": "Denim Collection",
            "material": "Denim",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Denim Jeans Front View"
                }
            ],
            "rating": 4.6,
            "numReviews": 22
        },
        {
            "name": "Chino Pants",
            "description":
                "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
            "price": 55,
            "discountPrice": 48,
            "countInStock": 40,
            "sku": "BW-005",
            "category": "Bottom Wear",
            "brand": "CasualLook",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#F5F5DC", "#000080", "#000000"],
            "collections": "Smart Casual Collection",
            "material": "Cotton",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Chino Pants Front View"
                }
            ],
            "rating": 4.8,
            "numReviews": 15
        },
        {
            "name": "Track Pants",
            "description":
                "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
            "price": 40,
            "discountPrice": 35,
            "countInStock": 20,
            "sku": "BW-006",
            "category": "Bottom Wear",
            "brand": "SportX",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#000000", "#FF0000", "#0000FF"],
            "collections": "Activewear Collection",
            "material": "Polyester",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Track Pants Front View"
                }
            ],
            "rating": 4.2,
            "numReviews": 17
        },
        {
            "name": "Slim Fit Trousers",
            "description":
                "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
            "price": 65,
            "discountPrice": 55,
            "countInStock": 15,
            "sku": "BW-007",
            "category": "Bottom Wear",
            "brand": "ExecutiveStyle",
            "sizes": ["M", "L", "XL"],
            "colors": ["#808080", "#000000"],
            "collections": "Office Wear",
            "material": "Polyester",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Slim Fit Trousers Front View"
                }
            ],
            "rating": 4.7,
            "numReviews": 10
        },
        {
            "name": "Cargo Pants",
            "description":
                "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
            "price": 50,
            "discountPrice": 45,
            "countInStock": 25,
            "sku": "BW-008",
            "category": "Bottom Wear",
            "brand": "StreetWear",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#808000", "#A52A2A", "#000000"],
            "collections": "Street Style Collection",
            "material": "Cotton",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Cargo Pants Front View"
                }
            ],
            "rating": 4.5,
            "numReviews": 13
        },
        {
            "name": "Relaxed Fit Sweatpants",
            "description":
                "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
            "price": 35,
            "discountPrice": 30,
            "countInStock": 35,
            "sku": "BW-009",
            "category": "Bottom Wear",
            "brand": "LoungeWear",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#808080", "#000000", "#000080"],
            "collections": "Lounge Collection",
            "material": "Fleece",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1580906853203-f13ea2c87ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Relaxed Fit Sweatpants Front View"
                }
            ],
            "rating": 4.3,
            "numReviews": 14
        },
        {
            "name": "Formal Dress Pants",
            "description":
                "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
            "price": 70,
            "discountPrice": 60,
            "countInStock": 20,
            "sku": "BW-010",
            "category": "Bottom Wear",
            "brand": "ElegantStyle",
            "sizes": ["M", "L", "XL"],
            "colors": ["#000000", "#000080"],
            "collections": "Formal Collection",
            "material": "Polyester",
            "gender": "Men",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "altText": "Formal Dress Pants Front View"
                }
            ],
            "rating": 4.9,
            "numReviews": 8
        },
        {
            "name": "High-Waist Skinny Jeans",
            "description": "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
            "price": 50,
            "discountPrice": 45,
            "countInStock": 30,
            "sku": "BW-W-001",
            "category": "Bottom Wear",
            "brand": "DenimStyle",
            "sizes": ["XS", "S", "M", "L", "XL"],
            "colors": ["#00008B", "#000000", "#ADD8E6"],
            "collections": "Denim Collection",
            "material": "Denim",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "High-Waist Skinny Jeans"
                }
            ],
            "rating": 4.8,
            "numReviews": 20
        },
        {
            "name": "Wide-Leg Trousers",
            "description": "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
            "price": 60,
            "discountPrice": 55,
            "countInStock": 25,
            "sku": "BW-W-002",
            "category": "Bottom Wear",
            "brand": "ElegantWear",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#F5F5DC", "#000000", "#FFFFFF"],
            "collections": "Formal Collection",
            "material": "Polyester",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Wide-Leg Trousers Front View"
                }
            ],
            "rating": 4.7,
            "numReviews": 15
        },
        {
            "name": "Stretch Leggings",
            "description": "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
            "price": 25,
            "discountPrice": 20,
            "countInStock": 40,
            "sku": "BW-W-003",
            "category": "Bottom Wear",
            "brand": "ComfyFit",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#000000", "#808080", "#000080"],
            "collections": "Activewear Collection",
            "material": "Cotton Blend",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1588580000641-d87c0ab7f7b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Stretch Leggings Front View"
                }
            ],
            "rating": 4.5,
            "numReviews": 30
        },
        {
            "name": "Pleated Midi Skirt",
            "description": "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
            "price": 55,
            "discountPrice": 50,
            "countInStock": 20,
            "sku": "BW-W-004",
            "category": "Bottom Wear",
            "brand": "ChicStyle",
            "sizes": ["S", "M", "L"],
            "colors": ["#FFC0CB", "#000080", "#000000"],
            "collections": "Spring Collection",
            "material": "Polyester",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Pleated Midi Skirt Front View"
                }
            ],
            "rating": 4.6,
            "numReviews": 18
        },
        {
            "name": "Flared Palazzo Pants",
            "description": "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
            "price": 45,
            "discountPrice": 40,
            "countInStock": 35,
            "sku": "BW-W-005",
            "category": "Bottom Wear",
            "brand": "BreezyVibes",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#FFFFFF", "#F5F5DC", "#ADD8E6"],
            "collections": "Summer Collection",
            "material": "Linen Blend",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Flared Palazzo Pants Front View"
                }
            ],
            "rating": 4.4,
            "numReviews": 22
        },
        {
            "name": "High-Rise Joggers",
            "description": "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
            "price": 40,
            "discountPrice": 35,
            "countInStock": 30,
            "sku": "BW-W-006",
            "category": "Bottom Wear",
            "brand": "ActiveWear",
            "sizes": ["XS", "S", "M", "L"],
            "colors": ["#000000", "#808080", "#FFC0CB"],
            "collections": "Loungewear Collection",
            "material": "Cotton Blend",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "High-Rise Joggers Front View"
                }
            ],
            "rating": 4.3,
            "numReviews": 25
        },
        {
            "name": "Paperbag Waist Shorts",
            "description": "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
            "price": 35,
            "discountPrice": 30,
            "countInStock": 20,
            "sku": "BW-W-007",
            "category": "Bottom Wear",
            "brand": "SunnyStyle",
            "sizes": ["S", "M", "L"],
            "colors": ["#FFFFFF", "#C3B091", "#0000FF"],
            "collections": "Summer Collection",
            "material": "Cotton",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Paperbag Waist Shorts Front View"
                }
            ],
            "rating": 4.5,
            "numReviews": 19
        },
        {
            "name": "Stretch Denim Shorts",
            "description": "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
            "price": 40,
            "discountPrice": 35,
            "countInStock": 25,
            "sku": "BW-W-008",
            "category": "Bottom Wear",
            "brand": "DenimStyle",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#0000FF", "#000000", "#FFFFFF"],
            "collections": "Denim Collection",
            "material": "Denim",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Stretch Denim Shorts Front View"
                }
            ],
            "rating": 4.7,
            "numReviews": 15
        },
        {
            "name": "Culottes",
            "description": "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
            "price": 50,
            "discountPrice": 45,
            "countInStock": 30,
            "sku": "BW-W-009",
            "category": "Bottom Wear",
            "brand": "ChicStyle",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#000000", "#FFFFFF", "#808000"],
            "collections": "Casual Collection",
            "material": "Polyester",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Culottes Front View"
                }
            ],
            "rating": 4.6,
            "numReviews": 23
        },
        {
            "name": "Classic Pleated Trousers",
            "description": "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
            "price": 70,
            "discountPrice": 65,
            "countInStock": 25,
            "sku": "BW-W-010",
            "category": "Bottom Wear",
            "brand": "ElegantWear",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#000080", "#000000", "#808080"],
            "collections": "Formal Collection",
            "material": "Wool Blend",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Classic Pleated Trousers Front View"
                }
            ],
            "rating": 4.8,
            "numReviews": 20
        },
        {
            "name": "Knitted Cropped Top",
            "description": "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
            "price": 40,
            "discountPrice": 35,
            "countInStock": 25,
            "sku": "TW-W-001",
            "category": "Top Wear",
            "brand": "ChicKnit",
            "sizes": ["S", "M", "L"],
            "colors": ["#F5F5DC", "#FFFFFF"],
            "collections": "Knits Collection",
            "material": "Cotton Blend",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Knitted Cropped Top"
                }
            ],
            "rating": 4.6,
            "numReviews": 15
        },
        {
            "name": "Boho Floral Blouse",
            "description": "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
            "price": 50,
            "discountPrice": 45,
            "countInStock": 30,
            "sku": "TW-W-002",
            "category": "Top Wear",
            "brand": "BohoVibes",
            "sizes": ["S", "M", "L", "XL"],
            "colors": ["#FFFFFF", "#FFC0CB"],
            "collections": "Summer Collection",
            "material": "Viscose",
            "gender": "Women",
            "images": [
                {
                    "url": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "altText": "Boho Floral Blouse"
                }
            ],
            "rating": 4.7,
            "numReviews": 20
        },
        {
            name: "Casual T-Shirt",
            description:
                "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
            price: 25,
            discountPrice: 20,
            countInStock: 50,
            sku: "TW-W-003",
            category: "Top Wear",
            brand: "ComfyTees",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#FFFFFF", "#808080"],
            collections: "Essentials",
            material: "Cotton",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Casual T-Shirt",
                },
            ],
            rating: 4.5,
            numReviews: 25,
        },
        {
            name: "Off-Shoulder Top",
            description:
                "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
            price: 45,
            discountPrice: 40,
            countInStock: 35,
            sku: "TW-W-004",
            category: "Top Wear",
            brand: "Elegance",
            sizes: ["S", "M", "L"],
            colors: ["#FF0000", "#FFFFFF", "#0000FF"],
            collections: "Evening Collection",
            material: "Polyester",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1602353195884-44ea7e76e196?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Off-Shoulder Top",
                },
            ],
            rating: 4.7,
            numReviews: 18,
        },
        {
            name: "Lace-Trimmed Cami Top",
            description:
                "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
            price: 35,
            discountPrice: 30,
            countInStock: 40,
            sku: "TW-W-005",
            category: "Top Wear",
            brand: "DelicateWear",
            sizes: ["S", "M", "L"],
            colors: ["#000000", "#FFFFFF"],
            collections: "Lingerie-Inspired",
            material: "Silk Blend",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1617059063772-34532796cdb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Lace-Trimmed Cami Top",
                },
            ],
            rating: 4.8,
            numReviews: 22,
        },
        {
            name: "Graphic Print Tee",
            description:
                "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
            price: 30,
            discountPrice: 25,
            countInStock: 45,
            sku: "TW-W-006",
            category: "Top Wear",
            brand: "StreetStyle",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#FFFFFF", "#000000"],
            collections: "Urban Collection",
            material: "Cotton",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Graphic Print Tee",
                },
            ],
            rating: 4.6,
            numReviews: 30,
        },
        {
            name: "Ribbed Long-Sleeve Top",
            description:
                "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
            price: 55,
            discountPrice: 50,
            countInStock: 30,
            sku: "TW-W-007",
            category: "Top Wear",
            brand: "ComfortFit",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#808080", "#FFC0CB", "#A52A2A"],
            collections: "Fall Collection",
            material: "Cotton Blend",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1627913363993-95768f82b8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Ribbed Long-Sleeve Top",
                },
            ],
            rating: 4.7,
            numReviews: 26,
        },
        {
            name: "Ruffle-Sleeve Blouse",
            description:
                "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
            price: 45,
            discountPrice: 40,
            countInStock: 20,
            sku: "TW-W-008",
            category: "Top Wear",
            brand: "FeminineWear",
            sizes: ["S", "M", "L"],
            colors: ["#FFFFFF", "#000080", "#E6E6FA"],
            collections: "Summer Collection",
            material: "Viscose",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1595372593103-1c5e24a2d0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Ruffle-Sleeve Blouse",
                },
            ],
            rating: 4.5,
            numReviews: 19,
        },
        {
            name: "Classic Button-Up Shirt",
            description:
                "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
            price: 60,
            discountPrice: 55,
            countInStock: 25,
            sku: "TW-W-009",
            category: "Top Wear",
            brand: "ClassicStyle",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#FFFFFF", "#ADD8E6", "#000000"],
            collections: "Office Collection",
            material: "Cotton",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "Classic Button-Up Shirt",
                },
            ],
            rating: 4.8,
            numReviews: 25,
        },
        {
            name: "V-Neck Wrap Top",
            description:
                "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
            price: 50,
            discountPrice: 45,
            countInStock: 30,
            sku: "TW-W-010",
            category: "Top Wear",
            brand: "ChicWrap",
            sizes: ["S", "M", "L"],
            colors: ["#FF0000", "#000000", "#FFFFFF"],
            collections: "Evening Collection",
            material: "Polyester",
            gender: "Women",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    altText: "V-Neck Wrap Top",
                },
            ],
            rating: 4.7,
            numReviews: 22,
        },
    ];


module.exports = products;