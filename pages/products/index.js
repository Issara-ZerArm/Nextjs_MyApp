import Head from "next/head"
import Image from "next/image"
import Styles from "@/styles/Product.module.css"
import Link from "next/link"

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=200")
    const data = await res.json()

    return {
        props: { products: data.products }
    }
}

export default function Index({ products }) {
    return (
        <>
            <Head>
                <title>สินค้าทั้งหมด | ออนไลน์ Shopping</title>
                <meta name="keywords" content="shopping, online" />
            </Head>

            <div>

            </div>

            <div className={Styles.container}>
                {products.map(item => (
                    <div key={item.id}>
                        <Link href={'/products/' + item.id}>
                            <h2 className={Styles.title}>{item.title} | ราคา {Math.round(item.price * 34.30)} บาท</h2>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}