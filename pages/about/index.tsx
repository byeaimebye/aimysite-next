import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <>
            <div>
                <h1>About me</h1>
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
