import MerchItem from "@/app/merchstore/_components/merch_item";
import { Input } from "@/components/ui/input";
import { products } from "./products";


export default function Merchstore() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 bg-gradient-to-r from-red-600 to-blue-600 p-4 text-center text-white shadow-lg">
                <h1 className="text-2xl font-bold uppercase tracking-wider">
                    ⚡ Massives Angebot! 30% Rabatt ⚡
                </h1>
                <p className="mt-2 animate-pulse text-lg">
                    Nur noch 3 Tage!!! Jetzt zuschlagen!!!
                </p>
            </div>

            <div className="mb-8 max-w-md mx-auto">
                <Input
                    placeholder="Suche nach Revolution..."
                    className="border-2 border-gray-800 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <MerchItem key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}