import github from "../assets/socials/github.png";
import linkedin from "../assets/socials/linkedIn.svg";
import instagram from "../assets/socials/instagram.svg";

const socials = [
  {
    name: "GitHub",
    icon: github,
    href: "https://github.com/lavishmeena2764",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/lavish-meena/",
  },
  {
    name: "Instagram",
    icon: instagram,
    href: "https://www.instagram.com/lavish__meena/",
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-between gap-5 pb-6 text-sm text-secondary max-w-7xl mx-auto px-6">
      {/* Gradient Divider */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent h-[1px] w-full" />

      {/* Links */}
      <div className="flex gap-2">
        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
      </div>

      {/* Socials */}
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.icon}
              className="w-5 h-5 hover:opacity-80 transition"
              alt={social.name}
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center w-full sm:w-auto">
        © 2025 Lavish Meena. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
