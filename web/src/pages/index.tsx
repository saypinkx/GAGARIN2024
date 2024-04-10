import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { MainPage } from "../../page_components/MainPage/MainPage";
import { useEffect, useState } from 'react';
import { pageHelper } from '../../helpers/pages.helper';
import { useDispatch } from 'react-redux';


function Main(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
      pageHelper('index', router, dispatch, setIsAuth);
  }, [router, dispatch]);

  if (!isAuth) {
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
  } else {
      return (
        <></>
      );
  }
}

export default Main;
