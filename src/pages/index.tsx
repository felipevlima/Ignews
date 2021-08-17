import Image from 'next/image'
import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Subscribebutton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

import Avatar from '../../public/images/avatar.svg'

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <Subscribebutton priceId={product.priceId}/>
        </section>
        {/* <progress max="100" value="80"/>
        <meter max="100" value="70"/> */}

        <Image src={Avatar} alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prices = await stripe.prices.retrieve('price_1JNT7NIRD2rPKcaAhxY3mO4y');

  const product = {
    priceId: prices.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(prices.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}