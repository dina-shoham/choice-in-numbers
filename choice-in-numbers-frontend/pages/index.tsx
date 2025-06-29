import type { NextPage } from 'next';
import Button from '../components/Button';
import InputBlack from '../components/InputBlack';
import InputAccentColour from '../components/InputAccentColour';
import { useState } from 'react';
import Select from '../components/Select';
import Postcard from '../components/Postcard';
import Card from '../components/Card';
import { Address } from '../types/Address';
import '../styles/globals.css'
import TextArea from '../components/TextArea';
import CarouselCustom from '../components/CarouselCustom';

const Home: NextPage = () => {

  // const [ inputText, setInputText ] = useState('Type here');
  // const [ selected, setSelected ] = useState('');
    
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputText(event.target.value);
  //   if (event.target.value === '') {
  //     setInputText('Type here');
  //   }
  // };

  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelected(event.target.value);
  // };

  const senderAddress: Address = {
    name: "Jane Doe",
    streetAddress: "123 Main St",
    city: "Toronto",
    stateOrProvince: "ON",
    zipCode: "M5J 2N1",
    country: "Canada"
  };

  const recipientAddress: Address = {
    name: "John Doe",
    streetAddress: "123 Rue Main",
    city: "Montreal",
    stateOrProvince: "QC",
    zipCode: "H2X 2H2",
    country: "Canada"
  };


  return (
    <div className="p-4 m-4 gap-4 flex flex-col items-center"> 
      <h1>Home</h1>
      <div className="w-260">
        <CarouselCustom>
          <div className="embla__slide p-4">
            <Postcard
            Sender={senderAddress}
            Recipient={recipientAddress}
            Message="111111111111111111111111. This is postcard 1, one of three"/>
          </div>
          <div className="embla__slide p-4">
            <Postcard
            Sender={senderAddress}
            Recipient={recipientAddress}
            Message="222222222222222222222222. This is postcard 2, two of three"/>
          </div>
          <div className="embla__slide p-4">
            <Postcard
            Sender={senderAddress}
            Recipient={recipientAddress}
            Message="3333333333333333333333333. This is postcard 3, three of three"/>
          </div>
        </CarouselCustom>
      </div>
    </div>
  );
};
export default Home;