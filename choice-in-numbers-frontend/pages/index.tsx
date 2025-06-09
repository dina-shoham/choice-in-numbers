import type { NextPage } from 'next';
import Button from '../components/Button';
import InputBlack from '../components/InputBlack';
import InputAccentColour from '../components/InputAccentColour';
import { useState } from 'react';
import Select from '../components/Select';
import Postcard from '../components/Postcard';
import Card from '../components/Card';
import { Address } from '../types/Address';

const Home: NextPage = () => {

  const [ inputText, setInputText ] = useState('Type here');
    const [ selected, setSelected ] = useState('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
      if (event.target.value === '') {
        setInputText('Type here');
      }
    };
  
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(event.target.value);
    };

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
    <div className="p-4"> 
      <h1>Home</h1>
        <Card>
          <Button ButtonText="Click Me" OnClick={() => console.log("clicked")} />
          <InputBlack InputText={inputText} OnChange={handleInputChange} />
          <InputAccentColour InputText="Type Here" OnChange={() => console.log("typing")} />
          <Select Placeholder='Select an option'
                  Options={['Option 1', 'Option 2', 'Option 3']}
                  OnChange={handleSelectChange}>
          </Select>
        </Card>
        
        <div>
          <Postcard Sender={senderAddress} Recipient={recipientAddress} Message="my message"></Postcard>
        </div>
        {/* <div className="h-100"></div> */}
    </div>
  );
};
export default Home;