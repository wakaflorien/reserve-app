'use client';
import Image from "next/image";
import {
    Button,
    Card,
    Input,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Tooltip,
    Typography
} from "@/utils/material_tailwind";
import {Icon} from "@iconify/react";
import {ChevronDownIcon, RocketLaunchIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import Link from "next/link";

const menuItems = [
    {
        title: "Tables",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "Looks",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Chairs",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];
export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleSearch = () => {
        console.log("Search value")
    }
    return (
        <div className="z-10">
            <div className="flex flex-row justify-between px-20 items-center h-[10vh]">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="UNQUR Logo"
                        className=""
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
                <div className="w-3/4">
                    <Input label="What are you looking for?"
                           icon={<Icon icon="akar-icons:search" className="cursor-pointer"/>}
                           onClick={(event) => handleSearch(event)}/>
                </div>
                <div className="flex flex-row space-x-4 items-center cursor-pointer">
                    <Tooltip placement="bottom" className="border border-primary bg-white px-4 py-3 shadow-xl" content={
                        <div className="w-fit">
                            <p className="font-normal text-primary">Login</p>
                        </div>
                    }>
                        <Link href="/authentication">
                            <Icon icon="basil:user-outline" color="#766957"/>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="bottom" className="border border-primary bg-white px-4 py-3 shadow-xl" content={
                        <div className="w-fit">
                            <p className="font-normal text-primary">Favorites</p>
                        </div>
                    }>
                        <Icon icon="tdesign:heart" color="#766957"/>
                    </Tooltip>
                    <Tooltip placement="bottom" className="border border-primary bg-white px-4 py-3 shadow-xl" content={
                        <div className="w-fit">
                            <p className="font-normal text-primary">View cart</p>
                        </div>
                    }>
                        <Icon icon="mdi:cart-outline" color="#766957"/>
                    </Tooltip>
                </div>
            </div>
            <nav className="flex w-full bg-primary h-[7vh] justify-evenly">
                <Link href="/">
                    <Button
                        variant="text"
                        color='white'
                        className="flex items-center gap-3 text-base font-normal normal-case tracking-normal rounded-none h-full">
                        Home
                    </Button>
                </Link>
                <Menu open={openMenu} handler={setOpenMenu} allowHover={true}>
                    <MenuHandler>
                        <Button
                            variant="text"
                            color='white'
                            className="flex items-center gap-3 text-base font-normal normal-case tracking-normal rounded-none"
                        >
                            Rent furniture & decor{" "}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${
                                    openMenu ? "rotate-180" : ""
                                }`}
                            />
                        </Button>
                    </MenuHandler>
                    <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                        <Card
                            color="gray"
                            shadow={false}
                            variant="gradient"
                            className="col-span-3 grid h-full w-full place-items-center rounded-md"
                        >
                            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28"/>
                        </Card>
                        <ul className="col-span-4 flex w-full flex-col gap-1">
                            {menuItems.map(({title, description}) => (
                                <a href="#" key={title}>
                                    <MenuItem className="hover:bg-transparent hover:scale-105">
                                        <Typography variant="h6" className="mb-1 text-primary">
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="font-normal hover:text-secondary"
                                        >
                                            {description}
                                        </Typography>
                                    </MenuItem>
                                </a>
                            ))}
                        </ul>
                    </MenuList>
                </Menu>
                <Button
                    variant="text"
                    color='white'
                    className="flex items-center gap-3 text-base font-normal normal-case tracking-normal rounded-none">
                    Rent catering
                </Button>
                <Button
                    variant="text"
                    color='white'
                    className="flex items-center gap-3 text-base font-normal normal-case tracking-normal rounded-none">
                    Rent a look
                </Button>

            </nav>
        </div>
    )
}