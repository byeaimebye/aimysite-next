import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"
import { Button, Card, Text } from "@nextui-org/react"
import { ImageCard } from "../components/card/imageCard"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <div>
                <Text color="white" size={44}>
                    Aimy Site
                </Text>
                <Image
                    alt="logo"
                    height={100}
                    width={100}
                    src="/favicon.ico"
                ></Image>
            </div>
            <Link href="/pokeapi">
                <ImageCard
                    title="PokeApi"
                    subTitle="Typical PokeApi with Next, nothing new but you know."
                />
            </Link>
        </>
    )
}
