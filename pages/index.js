import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | ออนไลน์ Shopping</title>
        <meta name="keywords" content="shopping, online"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรก</h1>
        <Image src="/catloading.jpg" alt="cat" width={300} height={300} />
        <br />
        <Link href="/products" className={styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>

    </>
  )
}
