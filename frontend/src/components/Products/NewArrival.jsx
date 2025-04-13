import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrival() {
    const [newArrivals, setNewArrivals] = useState([]);

    // Fetch new arrivals data on mount
    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
                );
                setNewArrivals(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNewArrivals();
    }, []);

    // Reference for scrolling
    const scrollRef = useRef(null);
    // Extend the new arrivals list for scrolling effect
    const extendedArrivals = [...newArrivals, ...newArrivals, ...newArrivals];

    // Scroll logic for carousel
    const scroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.children[0]?.offsetWidth || 300;
            const scrollAmount = cardWidth + 24;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Smooth scroll animation
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollSpeed = 4; // Adjust speed (lower is slower)
        let animationId;

        const scrollAnimation = () => {
            if (container) {
                container.scrollLeft += scrollSpeed;

                const { scrollLeft, scrollWidth, clientWidth } = container;
                const middleSection = scrollWidth / 3;

                if (scrollLeft >= middleSection * 2) {
                    container.scrollLeft = middleSection - clientWidth;
                }

                animationId = requestAnimationFrame(scrollAnimation);
            }
        };

        animationId = requestAnimationFrame(scrollAnimation);

        // Cleanup on unmount
        return () => cancelAnimationFrame(animationId);
    }, [newArrivals]);

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 mb-8 relative">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Explore New Arrivals
                    </h2>
                    <p className="text-gray-600 mb-8 md:text-lg">
                        Discover the latest trends! Shop our newest arrivals and refresh
                        your wardrobe.
                    </p>
                </div>

                {/* Scroll buttons for desktop */}
                <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="p-3 rounded-full border bg-white text-black shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Scroll left"
                    >
                        <FiChevronLeft className="text-xl" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-3 rounded-full border bg-white text-black shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Scroll right"
                    >
                        <FiChevronRight className="text-xl" />
                    </button>
                </div>
            </div>

            {/* Scrollable container for new arrivals */}
            <div
                ref={scrollRef}
                className="container mx-auto px-4 flex overflow-x-scroll md:overflow-x-auto gap-6 pb-4 scrollbar-hide custom-scroll"
            >
                {extendedArrivals.map((product, index) => {
                    const imageUrl =
                        product.images?.[0]?.url ?? "https://via.placeholder.com/300x400?text=No+Image";
                    return (
                        <div
                            key={`${product._id}-${index}`}
                            className="flex-none w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 relative group"
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={imageUrl}
                                    alt={product.images[0]?.alt || product.name}
                                    className="w-full h-80 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="block hover:text-gray-200 transition-colors"
                                    >
                                        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                                        <p className="text-lg font-medium">${product.price}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Add Tailwind Custom CSS for Scrollbar Hiding */}
            <style>
                {`
                    .custom-scroll::-webkit-scrollbar {
                        display: none;
                    }
                    .custom-scroll {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}
            </style>
        </section>
    );
}

export default NewArrival;
