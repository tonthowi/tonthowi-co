import SocialMenu from './social-menu.jsx';
import ShineBorder from '../lib/shine-border.jsx';

import GitHubIcon from '../images/GitHubIcon.jsx';
import NoteIcon from '../images/NoteIcon.jsx';
import LinkedinIcon from '../images/LinkedinIcon.jsx';

const MeCard = () => {

    const socials = [
        {
            label: 'Resume',
            href: 'https://read.cv/tonthowi',
            icon: NoteIcon
        },
        { 
            label: 'GitHub',
            href: 'https://github.com/tonthowi',
            icon: GitHubIcon
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/tonthowi-al-ahyar/',
            icon: LinkedinIcon
        },
    ]

    return (
        <div className="mx-auto max-w-xl justify-center mt-24 overflow-hidden rounded-lg">
        <ShineBorder
            className="bg-black overflow-hidden"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
        <div className="px-4 py-5 sm:p-6 flex flex-1 flex-col space-y-8 z-50">
          <div className="flex flex-1 flex-col space-y-1">
            <h2 className="text-xl font-medium text-white">
            Tonthowi Al Ahyar
            </h2>
            <p className="text-xs text-white">UI Designer & Developer</p>
          </div>
          <div className="text-sm text-white/70 space-y-4">
            <p>Driven by curiosity and a love for greatness, high-quality and thoughtful design. Pushing the boundaries and creating something truly unique and meaningful.
            </p>
            <p>
            Currently working for <a href="https://accelbyte.io" className="text-white/100 underline hover:text-blue-500 transition">AccelByte, Inc</a>, exploring different side projects and learning more about front-end development.
            </p>
          </div>        
          <SocialMenu socials={socials}/>
        </div>
      </ShineBorder>
      </div>
    )
}

export default MeCard;