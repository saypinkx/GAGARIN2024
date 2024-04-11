import styles from './HomePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { Header } from '../../components/Common/Header/Header';
import { UserDataBlock } from '../../components/User/UserDataBlock/UserDataBlock';


export const HomePage = (): JSX.Element => {
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
                <UserDataBlock />
                <Footer />
            </div>
        </>
    );
};
