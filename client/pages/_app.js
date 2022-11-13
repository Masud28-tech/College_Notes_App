import { UserContextProvider } from '../context/UserContext';
import Script from 'next/script';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserContextProvider>      
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/716877afa3.js" crossOrigin="anonymous" />
    </UserContextProvider>
  );
}

export default MyApp
