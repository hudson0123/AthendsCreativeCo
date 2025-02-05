import React from 'react';

function TeamCard({ member }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-3/5 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold font-mono mb-2">{member.name}</h3>
            <h4 className="text-xl font-semibold text-gray-600 mb-2">{member.title}</h4>
            <p className="text-lg font-sans text-gray-500 text-center">
                {member.description}
            </p>
        </div>
    );
}

export default TeamCard;
