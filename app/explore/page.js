'use client'
import { Suspense, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumbs, Button, Typography } from "@/utils/material_tailwind";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/Spinner";
import { Wrapper } from "@/components/layout/Layout";
import Image from "next/image";

export default function Explore() {
    const router = useRouter()

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [start, setStart] = useState(0)
    const [finish, setFinish] = useState(3)

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
            <Header />
            <>
                {loading ? <LoadingSpinner /> :
                    <Suspense fallback={<LoadingSpinner />} >
                        <Wrapper>
                            <Breadcrumbs
                                separator="›"
                                className="bg-transparent my-4 lg:px-20">
                                <a href="/" className="text-black hover:text-primary opacity-60">
                                    Home
                                </a>
                                <a href="#" className="text-black hover:text-primary opacity-60">
                                    Explore
                                </a>
                            </Breadcrumbs>
                            <div className="w-full">
                                <h1 className="text-[#475569] text-4xl font-bold opacity-80 text-center my-9">
                                    Explore All
                                </h1>
                                <p className="text-[#475569] text-xl font-normal opacity-80 text-center my-9">
                                    Discover the favourites of our design and planning team and get the style straight to your location.
                                    Rent the Look!
                                </p>
                            </div>
                            <div className="grid xl:grid-cols-3 min-w-full gap-4 lg:gap-16">
                                {products.slice(start, finish).map((item, index) => (
                                    <div
                                        key={`index-${index}`}
                                        className={`flex flex-col border p-2 lg:p-8 text-[#475569] gap-2 lg:gap-4 rounded-md animate-fade-up`}
                                    >
                                        {item.images[0] && <Image src={item.images[0]} alt="image" width={200} height={200} className="w-full h-full lg:h-[300px] object-cover" />}
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
                                            className={`flex-grow font-normal opacity-75 ${item.default && "text-white"}`}>
                                            {item.description}
                                        </Typography>
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-primary w-fit small-button"
                                            onClick={() => {
                                                router.push(`/explore/id=${item.id}`)
                                            }}
                                        >
                                            View More
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </Wrapper>
                        <Button
                            // variant="solid" 
                            ripple={false}
                            onClick={() => finish === 3 ? setFinish(products?.length) : setFinish(3)}
                            className="self-center small-button" >{finish === 3 ? "Load more" : "Load less"}</Button>
                        <br />
                    </Suspense>
                }
            </>
        </main>
    )
}
