import Layout from '@/components/Layout';
import { ContextProvider } from '@/store/store';

import '@/styles/globals.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
};
