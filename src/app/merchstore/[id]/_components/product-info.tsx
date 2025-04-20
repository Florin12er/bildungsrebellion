// product-info.tsx
import { Button } from "@/components/ui/button";
import { Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProductProps {
    product: any;
    quantity: number;
    setQuantity: (q: number) => void;
}

export function ProductInfo({ product, quantity, setQuantity }: ProductProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white"
        >
            {/* Tag & Title */}
            <div className="mb-6">
                {product.tag && (
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
            {product.tag}
          </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.title}</h1>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                    {product.salePrice ? (
                        <>
              <span className="text-3xl font-bold text-red-400">
                {product.salePrice.toFixed(2)}€
              </span>
                            <span className="text-lg text-gray-400 line-through">
                {product.price.toFixed(2)}€
              </span>
                            <span className="ml-auto bg-red-900/70 text-red-100 px-3 py-1 rounded-full text-sm">
                -{Math.round((1 - product.salePrice / product.price) * 100)}%
              </span>
                        </>
                    ) : (
                        <span className="text-3xl font-bold">
              {product.price.toFixed(2)}€
            </span>
                    )}
                </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300">{product.longDescription}</p>
            </div>

            {/* Features */}
            {product.features && (
                <div className="mb-8">
                    <h3 className="font-bold text-lg mb-3">Merkmale:</h3>
                    <ul className="space-y-2">
                        {product.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Quantity & Buttons */}
            <div className="mb-8">
                <div className="flex items-center mb-6">
                    <label className="mr-3 font-medium">Menge:</label>
                    <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border border-gray-600 bg-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-4">
                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-6 text-lg shadow-lg hover:shadow-red-500/30 transition-all"
                        onClick={() => alert("Vielen Dank für Ihr Interesse! (Dies ist ein Schulprojekt)")}
                    >
                        JETZT KAUFEN
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-red-500 text-red-500 hover:bg-red-900/20 hover:text-red-400 py-6 text-lg"
                        onClick={() => alert("Artikel wurde zum Warenkorb hinzugefügt! (Simuliert)")}
                    >
                        IN DEN WARENKORB
                    </Button>
                </div>
            </div>

            {/* Delivery Info */}
            <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center text-gray-400">
                    <Truck className="w-6 h-6 mr-3 text-red-400"/>
                    <div>
                        <p className="font-medium">Lieferung in {product.deliveryDays} Werktagen</p>
                        <p className="text-sm mt-1">Kostenloser Rückversand innerhalb von 30 Tagen</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}