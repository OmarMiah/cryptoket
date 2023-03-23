/* eslint-disable jsx-quotes */
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import { Navbar, Footer } from '../components';
import '../styles/globals.css';
// eslint-disable-next-line react/function-component-definition

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute='class'>
    <div className='dark:bg-nft-dark bg-white min-h-screen'>
      <Navbar />
      <div className='pt-65'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script
      src='https://kit.fontawesome.com/42b16ae0e3.js'
      crossOrigin='anonymous'
    />
  </ThemeProvider>
);
export default MyApp;
