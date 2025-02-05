import React from 'react';
import TeamCard from './TeamCard';

export default function TeamSection() {

    const teamMembers = [
        {
            name: "Hudson O'Donnell",
            title: "Founder & CEO",
            description: "Hudson leads the team with a visionary approach, combining strategic thinking and innovative solutions to deliver exceptional results.",
            image: "./team-member-1.jpeg",
        },
        {
            name: "Jaci Thompson",
            title: "Creative Director",
            description: "Jaci brings a creative flair to every project, ensuring each design and campaign is both visually stunning and impactful.",
            image: "./team-member-2.jpeg",
        },
    ];

    return (
        <>
            <div id="about"></div>
            <div className="flex justify-center items-center mt-12">
                <div className="text-center mt-24">
                    <h2 className="text-4xl sm:text-6xl font-bold font-mono">Meet the Team</h2>
                    <hr className="w-[35vw] h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm"></hr>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto p-8 sm:p-20">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </>
    );
}
