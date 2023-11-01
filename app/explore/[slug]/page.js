'use client'
import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
    Typography,
    Button,
    Radio,
    Breadcrumbs,
    Carousel
} from "@/utils/material_tailwind";
import { LoadingSpinner } from "@/components/Spinner";
import { Wrapper } from "@/components/layout/Layout";
import { Header } from "@/components/Header";
import { Card, CardBody, CardFooter, CardHeader, Drawer, IconButton } from "@material-tailwind/react";
import Link from "next/link";

export default function SingleProduct() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([]);
    const [openRight, setOpenRight] = useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    const options = { method: 'GET', headers: { 'User-Agent': 'Insomnia/2023.5.7' } };
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
        openDrawerRight();
    };
    return (
        <main className="main">
            <>
                <Drawer
                    placement="right"
                    open={openRight}
                    onClose={closeDrawerRight}
                    className="p-4"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            My Cart
                        </Typography>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={closeDrawerRight}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>

                    <div className="flex gap-2">
                        <Card className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                    <Typography color="blue-gray" className="font-medium">
                                        Apple AirPods
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium">
                                        $95.00
                                    </Typography>
                                </div>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="font-normal opacity-75"
                                >
                                    With plenty of talk and listen time, voice-activated Siri access, and
                                    an available wireless charging case.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link href="/order">
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    >
                                        Checkout
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </Drawer>

                <Header />
                {loading ? <LoadingSpinner /> :
                    <Suspense fallback={<LoadingSpinner />}>
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
                                <a href="#" className="text-black hover:text-primary opacity-60">Product</a>
                            </Breadcrumbs>
                            <div className="grid xl:grid-cols-3 min-w-full gap-4 lg:gap-16 px-0">
                                <Carousel
                                    transition={{ duration: 2 }} className="rounded-none w-fit"
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    loop={true}
                                    navigation={({ setActiveIndex, activeIndex, length }) => (
                                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                            {new Array(length).fill("").map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                                        }`}
                                                    onClick={() => setActiveIndex(i)}
                                                />
                                            ))}
                                        </div>
                                    )}
                                >
                                    {product?.images.map((item, index) =>
                                        <Image
                                            key={index}
                                            src={item}
                                            width={200}
                                            height={200}
                                            alt="image 1"
                                            className="h-full w-full object-cover border rounded-md"
                                        />
                                    )}
                                </Carousel>
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

                        </Wrapper>
                    </Suspense>
                }
            </>
        </main>
    )
}