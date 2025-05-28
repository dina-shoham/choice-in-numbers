import { useState } from 'react';
import '../styles/globals.css';

interface ButtonProps {
  ButtonText: string;
  OnClick: () => void;
}

export default function Button({ ButtonText, OnClick }: ButtonProps): React.JSX.Element {
    return (
        <button className="text-white font-bold py-2 px-4 rounded-full bg-accent-dark hover:bg-accent-light hover:cursor-pointer" onClick={OnClick}>
            {ButtonText}
        </button>
    );
}