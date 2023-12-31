'use client'
import Image from 'next/image'
import {
    Button,
    Carousel
} from "../utils/material_tailwind"
import {Header} from "@/components/Header";
import Link from "next/link";
import {ExploreContent} from "@/components/ExploreContent";

export const ImageLoader = ({src, width, quality}) => {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
    return (
        <main className="main">
            <Header/>
            <figure className="flex-1 h-full">
                <Carousel transition={{duration: 2}} className="rounded-none"
                          autoplay={true}
                          autoplayDelay={5000}
                          loop={true}
                          navigation={({setActiveIndex, activeIndex, length}) => (
                              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                  {new Array(length).fill("").map((_, i) => (
                                      <span
                                          key={i}
                                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                          }`}
                                          onClick={() => setActiveIndex(i)}
                                      />
                                  ))}
                              </div>
                          )}
                >
                    <div className="relative h-full w-full">
                        <Image
                            loader={ImageLoader}
                            src="photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            // width={500}
                            // height={500}
                            fill={true}
                            className="object-cover"
                        />
                        <ExploreContent />
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
                        <ExploreContent />
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
                        <ExploreContent />
                    </div>
                </Carousel>
            </figure>
        </main>
        )
}
