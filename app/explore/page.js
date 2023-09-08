'use client'
import {Suspense, useEffect, useState} from "react";
import {Header} from "@/components/Header";
import {Button, Card, CardBody, CardFooter, Typography} from "@/utils/material_tailwind";
import Loading from "@/app/explore/loading";
import {useRouter, usePathname, useSearchParams} from "next/navigation";

export default function Explore() {
    const router = useRouter()

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const options = {method: 'GET', headers: {'User-Agent': 'Insomnia/2023.5.7'}};
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
            <Header/>
            <header className="flex flex-col items-center justify-center py-4">
                <Typography variant="h4" color="blue-gray">
                    Explore All
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Discover the favourites of our design and planning team and get the style straight to your location.
                    Rent the Look!
                </Typography>
            </header>
            {loading && <Loading/>}
            {!loading && (<Suspense fallback={<Loading/>}>
                <figure className="px-20 pb-20 grid grid-cols-3">
                    {products && products.map((item, index) =>
                        <Card key={index} className="mt-6 w-80 rounded-none shadow-none border">
                            <img
                                src={item.images[2]}
                                alt="card-image"
                                className="h-52 w-full object-cover border-b"
                            />
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {item.title}
                                </Typography>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button className="bg-primary normal-case font-normal" ripple={false}
                                        onClick={() => {
                                            router.push(`/explore/id=${item.id}`)
                                        }
                                }
                                >
                                    ViewMore
                                </Button>
                            </CardFooter>
                        </Card>)}
                </figure>
            </Suspense>)}
        </main>
    )
}
