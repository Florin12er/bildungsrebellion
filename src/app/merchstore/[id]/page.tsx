// page.tsx
"use client";

import { ProductGrid } from "@/app/merchstore/[id]/_components/product-grid";
import { products } from "./products";
import { useState, useEffect, useMemo } from "react";
import { ProductInfo } from "@/app/merchstore/[id]/_components/product-info";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

async function getParams(paramsPromise: Promise<{ id: string }>) {
    return await paramsPromise;
}

export default function ProductPage({ params }: Props) {
    const [id, setId] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getParams(params).then(({ id }) => setId(id));
    }, [params]);

    const product = useMemo(() => products.find(p => p.id.toString() === id), [id]);

    if (!id) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
    );

    if (!product) return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Produkt nicht gefunden!</h2>
            <p className="text-gray-300">Die von Ihnen gesuchte Bildungs-Revolution existiert nicht (noch nicht!).</p>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ProductGrid product={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                <ProductInfo product={product} quantity={quantity} setQuantity={setQuantity} />
            </div>

            {/* Related products section */}
            <div className="mt-24 border-t border-gray-800 pt-12">
                <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                    <FaFire className="text-red-500 mr-3" />
                    Weitere revolutionäre Produkte
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products
                        .filter(p => p.id.toString() !== id)
                        .slice(0, 4)
                        .map(product => (
                            <div key={product.id} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500/50 transition-colors">
                                <Link href={`/merchstore/${product.id}`} className="block">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="font-medium text-white">{product.title}</h4>
                                        <p className="text-red-400 font-bold mt-1">
                                            {product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2)}€
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </motion.div>
    );
}