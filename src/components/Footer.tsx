import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { text: "Branding", href: "#" },
        { text: "Design", href: "#" },
        { text: "Marketing", href: "#" },
        { text: "Advertisement", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About us", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Jobs", href: "#" },
        { text: "Press kit", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of use", href: "#" },
        { text: "Privacy policy", href: "#" },
        { text: "Cookie policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      {footerSections.map((section, index) => (
        <nav key={index} className={index === 0 ? "items-center" : ""}>
          <h6 className="footer-title">{section.title}</h6>
          {section.links.map((link, linkIndex) => (
            <a key={linkIndex} className="link link-hover" href={link.href}>
              {link.text}
            </a>
          ))}
        </nav>
      ))}
    </footer>
  );
};

export default Footer;
