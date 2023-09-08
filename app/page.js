'use client'
import Image from 'next/image'
import {
    Button,
    Carousel
} from "../utils/material_tailwind"
import {Header} from "@/components/Header";
import Link from "next/link";

export const ImageLoader = ({src, width, quality}) => {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
    return (
        <main className="main">
            <Header />
            <figure className="flex h-[83vh]">
                <Carousel ClassName="rounded-xl">
                    <div className="relative h-full w-full">
                        <Image
                            loader={ImageLoader}
                            src="photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-full text-center md:w-2/4 space-y-8">
                                <p className="text-white text-xl">
                                    Welcome to UNIQUR! We&apos;re your partners in making small gatherings
                                    extraordinary. From delightful birthdays to heartwarming family get-togethers,
                                    charming
                                    bridal showers, and adorable baby showers, we specialize in crafting unforgettable
                                    moments for events of up to 30 people. Let&apos;s turn your intimate events into
                                    unforgettable memories!
                                </p>
                                <div className="flex justify-center gap-2">
                                    <Link href="/explore">
                                        <Button size="lg" color="white">
                                            Explore
                                        </Button>
                                    </Link>
                                    <Button size="lg" color="white" variant="text">
                                        Gallery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <Image
                            loader={ImageLoader}
                            src="photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative h-full w-full">
                        <Image
                            loader={ImageLoader}
                            src="photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </Carousel>
            </figure>
        </main>)
}
