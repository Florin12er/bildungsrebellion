import Image from "next/image";

interface ProductGridProps {
    product: any;
    selectedImage: number;
    setSelectedImage: (index: number) => void;
}
export function ProductGrid({ product, selectedImage, setSelectedImage }: ProductGridProps ) {
    return (
        <div>
            <div className="rounded-lg border-2 border-gray-200 overflow-hidden mb-4">
                <Image
                    src={product.images[selectedImage]}
                    alt={product.title}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            <div className="grid grid-cols-4 gap-2">
                {product.images.map((img: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`rounded border-2 ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                    >
                        <Image
                            src={img}
                            alt={`${product.title} thumbnail ${index}`}
                            width={100}
                            height={100}
                            className="w-full h-20 object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
