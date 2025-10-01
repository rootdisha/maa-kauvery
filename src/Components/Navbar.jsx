import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "../Images/logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { maakauveryPhone } from "../utils/constants";

const CONTACT_NUMBER = maakauveryPhone;

export default function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);       // mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navLinks = [
    
    {
      label: "About",
      submenu: [
        { label: "Overview", href: "Overview" },
        { label: "Leadership", href: "LeadershipSection" },
        { label: "About Maa Kauvery", href: "/fertility/about" },
        { label: "Technology & Infrastructure", href: "/fertility/infrastructure" },
        { label: "Success Stories", href: "stories" },
      ],
    },
    { label: "Our Doctors", href: "/doctors" },
    {
      label: "Treatments", 
      submenu: [       
        { 
          label: "ART Services", 
          submenu: [
            // {label: "META", href: "/wip"},
            {label: "In Vitro Fertilization (IVF)", href: "/fertility/art-services"},
            {label: "Intracytoplasmic Sperm Injection (ICSI)", href: "/fertility/art-services"},
            {label: "Intrauterine Insemination (IUI)", href: "/fertility/art-services"},
          ]
        },
        { 
          label: "Advanced Procedures", 
          submenu: [
            {label: "In Vitro Maturation (IVM)", href: "/fertility/advanced-procedures#ivm"},
            {label: "Laser Assisted Hatching", href: "/fertility/advanced-procedures#laser-assisted-hatching"},
            {label: "Cyropreservation", href: "/fertility/advanced-procedures#cryopreservation"},
          ]
        },
        { 
          label: "Diagnostic Services", 
          submenu: [
            {label: "Infertility Evaluation", href: "/fertility/diagnostic-services"},
            {label: "Preimplantation Genetic Testing (PGT)", href: "/fertility/diagnostic-services"},
            {label: "Endometrial Receptivity Testing", href: "/fertility/diagnostic-services"},
          ]

        },
        { 
          label: "Additional Treatments", 
          href: "",
          submenu: [
            {label: "Fertility Preservation", href: "/fertility/additional-treatments#fertility-preservation"},
            {label: "Third-Party Reproduction", href: "/fertility/additional-treatments#third-party-reproduction"},
            {label: "Surgical Sperm Retrieval", href: "/fertility/additional-treatments#surgical-sperm-retrieval"},
            {label: "Counselling", href: "/fertility/additional-treatments#counselling-support"},
          ]          
        },
        
      ],
    },
    // { label: "Contact", onClick: true},
    { label: "Contact", href: "/contact"},
  ];

  const toggleMobileDropdown = (i) =>
    setMobileDropdown(mobileDropdown === i ? null : i);

  return (
    // <header className="bg-white text-[#9781bc] shadow-md font-[pop]"> // [#70308A]
    <header className="fixed top-0 left-0 right-0 z-50 
    bg-white/50
      backdrop-blur-md text-[#70308A] shadow-md font-[pop]">
    
      {/*  Top Bar  */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 ">
        <Link to="/">
        <img src={Logo} alt="Maa Kauvery Fertility" className="w-32 md:w-40 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href={"tel:"+CONTACT_NUMBER.replace(/\s/g, '')} 
            className="flex items-center gap-2
            hover:bg-pink-700 hover:text-white hover:border-pink-50 
            bg-white/50
            px-5 py-3 rounded-full  hover:shadow-md transition
             ">
            <FaPhoneAlt className="text-lg text-pink-700 hover:text-white" />
            <span className="font-extrabold text-pink-700 hover:text-white">{CONTACT_NUMBER}</span>
            
            <br/>
            <span className="font-bold text-pink-700 hover:text-white"> For FREE Counselling.</span>
          </a>

        </div>

        <button
          className="md:hidden text-2xl text-[#9781bc]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/*  Navbar  */}
      {/* removed border-t border-white/30 */}
      <nav className="hidden md:block bg-white/50">
        <ul className="max-w-7xl mx-auto flex gap-8 px-4 md:px-8 py-3 font-medium">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              {/* Top level */}
              {link.onClick ? (
                // For Contact - trigger modal
                // removed  hoover:bg-[#f3eefc]/30 border-1 rounded-md  px-4 py-2
                <button
                  type="button"
                  onClick={onContactClick}
                  className="hover:text-[#7a63a8]"
                >
                  {link.label}
                </button>
              ) : link.submenu ? (
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
                // removed
                  className="
                    absolute left-0 mt-2 w-48  bg-gray-50 shadow-lg z-10 rounded-md 
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
                          // removed
                            className="
                              absolute left-full top-0 mt-0 w-48 bg-gray-50 shadow-lg rounded-md 
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
              {link.onClick ? (
                // Mobile Contact button
                <button
                  className="block py-2 font-medium hover:text-[#7a63a8] w-full text-left"
                  onClick={() => {
                    onContactClick();
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </button>
              ) :
              
              link.submenu ? (
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
