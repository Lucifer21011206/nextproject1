import Link from "next/link"
import GuestLayout from "../layout/GuestLayout"
export default function home () {
    return (
        <GuestLayout>
        <h1>Hello</h1>
        <p>Welcome to the Home Page</p>
        <nav>
            <ul>
                <li>
                    <Link href="/about">about</Link>
                </li>
            </ul>
        </nav>
        </GuestLayout>
    )
}