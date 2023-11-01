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
    Typography,
    IconButton,
    Collapse,
    Navbar
} from "@/utils/material_tailwind";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import Link from "next/link";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/outline";

export function Header () {
    const [openMenu, setOpenMenu] = useState(false);
    const handleSearch = () => {
        console.log("Search value")
    }
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth >= 960 && setOpenNav(false);
        });
    }, []);

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

    const navList = (
        <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md text-primary"
            >
                <Link href="/explore">Home</Link>
            </Typography>
            <Typography
                variant="small"
                className="p-1 font-normal text-md text-primary">
                <Link href="/"> Rent furniture & decor</Link>
            </Typography>
            <Typography
                variant="small"
                className="p-1 font-normal text-md text-primary">
                <Link href="/explore"> Rent catering</Link>
            </Typography>
            <Typography
                variant="small"
                className="p-1 font-normal text-md text-primary">
                <Link href="/explore"> Rent a look</Link>
            </Typography>
            <Typography
                variant="small"
                className="p-1 font-normal text-md text-primary">
                <Link href="/explore"> Baloons</Link>
            </Typography>

        </ul>
    );

    const navItems = [
        {
            title: "Rent a look",
            link: "/explore"
        },
        {
            title: "Rent catering",
            link: "/explore"
        },
        {
            title: "Baloons",
            link: "/explore"
        },

    ]

    return (
        <Navbar
            variant="filled"
            shadow={false}
            color="black"
            fullWidth={false}
            blurred={true}
            className="mx-auto h-fit w-full max-w-screen-3xl rounded-none py-2 px-4 lg:px-0 lg:py-0 sticky top-0 z-40">
            <div className="mx-auto flex items-center justify-between text-blue-gray-900 lg:px-20 lg:py-4 ">
                <div className="flex space-x-1">
                    <IconButton
                        variant="text"
                        className="mr-auto p-4 h-8 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6 text-primary"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-primary"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                    <Image
                        src="/logo.svg"
                        alt="UNQUR Logo"
                        className="self-end"
                        width={100}
                        height={24}
                        priority
                    />
                </div>
                <div className="flex flex-row gap-4 lg:w-2/3">
                    <div className="w-full hidden lg:inline">
                        <Input label="What are you looking for?"
                               icon={<Icon icon="akar-icons:search" className="cursor-pointer"/>}
                               onClick={(event) => handleSearch(event)}/>
                    </div>
                    <div className="flex flex-row space-x-4 items-center cursor-pointer">
                        <Tooltip placement="bottom" className="border border-primary bg-white px-4 py-3 shadow-xl"
                                 content={
                                     <div className="w-fit">
                                         <p className="font-normal text-primary">Login</p>
                                     </div>
                                 }>
                            <Link href="/authentication">
                                <Icon icon="basil:user-outline" color="#766957"/>
                            </Link>
                        </Tooltip>
                        <Tooltip placement="bottom" className="border border-primary bg-white px-4 py-3 shadow-xl"
                                 content={
                                     <div className="w-fit">
                                         <p className="font-normal text-primary">Favorites</p>
                                     </div>
                                 }>
                            <Link href="/favourite">
                                <Icon icon="tdesign:heart" color="#766957"/>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-full justify-evenly bg-primary lg:px-0">
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
                                className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
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
                {navItems.map((item, index) =>
                    <Link key={index} href={item.link}>
                        <Button
                            key={index}
                            variant="text"
                            color='white'
                            className="flex items-center gap-3 text-base font-normal normal-case tracking-normal rounded-none">
                            {item.title}
                        </Button>
                    </Link>
                )}
            </div>
            <Collapse open={openNav}>
                <div className="w-full my-4">
                    <Input label="What are you looking for?"
                           icon={<Icon icon="akar-icons:search" className="cursor-pointer"/>}
                           onClick={(event) => handleSearch(event)}/>
                </div>
                {navList}
            </Collapse>
        </Navbar>
    )
}