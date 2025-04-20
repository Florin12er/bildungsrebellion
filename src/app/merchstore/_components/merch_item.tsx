"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface MerchItemProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    salePrice?: number;
    tag?: string;
    className?: string;
}

export default function MerchItem({
                                      id,
                                      title,
                                      description,
                                      imageUrl,
                                      price,
                                      salePrice,
                                      tag,
                                      className
                                  }: MerchItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={className}
        >
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-700/30 bg-gray-800/50 hover:border-red-500/50 flex flex-col h-full overflow-hidden">
                {/* Image with tag */}
                <CardHeader className="relative p-0 flex-1 overflow-hidden">
                    <div className="relative w-full h-80 overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {tag && (
                        <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            {tag}
                        </div>
                    )}
                </CardHeader>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    <CardTitle className="text-xl font-bold text-white mb-2">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 line-clamp-2 mb-4">
                        {description}
                    </CardDescription>

                    <CardContent className="p-0 mt-auto">
                        <div className="flex items-center gap-3">
                            {salePrice ? (
                                <>
                                    <p className="text-xl font-bold text-red-400">
                                        {salePrice.toFixed(2)}€
                                    </p>
                                    <p className="text-sm text-gray-400 line-through">
                                        {price.toFixed(2)}€
                                    </p>
                                    <span className="ml-auto bg-red-900/70 text-red-100 text-xs px-2.5 py-1 rounded-full">
                                        -{Math.round((1 - salePrice/price) * 100)}%
                                    </span>
                                </>
                            ) : (
                                <p className="text-xl font-bold text-white">
                                    {price.toFixed(2)}€
                                </p>
                            )}
                        </div>
                    </CardContent>
                </div>

                {/* Footer with buttons */}
                <CardFooter className="p-5 pt-0 gap-3 flex flex-col">
                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold shadow-lg group-hover:shadow-red-500/30 transition-all"
                        onClick={() => alert("Psst... Schulprojekt! Aber danke fürs Interesse!")}
                    >
                        <FaShoppingCart className="mr-2" />
                        In den Warenkorb
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-gray-600 hover:border-red-500 hover:text-red-500 text-black"
                    >
                        <Link
                            href={`/merchstore/${id}`}
                            className="flex items-center justify-center w-full"
                        >
                            <FaInfoCircle className="mr-2" />
                            Details ansehen
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}