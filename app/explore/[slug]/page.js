'use client'
import { Header } from "@/components/Header";
import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { ImageLoader } from "@/app/page";
import {
    Typography,
    Button,
    Radio,
    Breadcrumbs
} from "@/utils/material_tailwind";
import Link from "next/link";
import { LoadingSpinner } from "@/components/Spinner";

export default function SingleProduct() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([]);
    const options = { method: 'GET', headers: { 'User-Agent': 'Insomnia/2023.5.7' } };
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const id = pathname.split("=")[1]

        fetch(`https://dummyjson.com/products/${id}`, options)
            .then(response => response.json())
            .then((response) => {
                setProduct(response)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [pathname])
    const reserveProduct = () => {
        if (product) {
          const updatedCart = [...cart, product];
          setCart(updatedCart);
        }
      };
    return (
        <main className="main">
            <header>
                <Header />
            </header>
            {loading ? <LoadingSpinner /> :
                <Suspense fallback={<LoadingSpinner />}>
                    <figure className="flex-col px-2 lg:space-x-20 h-full w-full">
                        <Breadcrumbs
                            separator="›"
                            className="bg-transparent my-4 lg:px-20">
                            <a href="/" className="text-black hover:text-primary opacity-60">
                                Home
                            </a>
                            <a href="/explore" className="text-black hover:text-primary opacity-60">
                                Explore
                            </a>
                            <a href="#" className="text-black hover:text-primary opacity-60">Product</a>
                        </Breadcrumbs>
                        <div className="flex flex-col lg:flex-row lg:w-1/3 gap-10">
                            <img
                                src={product && product?.images[2]}
                                alt="image 2"
                                className="h-full w-full object-cover border rounded-md"
                            />
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="qty">Qty : </label>
                                    <input type="number" className="h-10 w-1/3 border p-2" defaultValue={0} />
                                </div>
                                <Typography variant="lead" className="text-xl">{product.title}</Typography>
                                <div>
                                    <Typography variant="lead" className="text-md">RWF {product?.price}</Typography>
                                    <Typography variant="lead" className="text-xs">Tax included.</Typography>
                                </div>
                                <Typography variant="lead" className="text-md">Duration.</Typography>

                                <div className="space-y-4">
                                    <div className="flex w-1/2 h-10 items-center">
                                        <label htmlFor="date">Pickup Date : </label>
                                        <input type="datetime-local" placeholder="Reserve your day" className="h-10 w-1/2 border p-2" />
                                    </div>
                                    <Button variant="contained" onClick={reserveProduct}
                                    className="h-10 w-1/3 rounded-md normal-case my-4 bg-primary">Reserve</Button>
                                    <div className="space-y-4 divide-y">
                                        <details>
                                            <summary>Materials</summary>
                                            <p>Epcot.</p>
                                        </details>
                                        <details>
                                            <summary>Shipping returns</summary>
                                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting
                                                attractions,
                                                international pavilions, award-winning fireworks and seasonal special
                                                events.</p>
                                        </details>
                                        <details>
                                            <summary>Dimensions</summary>
                                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting
                                                attractions,
                                                international pavilions, award-winning fireworks and seasonal special
                                                events.</p>
                                        </details>
                                        <details>
                                            <summary>Care instructions</summary>
                                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting
                                                attractions,
                                                international pavilions, award-winning fireworks and seasonal special
                                                events.</p>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </figure>
                </Suspense>
            }
        </main>
    )
}