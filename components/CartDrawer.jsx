import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Drawer, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";

export const CartDrawer = ({ openRight, closeDrawerRight, cart }) => {
    return (
        <>
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
                size={400}
            >
                <div className="mb-6 flex items-center justify-between">
                    <Badge content={cart?.length} color="green">
                        <IconButton>
                            <ShoppingCartIcon className="h-4 w-4" />
                        </IconButton>
                    </Badge>
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
                            <Link href="/checkout" className="flex flex-col gap-4">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="small-button normal-case"
                                >
                                    Checkout
                                </Button>
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="small-button bg-none border-none normal-case"
                                    variant="outlined"
                                    onClick={closeDrawerRight}
                                >
                                    Clear
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </Drawer>
        </>
    )
}