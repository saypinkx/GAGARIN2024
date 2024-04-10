import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { HomePage } from "../../page_components/HomePage/HomePage";
import { useEffect, useState } from 'react';
import { pageHelper } from '../../helpers/pages.helper';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../features/store/store';


function Home(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state: AppState) => state.user.user);

  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
      pageHelper('other', router, dispatch, setIsAuth);
  }, [router, dispatch]);

  if (isAuth) {
    return (
      <>
          <Head>
              <title>{setLocale(router.locale).gagarin_hack + ' - ' + user.username}</title>
              <meta name='description' content={setLocale(router.locale).gagarin_hack + ' - ' + user.username} />
              <meta property='og:title' content={setLocale(router.locale).gagarin_hack + ' - ' + user.username} />
              <meta property='og:description' content={setLocale(router.locale).gagarin_hack + ' - ' + user.username} />
              <meta charSet="utf-8" />
          </Head>
          <HomePage />
      </>
    );
  } else {
      return (
        <></>
      );
  }
}

export default Home;
