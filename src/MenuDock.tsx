import React from "react";
import { Dock, DockIcon } from "./lib/dock-effect";

import Link from './components/Link.jsx';
import GitHubIcon from './images/GitHubIcon.jsx'
import NoteIcon from './images/NoteIcon.jsx'

export default function DockMenu() {

    const MenuIcon = ({ href, icon: IconComponent, ...props }) => {
        return (
            <Link
                className="text-white w-6 h-6"
                href={href}
            >
                <IconComponent {...props} />
            </Link>
        )
    }
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
            <MenuIcon href="https://github.com/tonthowi" icon={GitHubIcon} />
        </DockIcon>
        <DockIcon>
            <MenuIcon href="https://read.cv/tonthowi" icon={NoteIcon} />
        </DockIcon>
      </Dock>
    </div>
  );
}
