// Component for social media links

// Note: .map() used to loop through links array and render each link as an anchor tag.
//       key prop used for each link to help React identify items in list and optimize rendering.

const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/benjaminlien/" },
    { name: "GitHub", href: "https://github.com/lewfi" },
    { name: "Spotify", href: "https://open.spotify.com/user/lulify_?si=9de70972f6a747e9" },
    { name: "Resume", href: "https://docs.google.com/document/d/1yWLIhhOSMvaKH6PxjRCu1Siht6F5ADCH1PZkE_3qP9g/edit?usp=sharing"}
]

export default function Socials() {
    return (
        <div className="text-sm text-zinc-500 flex gap-8">     
            {links.map((link) => (
                <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-500"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}