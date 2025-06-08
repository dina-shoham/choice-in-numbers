import { Address } from '../types/Address';

interface InputProps {
  Sender: Address;
  Recipient: Address;
  Message: String;
}

export default function Postcard({Sender, Recipient, Message}: InputProps): React.JSX.Element {
    return (
        <div className="w-120 h-80 bg-accent-dark p-4 text-white flex flex-row text-xs">
            {/* left side */}
            <div className="flex-50 pr-4 items-center">
                <div className="w-50"><p>{Sender.name}</p></div>
                <div className="w-50"><p>{Sender.streetAddress}</p></div>
                <div className="w-50"><p>{Sender.city}, {Sender.stateOrProvince}</p></div>
                <div className="w-50"><p>{Sender.country}  {Sender.zipCode}</p></div>
                <div className="h-2"></div>
                <p className="p-2">
                    {Message}
                </p>
            </div>
            {/* middle divider */}
            <div className="flex-0 border-l">

            </div>
            {/* right side */}
            <div className="flex-50 pl-4">
                <div className="h-40"></div>
                <div className="border-b w-50"><p>{Recipient.name}</p></div>
                <div className="border-b w-50 pt-1"><p>{Recipient.streetAddress}</p></div>
                <div className="border-b w-50 pt-1"><p>{Recipient.city}, {Recipient.stateOrProvince}</p></div>
                <div className="border-b w-50 pt-1"><p>{Recipient.country}  {Recipient.zipCode}</p></div>   
            </div>
        </div>
    );
};