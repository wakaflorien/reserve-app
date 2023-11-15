'use client';
import { Suspense, useEffect, useState } from "react";
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
    Typography, Button, Breadcrumbs, Card,
    CardHeader,
    CardBody,
    CardFooter
} from "@/utils/material_tailwind";
import { Header } from "@/components/Header";
import { Wrapper } from "@/components/layout/Layout";
import Image from "next/image";
import { LoadingSpinner } from "@/components/Spinner";
import { CartDrawer } from "@/components/CartDrawer";
export default function Favourite() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState([]);
    const [openRight, setOpenRight] = useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    const addToCart = (product) => {
        setCart([...cart, product]);
        openDrawerRight();
    };
    const deleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const options = { method: 'GET', headers: { 'User-Agent': 'Insomnia/2023.5.7' } };
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=6&select=id,title,price,description,images', options)
            .then(response => response.json())
            .then((response) => {
                setProducts(response.products)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [loading])
    return (
        <main className="main">
            <>
                <CartDrawer openRight={openRight} closeDrawerRight={closeDrawerRight} cart={cart} />
                <Header />
                {
                    loading ? <LoadingSpinner /> :
                        <Suspense fallback={<LoadingSpinner />} >
                            <Wrapper>
                                <Breadcrumbs
                                    separator="›"
                                    className="bg-transparent my-4 lg:px-20">
                                    <a href="/" className="text-black hover:text-primary opacity-60">
                                        Home
                                    </a>
                                    <a href="/explore" className="text-black hover:text-primary opacity-60">
                                        Explore
                                    </a>
                                    <a href="#" className="text-black hover:text-primary opacity-60">
                                        Favorites
                                    </a>
                                </Breadcrumbs>
                                <div className="w-full mb-10">
                                    <h1 className="text-[#475569] text-4xl font-bold opacity-80 text-center my-9">
                                        My Favs
                                    </h1>
                                </div>
                                {products?.length === 0 && (
                                    <div className="flex items-center justify-center">
                                        <p className="text-[#475569] text-xl font-normal opacity-50 text-center my-9">
                                            No products found!, Click <Link href="/explore" className="text-primary font-bold">here</Link> to return to explore.
                                        </p>
                                    </div>
                                )}
                                <div className="grid xl:grid-cols-3 min-w-full gap-4 lg:gap-16">
                                    {products?.map((item, index) => (
                                        <div
                                            key={`index-${index}`}
                                            className={`flex flex-col border p-2 lg:p-8 text-[#475569] gap-2 lg:gap-4 rounded-md animate-fade-up`}
                                        >
                                            {item.images[0] && <Image src={item.images[0]} alt="image" width={200} height={200}
                                                className="w-full h-full lg:h-[300px] object-cover" />}
                                            <div className="flex justify-between">
                                                {item.title && (
                                                    <Typography color="blue-gray" className="font-medium">
                                                        {item.title}
                                                    </Typography>

                                                )}
                                                {item.price && (
                                                    <Typography color="blue-gray" className="font-medium">
                                                        {item.price} Rwf
                                                    </Typography>
                                                )}
                                            </div>
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className={` flex-grow font-normal opacity-75 ${item.default && "text-white"}`}>
                                                {item.description}
                                            </Typography>
                                            <div className={"flex justify-between"}>
                                                <Button
                                                    ripple={false}
                                                    className="bg-primary small-button"
                                                    onClick={() => addToCart(item)}
                                                >
                                                    Add To Cart
                                                </Button>
                                                <Button
                                                    className="small-button"
                                                    onClick={() => deleteProduct(item.id)}>Delete
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Wrapper>
                        </Suspense>
                }
            </>
        </main>
    )
}