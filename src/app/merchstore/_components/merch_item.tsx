"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MerchItemProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    salePrice?: number;
    tag?: string;
}

export default function MerchItem({ id, title, description, imageUrl, price, salePrice, tag }: MerchItemProps) {
    return (
        <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 flex flex-col h-full">
            <CardHeader className="relative p-0 flex-1">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-96 object-cover rounded-t-lg"
                />

                {tag && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                        {tag}
                    </div>
                )}
            </CardHeader>

            <div className="p-4 flex-1">
                <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
                <CardDescription className="mt-2 text-gray-600 line-clamp-2">
                    {description}
                </CardDescription>

                <CardContent className="p-0 mt-4">
                    <div className="flex items-center gap-2">
                        {salePrice ? (
                            <>
                                <p className="text-lg font-bold text-blue-600">{salePrice.toFixed(2)}€</p>
                                <p className="text-sm text-gray-500 line-through">{price.toFixed(2)}€</p>
                                <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                    -{Math.round((1 - salePrice/price) * 100)}%
                                </span>
                            </>
                        ) : (
                            <p className="text-lg font-bold">{price.toFixed(2)}€</p>
                        )}
                    </div>
                </CardContent>
            </div>

            <CardFooter className="p-4 pt-0 gap-2 flex flex-col sm:flex-row">
                <div className="flex-1 flex flex-col gap-2">

                <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                    onClick={() => alert("Psst... Schulprojekt! Aber danke fürs Interesse!")}
                >
                    In den Warenkorb
                </Button>
                <Button variant="outline" className="w-full">
                    <Link href={`/merchstore/${id}`}>Details ansehen</Link> {/* Fixed template literal */}
                </Button>
                </div>
            </CardFooter>
        </Card>
    );
}