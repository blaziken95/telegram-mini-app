import React from 'react';

type Props = {
    title: string;
    icon: string;
    callback: () => void;
};

const ConnectButton: React.FC<Props> = ({ title, icon, callback }) => {
    return (
        <div
            className="flex items-center justify-center bg-customBlueButton text-white py-3 px-5 rounded-xl border-none text-base font-semibold whitespace-nowrap"
            onClick={callback}
        >
            <div className="flex flex-shrink-0 items-center justify-center h-7 w-11 mr-3">
                <img className="max-h-full max-w-full" src={icon} alt="" />
            </div>

            <span className="flex-grow text-center -ml-9">{title}</span>
        </div>
    );
};

export default ConnectButton;
