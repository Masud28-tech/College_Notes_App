import Script from 'next/script';
import { UserContextProvider } from '../context/UserContext';
import { NotesContextProvider } from '../context/NotesContext';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserContextProvider>
      <NotesContextProvider>

        <Component {...pageProps} />
        <Script src="https://kit.fontawesome.com/716877afa3.js" crossOrigin="anonymous" />

      </NotesContextProvider>
    </UserContextProvider>
  );
}

export default MyApp
