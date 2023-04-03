import { ActiveLink } from "../ActiveLink"
import styles from "@/styles/Home.module.css"
import {
    Navbar,
    Button,
    Link,
    Text,
    Card,
    Spacer,
    Radio,
    useTheme
} from "@nextui-org/react"

const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
]
export const LayoutNavBar = () => {
    return (
        <>
            {menuItems.map((i, index) => (
                <ActiveLink key={index} text={i.text} href={i.href} />
            ))}
        </>
    )
}
