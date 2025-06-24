'use client'

import React, { useEffect, useState } from "react";

type Section = {
    id: string;
    label: string;
};

export const Header = () => {
    const sections: Section[] = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex justify-center items-center sticky top-3 z-10">
            <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/15 backdrop-blur'>
                {sections.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`nav-item ${activeSection === id ? 'nav-item-active' : ''}`}
                        onClick={(e) => handleClick(e, id)}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    );
};