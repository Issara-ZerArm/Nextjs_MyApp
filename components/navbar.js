import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <nav>
            <div className="Logo">
                <Link href="/"><Image src="/cat.jfif" width={50} height={50} alt="logo"></Image></Link>

            </div>
            <Link href="/">หน้าแรก</Link> 
            <Link href="/about">เกี่ยวกับ</Link>
            <Link href="/products">ผลิตภัณฑ์</Link>

        </nav>
    )
}