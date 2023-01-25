import Head from 'next/head';
import styles from '@/styles/Layout.module.scss';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
})

type Props = {
  children: JSX.Element,
};

const Layout = ({children}: Props) => {
  return (
    <div>
      <Head>
        <title>MELI Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <main className={`${styles.main} ${roboto.className}`}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;