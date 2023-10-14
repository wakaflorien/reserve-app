'use client'
import { Header } from "@/components/Header";
import { useState } from "react";
import {
    Typography, Button, Breadcrumbs, Card,
    CardHeader,
    CardBody,
    CardFooter
} from "@/utils/material_tailwind";
import Link from "next/link";

export default function Cart() {
    return (
        <main className="main">
            <header>
                <Header />
            </header>
            <div className="flex-1 h-full">
                <Breadcrumbs
                    separator="›"
                    className="bg-transparent mx-10 my-4">
                    <a href="/" className="text-black hover:text-primary opacity-60">
                        Home
                    </a>
                    <a href="/explore" className="text-black hover:text-primary opacity-60">
                        Explore
                    </a>
                    <a href="#" className="text-black hover:text-primary opacity-60">Your Cart</a>
                </Breadcrumbs>
                
                <div className="flex flex-col w-full items-center justify-center space-y-8">
                    <Typography variant="lead">
                        Shopping cart
                    </Typography>
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
            </div>
        </main>
    )
}