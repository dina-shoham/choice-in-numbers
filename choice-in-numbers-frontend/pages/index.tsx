import type { NextPage } from 'next';
import Button from '../components/Button';
import InputBlack from '../components/InputBlack';
import InputAccentColour from '../components/InputAccentColour';
import { useState } from 'react';
import Select from '../components/Select';
import Chevron from '../components/Chevron';

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
  

  return (
    <div> 
      <h1>Home</h1>
        <div>
          <Button ButtonText="Click Me" OnClick={() => console.log("clicked")} />
        </div>
        <div>
          <InputBlack InputText={inputText} OnChange={handleInputChange} />
        </div>
        <div>
          <InputAccentColour InputText="Type Here" OnChange={() => console.log("typing")} />
        </div>
        <div>
          <Select Placeholder='Select an option'
                  Options={['Option 1', 'Option 2', 'Option 3']}
                  OnChange={handleSelectChange}>
          </Select>
        </div>
    </div>
  );
};
export default Home;