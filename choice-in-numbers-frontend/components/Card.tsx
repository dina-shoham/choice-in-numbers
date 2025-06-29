import '../styles/globals.css';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card ({ children }: CardProps): React.JSX.Element {
    return (
        <div className='bg-grey-pale p-8 m-4 rounded-lg flex flex-col gap-2'>
            {children}
        </div>
    );
}