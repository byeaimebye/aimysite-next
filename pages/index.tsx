import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import { LayoutNavBar } from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <div className={styles.center}>
                <h1 className={styles.title}>Aimy Site</h1>
                <Image
                    alt="logo"
                    height={100}
                    width={100}
                    src="/favicon.ico"
                ></Image>
            </div>
            <Link href="/about">About me</Link>
        </>
    )
}
