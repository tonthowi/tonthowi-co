import React from "react";
import { Dock, DockIcon } from "./lib/dock-effect";
import Link from './components/Link.jsx';
import GitHubIcon from './images/GitHubIcon.jsx';
import NoteIcon from './images/NoteIcon.jsx';
import LinkedinIcon from './images/LinkedinIcon.jsx';

const MenuIcon = ({ href, icon: IconComponent, label, ...props }) => {
    return (
        <Link
            className="flex items-center space-x-2 text-white"
            href={href}
        >
            <IconComponent className="w-5 h-5" {...props} />
            <span className="text-white font-Display text-xs">{label}</span>
        </Link>
    );
};

export default function DockMenu() {
    return (
        <div className="relative">
            <Dock direction="middle">
                <DockIcon>
                    <MenuIcon href="https://github.com/tonthowi" icon={GitHubIcon} label="GitHub" />
                </DockIcon>
                <DockIcon>
                    <MenuIcon href="https://read.cv/tonthowi" icon={NoteIcon} label="Resume" />
                </DockIcon>
                <DockIcon>
                    <MenuIcon href="https://www.linkedin.com/in/tonthowi-al-ahyar/" icon={LinkedinIcon} label="LinkedIn" />
                </DockIcon>
            </Dock>
        </div>
    );
}