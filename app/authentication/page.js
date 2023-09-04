'use client'
import {createElement, useState} from "react"
import {Header} from "@/components/Header";
import {
    Button,
    Card,
    Checkbox,
    Input,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography
} from "@/utils/material_tailwind";
import {
    UserCircleIcon,
    UserPlusIcon
} from "@heroicons/react/24/solid";

const data = [
    {
        label: "Signup",
        value: "signup",
        icon:UserPlusIcon,
    },
    {
        label: "Login",
        value: "login",
        icon: UserCircleIcon,
    }
]
export default function Login() {
    const [defaultTab, setDefaultTab] = useState("login")
    return (
        <main className="main">
            <Header/>
            <Tabs value={defaultTab}>
                <TabsHeader>
                    {data.map(({label, value, icon}) => (
                        <Tab key={value} value={value}>
                            <div className="flex items-center gap-2">
                                {createElement(icon, {className: "w-5 h-5"})}
                                {label}
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    <TabPanel key="signup" value="signup">
                        <Card color="transparent" shadow={false} className="flex items-center rounded-none">
                            <Typography variant="h4" color="blue-gray">
                                Sign Up
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input size="lg" label="Name"/>
                                    <Input size="lg" label="Email"/>
                                    <Input type="password" size="lg" label="Password"/>
                                </div>
                                <Checkbox
                                    label={
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                        >
                                            I agree the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-gray-900"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    }
                                    containerProps={{className: "-ml-2.5"}}
                                />
                                <Button className="mt-6 bg-primary normal-case" ripple={false} fullWidth>
                                    Register
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Already have an account?{" "}
                                    <a href="#" className="font-medium text-gray-900">
                                        Sign In
                                    </a>
                                </Typography>
                            </form>
                        </Card>
                    </TabPanel>
                    <TabPanel key="login" value="login">
                        <Card color="transparent" shadow={false} className="flex items-center rounded-none">
                            <Typography variant="h4" color="blue-gray">
                                Login
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Enter your credentials to login.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input size="lg" label="Email"/>
                                    <Input type="password" size="lg" label="Password"/>
                                </div>
                                <Button className="mt-6 bg-primary normal-case" ripple={false} fullWidth>
                                    Login
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Don&apos;t have an account?{" "}
                                    <a href="#" className="font-medium text-gray-900"
                                    >
                                        Sign Up
                                    </a>
                                </Typography>
                            </form>
                        </Card>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    )
}