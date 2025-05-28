import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {  
  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
