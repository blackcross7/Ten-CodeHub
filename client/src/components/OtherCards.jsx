import React from 'react';

const OtherCards = ({ title, color }) => {
    return (
        <div className={`group flex flex-col text-xl p-4 border rounded-md hover:shadow-md ${color}`}>
            <span className="text-white font-bold truncate overflow-hidden whitespace-nowrap">
                {title}
            </span>
            <div className="flex justify-end w-full">
                <button className="text-white group-hover:bg-white group-hover:text-black group-hover:rounded-full group-hover:px-2 group-hover:transition-all duration-300">
                    ➜
                </button>
            </div>
        </div>
    );
};

export default OtherCards;
