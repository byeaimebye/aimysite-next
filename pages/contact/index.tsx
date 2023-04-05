import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"
import { LayoutNavBar } from "@/components/NavBar"

export default function About() {
    return (
        <>
            <div>
                <h1>Contact me</h1>
                <Image
                    alt="logo"
                    height={100}
                    width={100}
                    src="/favicon.ico"
                ></Image>
            </div>
            <Link href="/">go home</Link>
        </>
    )
}
