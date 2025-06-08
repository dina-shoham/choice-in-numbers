interface InputProps {
  Color: string;
  Orientation: 'up' | 'down' | 'left' | 'right';
}

export default function Chevron({Color, Orientation}: InputProps): React.JSX.Element {
    function getRotation(orientation: string): string {
        switch(orientation) {
            case 'up':
                return 'rotate(180)';
            case 'down':
                return 'rotate(0)';
            case 'left':
                return 'rotate(90)';
            case 'right':
                return 'rotate(270)';
            default:
                return 'rotate(0)'; 
        }
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke={Color} 
            height="18"
            cursor="pointer"
            transform={getRotation(Orientation)}
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                />
        </svg>
    )
};