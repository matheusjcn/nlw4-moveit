import { ThemeContextProvider } from '../contexts/ThemeContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
