import Head from 'next/head';
import styles from '@/styles/Layout.module.scss';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Open_Sans } from '@next/font/google'

const open = Open_Sans({ subsets: ['latin'] });

type Props = {
  children: JSX.Element,
};

const Layout = ({children}: Props) => {
  return (
    <div>
      <Head>
        <title>MELI Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <NavBar />
      <main className={`${styles.main} ${open.className}`}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;