import { ActiveLink } from "./ActiveLink"
import styles from "@/styles/Home.module.css"

const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
]
export const LayoutNavBar = () => {
    return (
        <nav className={styles.navBar}>
            {menuItems.map((i, index) => (
                <ActiveLink key={index} text={i.text} href={i.href} />
            ))}
        </nav>
    )
}
