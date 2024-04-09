import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Main(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).gagarin_hack}</title>
        <meta name='description' content={setLocale(router.locale).gagarin_hack} />
        <meta property='og:title' content={setLocale(router.locale).gagarin_hack} />
        <meta property='og:description' content={setLocale(router.locale).gagarin_hack} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
