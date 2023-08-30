import styles from "@/styles/About.module.css"
import Image from "next/image"
import Head from "next/head"

export default function About() {
    return (
        <>
            <Head>
                <title>เกี่ยวกับเรา | ออนไลน์ Shopping</title>
                <meta name="keywords" content="shopping, online" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>เกี่ยวกับเรา</h1>
                <Image src="/sit.jpg" alt="cat" width={300} height={300} />


            </div>

        </>
    )
}