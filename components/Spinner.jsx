import {
    Spinner
} from "@/utils/material_tailwind";

export const LoadingSpinner = () => {
    return ( 
    <main className="h-[70vh] w-full flex items-center justify-center">
            <Spinner className="h-6 w-6 text-primary" />
        </main>
    )
}