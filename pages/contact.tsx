import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import { LayoutNavBar } from "@/components/NavBar"

export default function About() {
    return (
        <>
            <div className={styles.center}>
                <h1 className={styles.title}>Contact me</h1>
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
