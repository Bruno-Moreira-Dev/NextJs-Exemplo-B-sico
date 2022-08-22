import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
      <meta name="description" content="Encontre a melhor roupa para você"></meta>
    </Head>
    <div className={styles.title}>
      <h1>Hello World Next.js</h1>
      <Image src="/images/city.jpg" width={400} height={500} alt="Cidade a noite" />
    </div>
  </>
}
