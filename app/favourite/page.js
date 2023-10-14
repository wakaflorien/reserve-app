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
export default function Favourite(){
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState([]);  
    const addToCart = (product) => {
      setCart([...cart, product]);
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
return(
    
  <main>
  <Link href="/cart">
            <h3 className='flex text-[14px] text-primary mb-2 mt-2'> <ArrowLeftIcon className="h-4 w-8  text-primary "/>Go to cart</h3>
            </Link>
    <figure className="px-2 lg:px-20 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 place-items-center space-y-4 lg:space-y-8">
                            {products && products.map((item, index) =>
                                <Card className="w-full lg:w-64 lg:h-96 shadow-none border" key={index}>
                                    <CardHeader shadow={false} floated={false} className="h-40 hover:scale-110 ease-in duration-300 cursor-pointer">
                                        <img
                                            src={item.images[0]}
                                            alt="card-image"
                                            className="h-24 w-full object-cover text-center "
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <div className="mb-2 flex items-center justify-between ">
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
                                            className="font-normal opacity-75 text-[14px]"
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0 flex justify-between">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-primary sm:pl-2 sm:pr-2 w-24 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 normal-case font-normal"
                                            onClick={() => addToCart(item)}
                                        >
                                           Add To Cart
                                        </Button>
                                        <Button  className="bg-black text-white shadow-none sm:pl-2 sm:pr-2 w-24 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 normal-case font-normal" 
                                        onClick={() => deleteProduct(item.id)}>
                                            Delete</Button>
                                    </CardFooter>
                                </Card>
                            )}
                        </figure>
    </main>
)
}