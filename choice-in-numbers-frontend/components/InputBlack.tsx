import '../styles/globals.css';

interface InputProps {
  InputText: string;
  OnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ InputText, OnChange }: InputProps): React.JSX.Element {
    return (
        <input
            type="text"
            placeholder={InputText}
            className="border-b-2 border-black focus:outline-none focus:border-accent-dark text-black placeholder:text-grey-dark"
            onChange={OnChange}
        />
    );
}