"use client";

import { ProductGrid} from "@/app/merchstore/[id]/_components/product-grid";
import { products } from "./products";
import { useState, useEffect, useMemo } from "react";
import {ProductInfo} from "@/app/merchstore/[id]/_components/product-info";

interface Props {
    params: Promise<{ id: string }>;
}

async function getParams(paramsPromise: Promise<{ id: string }>) {
    return await paramsPromise;
}



// 🏠 Main Product Page Component
export default function ProductPage({ params }: Props) {
    const [id, setId] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getParams(params).then(({ id }) => setId(id));
    }, [params]);

    const product = useMemo(() => products.find(p => p.id.toString() === id), [id]);

    if (!id) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductGrid product={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                <ProductInfo product={product} quantity={quantity} setQuantity={setQuantity} />
            </div>
        </div>
    );
}
