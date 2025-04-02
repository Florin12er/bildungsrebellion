import { Button } from "@/components/ui/button";
import { Truck} from "lucide-react";
interface ProductProps {
    product: any;
    quantity: number;
    setQuantity: (q: number) => void;
}
export function ProductInfo({ product, quantity, setQuantity }: ProductProps) {
    return (
        <div>
            <div className="mb-4">
                {product.tag && (
                    <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-md text-xs font-bold inline-block mb-2">
                        {product.tag}
                    </span>
                )}
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <div className="flex items-center mt-2">
                    {product.salePrice ? (
                        <>
                            <span className="text-2xl font-bold text-red-600">{product.salePrice.toFixed(2)}€</span>
                            <span className="ml-2 text-gray-500 line-through">{product.price.toFixed(2)}€</span>
                            <span className="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                                -{Math.round((1 - product.salePrice / product.price) * 100)}%
                            </span>
                        </>
                    ) : (
                        <span className="text-2xl font-bold">{product.price.toFixed(2)}€</span>
                    )}
                </div>
            </div>

            <div className="prose max-w-none mb-6">
                <p className="text-gray-700">{product.longDescription}</p>
            </div>

            <div className="mb-6">
                <div className="flex items-center mb-4">
                    <label className="mr-2 font-medium">Menge:</label>
                    <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border rounded px-3 py-1"
                    >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-3">
                    <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-6 text-lg"
                        onClick={() => alert("Vielen Dank für Ihr Interesse! (Dies ist ein Schulprojekt)")}
                    >
                        JETZT KAUFEN
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 text-lg"
                        onClick={() => alert("Artikel wurde zum Warenkorb hinzugefügt! (Simuliert)")}
                    >
                        IN DEN WARENKORB
                    </Button>
                </div>
            </div>

            <div className="border-t pt-4">
                <div className="flex items-center text-gray-600">
                    <Truck className="w-5 h-5 mr-2"/>
                    <span>Lieferung in {product.deliveryDays} Werktagen</span>
                </div>
            </div>
        </div>
    );
}
