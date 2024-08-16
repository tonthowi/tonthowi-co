
const MenuIcon = ({ href, icon: IconComponent, label, ...props }) => {
    return (
        <a
            className="flex items-center space-x-2 text-white hover:text-blue-500 transition"
            href={href}
        >
            <IconComponent className="w-5 h-5" {...props} />
            <span className="font-Display text-xs">{label}</span>
        </a>
    );
};

export default function SocialMenu({socials}) {

    return (
        <div className="justify-between md:justify-start lg:justify-start flex space-x-8">
            {socials.map((social) => (
                <div
                    key={social.label}
                    className="cursor-pointer items-center"
                >
                    <MenuIcon href={social.href} icon={social.icon} label={social.label} />
                </div>
            ))}
        </div>
    );
}