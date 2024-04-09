import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { AuthBlock } from '../../components/Auth/AuthBlock/AuthBlock';
import { Header } from '../../components/Common/Header/Header';
import { Footer } from '../../components/Common/Footer/Footer';


export const MainPage = (): JSX.Element => {    
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <Header />
                <AuthBlock />
                <Footer />
            </div>
        </>
    );
};
