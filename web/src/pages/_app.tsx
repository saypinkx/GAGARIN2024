import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{setLocale(router.locale).gagarin_hack}</title>
        <meta name='description' content={setLocale(router.locale).gagarin_hack} />
        <meta property='og:title' content={setLocale(router.locale).gagarin_hack} />
        <meta property='og:description' content={setLocale(router.locale).gagarin_hack} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/vercel.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
