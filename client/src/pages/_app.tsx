import Layout from '@/components/Layout';
import { Context } from '@/store/store';

import '@/styles/globals.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
};
