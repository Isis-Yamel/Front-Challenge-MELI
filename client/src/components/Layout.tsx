import Head from 'next/head';
import styles from '@/styles/Layout.module.scss';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Open_Sans } from '@next/font/google'
import { useEffect, useContext } from 'react';
import { StoreContext } from '@/store/store';
import { DataContext } from '@/types/itemTypes';

const open = Open_Sans({ subsets: ['latin'] });

type Props = {
  children: JSX.Element,
};

const signAuthor = {
  author: {
    name: 'Isis',
    lastName: 'Salamanca'
  }
}

const Layout = ({children}: Props) => {
  const { setToken } = useContext(StoreContext) as DataContext;
 // as we do not have login, I am authenticate on app load
  useEffect(() => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8", 
      },
      body: JSON.stringify(signAuthor)
    })
      .then((response) => response.json())
      .then((token) => setToken(token))
  }, []);

  return (
    <div>
      <Head>
        <title>MELI Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Frontend Challenge Search Mercado Libre"/>
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