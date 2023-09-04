'use client'
import {Header} from "@/components/Header";
import {Suspense, useEffect, useState} from "react";
import {useRouter, usePathname} from "next/navigation";
import Image from "next/image";
import {ImageLoader} from "@/app/page";
import Loading from "@/app/explore/loading";

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
                    <figure className="px-20 my-10 h-[65vh] w-full">
                        {/*{console.log("props", product)}*/}
                        <img
                            src={product && product.images[2]}
                            alt="image 2"
                            className="h-full w-1/2 object-cover border"
                        />
                    </figure>
                </Suspense>
            )}
        </main>
    )
}