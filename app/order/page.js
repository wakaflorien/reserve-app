'use client'
import { TrashIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import {
    Typography, Button
} from "@/utils/material_tailwind";
import Link from "next/link";

export default function Guest() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState({});
    const [sortingCriterion, setSortingCriterion] = useState("price");
    const options = { method: 'GET', headers: { 'User-Agent': 'Insomnia/2023.5.7' } };
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=6&select=id,title,price,description,images', options)
            .then(response => response.json())
            .then((response) => {
                setProducts(response.products);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [loading]);
    const sortProducts = (criterion) => {
      if (criterion === "price") {
          // return products.sort((a, b) => a.price - b.price);
      } else if (criterion === "name") {
          return products.sort((a, b) => a.title.localeCompare(b.title));
      } else if (criterion === "date") {
          return products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
  };
const sortedProducts = sortProducts(sortingCriterion);

    const incrementQuantity = (productId) => {
        const updatedCart = { ...cart };
        if (updatedCart[productId]) {
            updatedCart[productId] += 1;
        } else {
            updatedCart[productId] = 1;
        }
        setCart(updatedCart);
    };

    const decrementQuantity = (productId) => {
      const updatedCart = { ...cart };
      if (updatedCart[productId] > 1) {
          updatedCart[productId] -= 1;
      } else {
          delete updatedCart[productId]; 
      }
      setCart(updatedCart);
  };
    const deleteProduct = (productId) => {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    };
    const calculateTotalPrice = () => {
        let total = 0;
        for (const productId in cart) {
            const product = products.find(item => item.id === productId);
            if (product) {
                total += product.price * cart[productId];
            }
        }
        return total;
    };

    return (
        <main className="lg:flex justify-between p-4 sm:block md:block">
            <div className="w-full lg:px-20">
                <Link href="/explore">
                    <h3 className='flex text-[14px] text-primary mb-2'>
                        <ArrowLeftIcon className="h-4 w-8  text-primary" />
                        <Typography variant={"small"} className={"font-normal"}>Continue Shopping</Typography>
                    </h3>
                </Link>
                <Typography className="font-bolder">Shopping cart</Typography>
                <Typography className="flex justify-between text-[12px]">
                    <h2>You have {Object.keys(cart).length} items in your cart</h2>
                    <Typography className="text-[12px] mb-4">
                        Sort by:
                        <select
                            className="font-bold pl-2 outline-none"
                            onChange={(e) => setSortingCriterion(e.target.value)}
                        >
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                            <option value="date">Date</option>
                        </select>
                    </Typography>
                </Typography>
                <figure className="block">
                    {products && products.map((item, index) =>
                        <div className="flex border rounded-[8px] mb-4 p-2 justify-between" key={index}>
                            <div shadow={false} floated={false} className="h-18  ">
                                <img
                                    src={item.images[0]}
                                    alt="card-image"
                                    className="h-20 w-20 object-cover rounded-[8px]"
                                />
                            </div>
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <Typography color="blue-gray" className="font-medium">
                                        {item.title}
                                    </Typography>
                                </div>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="font-normal opacity-75"
                                >
                                    6.1-inch OLED (2200 x 1080; 90Hz)
                                </Typography>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    className="w-2 h-4 bg-transparent text-black shadow-none p-[3px] hover:shadow-none"
                                    onClick={() => decrementQuantity(item.id)}
                                >
                                    -
                                </Button>
                                <h2 className="border w-6 h-6 border-primary text-[12px] rounded-lg text-center">
                                    {cart[item.id] || []}
                                </h2>
                                <Button
                                    className="w-2 h-4 bg-transparent text-black shadow-none p-[3px] hover:shadow-none"
                                    onClick={() => incrementQuantity(item.id)}
                                >
                                    +
                                </Button>
                            </div>
                            <div className='flex gap-6 '>
                                <TrashIcon
                                    className="h-5 w-5 text-red-500 cursor-pointer"
                                    onClick={() => deleteProduct(item.id)}
                                />
                                <Typography className="font-bold text-[12px]">
                                    Rwf {item.price}
                                </Typography>
                            </div>
                        </div>
                    )}
                </figure>
            </div>
            <div className="bg-primary rounded-lg p-4 text-black">
                <Typography>
                    Card Details
                </Typography>
                <div className="">
                    <Typography className="text-sm">Payment method</Typography>
                    <Typography className="flex justify-between">
                        <img src="https://www.theofficialboard.com/img/twitterCompanyBigImages/44365.jpg"
                            className="w-12 h-12 rounded-lg"
                            alt="image" />
                       
                    </Typography>
                    <Typography className="font-light text-sm pt-2">*182*8*1*00000*</Typography>
                    <input type="number" placeholder=" Amount " className="rounded-[8px] outline-none h-8 w-72 text-[13px] pl-2" />
                    <div className="flex justify-between ">
                        <div><Typography className="font-light text-sm pt-2">Expiration Date</Typography>
                            <input type="date" placeholder="01/10/2023" className="rounded-[8px] outline-none text-[13px] w-[132px] pl-2 h-8 text-gray-400" />
                        </div>
                        <div><Typography className="font-light text-sm pt-2">CVV</Typography>
                            <input type="text" placeholder="xxx" className="rounded-[8px] outline-none w-[132px] h-8 text-[13px] pl-2" />
                        </div>
                    </div>
                </div>
                <Typography>
                    <div className="mt-6 text-sm mb-4">
                        <div className="flex justify-between"> <h1>Total:</h1>
                            <h2>Rwf {calculateTotalPrice()}</h2></div>
                        <div className="flex justify-between"> <h1>Delivery:</h1>
                            <h2>Rwf 12.00</h2></div>
                        <div className="flex justify-between"> <h1>Discount:</h1>
                            <h2>Rwf 0.00</h2></div>
                        <Button className="hover:bg-primary-400 mt-4">Checkout</Button>
                    </div>
                </Typography>
            </div>
        </main>
    )
}
