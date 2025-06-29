import '../styles/globals.css';

interface TextAreaProps {
    Label: string;
    Placeholder: string
    CharLimit: number;
    OnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ Label, Placeholder, CharLimit, OnChange }: TextAreaProps): React.JSX.Element {
    return (
        <div className="gap-2 flex flex-col">
            <label htmlFor="textarea" className="block text-sm text-gray-700">
                {Label}
            </label>
            <textarea 
                className="border-b-1 border-black focus:outline-none focus:border-accent-dark text-black placeholder:text-grey-dark" 
                rows={5} 
                cols={45}
                maxLength={CharLimit}
                placeholder={Placeholder}
                onChange={OnChange}>
                    Your comment here
            </textarea>
        </div>
    );
}