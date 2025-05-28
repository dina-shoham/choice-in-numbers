import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../styles/globals.css'
import Button from '../components/Button';
import InputBlack from '../components/InputBlack';
import InputAccentColour from '../components/InputAccentColour';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {
  const [ inputText, setInputText ] = useState('Type here');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    if (event.target.value === '') {
      setInputText('Type here');
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
          <div>
            <Button ButtonText="Click Me" OnClick={() => console.log("clicked")} />
          </div>
          <div>
            <InputBlack InputText={inputText} OnChange={handleInputChange} Colour='accent-dark' />
          </div>
          <div>
            <InputAccentColour InputText="Type Here" OnChange={() => console.log("typing")} Colour='black' />
          </div>
      </main>
    </>
  );
}
