import { Navbar, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import { ActiveLink } from "./ActiveLink"
import Link from "next/link"

const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
]
export const LayoutNavBar = () => {
    const { isDark } = useTheme()
    return (
        <Navbar css={{ backgroundColor: "black" }} isBordered={isDark}>
            <Link href="/">
                <Navbar.Brand>
                    <Image
                        alt="logo"
                        height={60}
                        width={60}
                        src="/favicon.ico"
                    />
                    <Text
                        h3
                        b
                        css={{
                            marginLeft: "20px",
                            textGradient: "45deg, $blue600 -20%, $pink600 50%"
                        }}
                        hideIn="xs"
                    >
                        Aimy js
                    </Text>
                </Navbar.Brand>
            </Link>

            <Navbar.Content>
                {menuItems.map((i, index) => (
                    <ActiveLink key={index} text={i.text} href={i.href} />
                ))}
            </Navbar.Content>
        </Navbar>
    )
}
