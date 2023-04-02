import MainLayout from "@/components/layouts/MainLayout"
import "@/styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </NextUIProvider>
    )
}
