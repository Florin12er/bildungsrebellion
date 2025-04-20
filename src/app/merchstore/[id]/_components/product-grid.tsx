// product-grid.tsx
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductGridProps {
    product: any;
    selectedImage: number;
    setSelectedImage: (index: number) => void;
}

export function ProductGrid({ product, selectedImage, setSelectedImage }: ProductGridProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-4"
        >
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden border-2 border-gray-700/50 mb-6 relative group">
                <Image
                    src={product.images[selectedImage]}
                    alt={product.title}
                    width={800}
                    height={800}
                    className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
                {product.images.map((img: string, index: number) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(index)}
                        className={`rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImage === index
                                ? 'border-red-500 shadow-lg shadow-red-500/20'
                                : 'border-gray-700 hover:border-gray-600'
                        }`}
                    >
                        <Image
                            src={img}
                            alt={`${product.title} thumbnail ${index}`}
                            width={200}
                            height={200}
                            className="w-full h-20 md:h-24 object-cover"
                        />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}