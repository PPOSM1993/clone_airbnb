interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, className }) => {
    return (
        <>
            <div
                onClick={onClick}
                className={`w-full py-3 bg-airbnb hover:bg-airbnb-dark text-white text-center transition cursor-pointer ${className}`}

            >
                {label}
            </div>
        </>
    )
}

export default CustomButton;