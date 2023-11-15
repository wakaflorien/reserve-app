import Link from "next/link";
import {Button} from "@/utils/material_tailwind";

export const ExploreContent = () => {
    return (
        <>
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-full text-center md:w-2/4 space-y-8">
                    <p className="text-white text-base lg:text-xl px-2">
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
        </>
    )
}