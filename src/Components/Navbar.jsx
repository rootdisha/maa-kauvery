import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "../Images/logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CONTACT_NUMBER = "+91 44 6555 6666"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);       // mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navLinks = [
    
    {
      label: "About",
      submenu: [
        { label: "Overview", href: "Overview" },
        { label: "Leadership", href: "LeadershipSection" },
        { label: "Our Doctors", href: "/doctors" },
        { label: "Success Stories", href: "#" },
      ],
    },
    {
      label: "Fertility Services", 
      submenu: [
        { label: "About Fertility Centre", href: "/fertility/about" },
        { label: "ART Services", href: "/fertility/art-services" },
        { label: "Advanced Procedures", href: "/fertility/advanced-procedures" },
        { label: "Diagnostic Services", href: "/fertility/diagnostic-services" },
        { label: "Additional Treatments", href: "/fertility/additional-treatments" },
        { label: "Technology & Infrastructure", href: "/fertility/infrastructure" },
      ],
    },
    {
      label: "Treatments",
      submenu: [
        { label: "IVF", href: "#" },
        {
          label: "Donor Programs",
          submenu: [
            { label: "Egg Donor", href: "#" },
            { label: "Sperm Donor", href: "#" },
          ],
        },
        { label: "Fertility Testing", href: "#" },
      ],
    },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const toggleMobileDropdown = (i) =>
    setMobileDropdown(mobileDropdown === i ? null : i);

  return (
    <header className="bg-white text-[#9781bc] shadow-md font-[pop]">
      {/* ---------- Top Bar ---------- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <Link to="/">
        <img src={Logo} alt="Nova IVF" className="w-32 md:w-40 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href={"tel:"+CONTACT_NUMBER.replace(/\s/g, '')} className="flex items-center gap-2 hover:text-[#7a63a8]">
            <FaPhoneAlt className="text-lg text-blue-300" />
            <span className="font-medium">{CONTACT_NUMBER}</span>
          </a>

          {/* <a href="tel:+919999999999" className="flex items-center gap-2 ">
            <FaWhatsapp className="text-lg text-[#25d366]" />
            <span className="font-medium ">{CONTACT_NUMBER}</span>
          </a> */}
          <button className="bg-[#9781bc] text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-[#876dad]">
            BOOK NOW
          </button>
        </div>

        <button
          className="md:hidden text-2xl text-[#9781bc]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ---------- Desktop Bottom Nav with Hover ---------- */}
      <nav className="hidden md:block border-t border-[#9781bc]/20">
        <ul className="max-w-7xl mx-auto flex gap-8 px-4 md:px-8 py-3 font-medium">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              {/* Top level */}
              {link.submenu ? (
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-[#7a63a8]"
                >
                  {link.label}
                  <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
              ) : (
                <a href={link.href} className="hover:text-[#7a63a8]">
                  {link.label}
                </a>
              )}

              {/* ---- First-level dropdown ---- */}
              {link.submenu && (
                <ul
                  className="
                    absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg z-10
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-300 ease-out transform -translate-y-2 group-hover:translate-y-0
                  "
                >
                  {link.submenu.map((sub, j) => (
                    <li key={j} className="relative group/sub">
                      {sub.submenu ? (
                        <>
                          <button
                            type="button"
                            className="w-full text-left px-4 py-2 flex justify-between hover:bg-[#f3eefc]"
                          >
                            {sub.label} <FiChevronDown />
                          </button>
                          {/* ---- Second-level dropdown ---- */}
                          <ul
                            className="
                              absolute left-full top-0 mt-0 w-48 rounded-md bg-white shadow-lg
                              opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible
                              transition-all duration-300 ease-out transform -translate-x-2 group-hover/sub:translate-x-0
                            "
                          >
                            {sub.submenu.map((deep, k) => (
                              <li key={k}>
                                <a
                                  href={deep.href}
                                  className="block px-4 py-2 hover:bg-[#f3eefc]"
                                >
                                  {deep.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <a
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-[#f3eefc]"
                        >
                          {sub.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- Mobile Menu with Click ---------- */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#9781bc]/20 px-4 py-4 space-y-2">
          {navLinks.map((link, i) => (
            <div key={i}>
              {link.submenu ? (
                <>
                  <button
                    className="flex justify-between w-full py-2 font-medium text-left hover:text-[#7a63a8]"
                    onClick={() => toggleMobileDropdown(i)}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        mobileDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${mobileDropdown === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                      pl-4 space-y-1
                    `}
                  >
                    {link.submenu.map((sub, j) =>
                      sub.submenu ? (
                        <details key={j} className="pl-2">
                          <summary className="cursor-pointer py-1">{sub.label}</summary>
                          <div className="pl-4 space-y-1">
                            {sub.submenu.map((deep, k) => (
                              <a key={k} href={deep.href} className="block py-1 hover:text-[#7a63a8]">
                                {deep.label}
                              </a>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <a key={j} href={sub.href} className="block py-1 hover:text-[#7a63a8]">
                          {sub.label}
                        </a>
                      )
                    )}
                  </div>
                </>
              ) : (
                <a href={link.href} className="block py-2 font-medium hover:text-[#7a63a8]">
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
