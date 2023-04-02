import Link from "next/link"
import { useRouter } from "next/router"
const styleSelect = {
    color: "red",
    border: "1px solid pink",
    borderRadius: "10px",
    padding: "10px"
}
const styleUnselect = {
    borderRadius: "10px",
    padding: "10px"
}
export const ActiveLink = ({ text, href }) => {
    const { asPath } = useRouter()
    return (
        <Link href={href} style={asPath === href ? styleSelect : styleUnselect}>
            {text}
        </Link>
    )
}
