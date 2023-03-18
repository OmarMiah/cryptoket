import '../styles/globals.css';

// eslint-disable-next-line react/function-component-definition

const MyApp = ({ Component, pageProps }) => (
  <div>
    <h1>NAVBAR</h1>
    <Component {...pageProps} />
    <h1>FOOTER</h1>
  </div>
);
export default MyApp;
