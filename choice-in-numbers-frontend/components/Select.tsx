import '../styles/globals.css';

interface SelectProps {
    Placeholder: string;
    Options: string[];
    OnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ Placeholder, Options, OnChange }: SelectProps): React.JSX.Element {
    return (
        <select 
            className="border-b-2 border-black focus:outline-none focus:border-accent-dark text-black placeholder:text-grey-dark hover:cursor-pointer"
            onChange={OnChange}
        >
            <option value="" selected disabled>{Placeholder}</option>
            {Options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
}