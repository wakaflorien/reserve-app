'use client'
import { Suspense, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@/utils/material_tailwind";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/Spinner";

export default function Explore() {
    const router = useRouter()

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

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
            <header className="flex flex-col items-center justify-center px-2 py-4">
                <Typography variant="h4" color="blue-gray">
                    Explore All
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Discover the favourites of our design and planning team and get the style straight to your location.
                    Rent the Look!
                </Typography>
            </header>
            <>
                {loading ? <LoadingSpinner /> :
                    <Suspense fallback={<LoadingSpinner />} >
                        <figure className="px-2 lg:px-20 grid lg:grid-cols-4 place-items-center space-y-4 lg:space-y-8">
                            {products && products.map((item, index) =>
                                <Card className="w-full lg:w-80 lg:h-96 shadow-none border" key={index}>
                                    <CardHeader shadow={false} floated={false} className="h-96 hover:scale-110 ease-in duration-300 cursor-pointer">
                                        <img
                                            src={item.images[0]}
                                            alt="card-image"
                                            className="h-full w-full object-cover"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <div className="mb-2 flex items-center justify-between">
                                            <Typography color="blue-gray" className="font-medium">
                                                {item.title}
                                            </Typography>
                                            <Typography color="blue-gray" className="font-medium">
                                                Rwf {item.price}
                                            </Typography>
                                        </div>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-normal opacity-75"
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-primary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 normal-case font-normal"
                                            onClick={() => {
                                                router.push(`/explore/id=${item.id}`)
                                            }}
                                        >
                                            View more info
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )}
                        </figure>
                        <Button variant="outlined" ripple={false} className="w-fit border-primary self-center my-8 normal-case font-normal" >Load more ...</Button>
                        <br />
                    </Suspense>
                }
            </>
        </main>
    )
}
