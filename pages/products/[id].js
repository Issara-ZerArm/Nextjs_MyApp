import Head from "next/head"
import Image from "next/image"
import Styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()

    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    console.log(data)
    return {
        props: { product: data }
    }


}

export default function ProductDetail({ product }) {


    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>

            <div className={Styles.container}>
                <div>
                    <Image src={product.thumbnail} width={300} height={300} alt={product.title} />

                </div>

                <div className={Styles.detail}>
                    <h1>ชื่อสินค้า : {product.title}</h1>
                    <h1>ราคา : {product.price}</h1>
                    <h2>หมวดหมู่ : {product.category}</h2>
                    <h3>แบรนด์ : {product.brand}</h3>
                    <h4>ข้อมูลพิ้นฐาน : {product.description}</h4>
                    <h4>Rating : {product.rating}</h4>
                </div>


            </div>
        </>
    )
}