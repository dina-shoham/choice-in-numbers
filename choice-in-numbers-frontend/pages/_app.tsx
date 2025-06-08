import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
