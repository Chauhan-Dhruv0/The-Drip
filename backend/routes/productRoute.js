const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Create Product post /api/products
// @desc Create a new product
// @access private/admin

router.post("/", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimension,
            weight,
            sku,
        } = req.body;
        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimension,
            weight,
            sku,
            user: req.user._id,
        });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @router PUT api/products
// @desc update all products id
// @access private/admin

router.put("/:id", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimension,
            weight,
            sku,
        } = req.body;

        // find product by id

        const product = await Product.findById(req.params.id);

        if (product) {
            // Update product field
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.collections = collections || product.collections;
            product.material = material || product.material;
            product.gender = gender || product.gender;
            product.images = images || product.images;

            product.isFeatured = undefined ? isFeatured : product.isFeatured;
            product.isPublished = undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimension || product.dimensions;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;

            // save product
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @route DELETE api/products/:id
// @desc Delete a product
// @access private/admin

router.delete("/:id", protect, admin, async (req, res) => {
    try {
        // find by if
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.deleteOne();
            res.json({ message: "Product deleted" });
        } else {
            res.json(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @route GET /api/products
// @desc Get all products woth optional query filter
// @acess Public

router.get("/", async (req, res) => {
    try {
        const {
            collection,
            size,
            color,
            gender,
            minPrice,
            maxPrice,
            material,
            sortBy,
            search,
            category,
            brand,
            limit,
        } = req.query;
        let query = {};

        if (collection && collection.toLocaleLowerCase() !== "all") {
            query.collections = collection;
        }
        if (category && category.toLocaleLowerCase() !== "all") {
            query.category = category;
        }
        if (material) {
            query.material = { $in: material.split(",") };
        }
        if (brand) {
            query.brand = { $in: brand.split(",") };
        }
        if (size) {
            query.sizes = { $in: size.split(",") };
        }
        if (color) {
            query.colors = { $in: [color] };
        }
        if (gender) {
            query.gender = gender;
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ];
        }

        // Sort Logic
        let sort ={}
        if(sortBy){
            switch(sortBy){
                case 'priceAsc':
                    sort ={price:1}
                    break;
                case "priceDesc":
                    sort={price:-1}
                    break;
                case "popularity":
                    sort={rating:-1};
                    break;
                default:
                    break;
            }
        }

        // fetch product and apply sorting limit

        let products = await Product.find(query).find(query)
            .sort(sort)
            .limit(Number(limit)||0);
            res.json(products);
            
    } catch (error) { 
        console.error(error);
        res.status(500).send("server error")
        
    }
});
// @route GET /api/products/best-seller
// @desc Retrieve the highest rating
// @access public

router.get("/best-seller",async (req,res) => {
    try {
        const bestSeller = await Product.findOne().sort({rating:-1});
        if (bestSeller) {
            res.json(bestSeller);
        } else {
            res.status(404).json({message:"No best seller found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// @route GET /api/products/new-arrival
// @desc Retrieve latest 8 product -date
// @access public

router.get("/new-arrivals",async(req,res)=>{
    try{
        const newArrivals = await Product.find().sort({createdAt: -1}).limit(8);
        res.json(newArrivals);

    }catch(error){
        console.error(error);
        res.status(500).send("Server Error")
        
    }
})

// @route GET /api/products/:id
// @desc Get a single product by ID
//  @acess Public 

router.get("/:id", async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
            res.status(404).json({message:"product Not Found"})
        }
    }catch(error){
        console.error(error);
        res.status(500).send("server error");
        
    }
})


// @route GET /api/peoducts/similar/:id
// @desc Retrieve siilar peoducts
// access Public

router.get("/similar/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(id);

    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Products not found"});
        }
        const similarProducts = await Product.find({
            _id:{$ne:id},
            gender:product.gender,
            category:product.category,
        }).limit(4);

        res.json(similarProducts)
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")
        
    }
     
})




module.exports = router;
