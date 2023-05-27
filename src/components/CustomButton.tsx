import React from 'react';
interface ButtonProps {
    onClick: () => void;
    label: string;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, icon }) => {
    return (
        <button
            type="button"
            className="text-white border-2 border-[#445059] rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 m-2 hover:bg-primary"
            onClick={onClick}>
            {icon}
            <p className="text-md text-grey">{label}</p>
        </button>
    );
};

export default Button;
