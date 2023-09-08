'use client'
import {Header} from "@/components/Header";
import {Suspense, useEffect, useState} from "react";
import {useRouter, usePathname} from "next/navigation";
import Image from "next/image";
import {ImageLoader} from "@/app/page";
import Loading from "@/app/explore/loading";
import {
    Typography,
    Button
} from "@/utils/material_tailwind";

export default function SingleProduct() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const options = {method: 'GET', headers: {'User-Agent': 'Insomnia/2023.5.7'}};
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
    return (
        <main className="main">
            <Header/>
            {loading && <Loading/>}
            {!loading && (
                <Suspense fallback={<Loading/>}>
                    <figure className="px-20 my-10 h-[65vh] w-full grid grid-cols-2 space-x-8">
                        {/*{console.log("props", product)}*/}
                        <div className="">
                            <img
                                src={product && product.images[2]}
                                alt="image 2"
                                className="h-full w-full object-cover border"
                            />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="lead" className="text-xl">{product.title}</Typography>
                            <Typography variant="lead" className="text-lg">RWF {product.price}</Typography>
                            <Typography variant="lead" className="text-xs">Tax included.</Typography>
                            <Typography variant="lead" className="text-lg">Duration.</Typography>

                            <div className="flex w-max gap-4 normal-case">
                                <Button variant="filled" className="rounded-full">1 Day</Button>
                                <Button variant="outlined" className="rounded-full">3 Days</Button>
                                <Button variant="outlined" className="rounded-full">1 Week</Button>
                                <Button variant="outlined" className="rounded-full">1 Month</Button>
                                <Button variant="outlined" className="rounded-full">1 Year</Button>
                            </div>
                            <div className="flex w-1/2 h-10 items-center">
                                <input type="datetime-local" placeholder="Reserve your day" className="border p-1"/>
                            </div>
                            <Button variant="outlined" className="w-1/2 rounded-none normal-case">Book Now</Button>
                            <div className="space-y-4 divide-y">
                                <details>
                                    <summary>Materials</summary>
                                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                        international pavilions, award-winning fireworks and seasonal special
                                        events.</p>
                                </details>
                                <details>
                                    <summary>Shipping returns</summary>
                                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                        international pavilions, award-winning fireworks and seasonal special
                                        events.</p>
                                </details>
                                <details>
                                    <summary>Dimensions</summary>
                                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                        international pavilions, award-winning fireworks and seasonal special
                                        events.</p>
                                </details>
                                <details>
                                    <summary>Care instructions</summary>
                                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                        international pavilions, award-winning fireworks and seasonal special
                                        events.</p>
                                </details>

                            </div>
                        </div>
                    </figure>
                </Suspense>
            )}
        </main>
    )
}