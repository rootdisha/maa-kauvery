import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Snowflake, Zap, TestTube, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function AdvancedProcedures() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const sectionRefs = {
    'ivm': useRef(null),
    'laser-assisted-hatching': useRef(null),
    'cryopreservation': useRef(null)
  };

  const procedures = [
    {
      id: 'ivm',
      title: "In Vitro Maturation (IVM)",
      icon: <TestTube className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Immature eggs are matured in the laboratory before fertilization through IVF.",
      fullContent: {
        intro: "In Vitro Maturation (IVM) is a specialized technique where <strong>immature eggs are collected from the ovaries and matured in our laboratory before being fertilized through IVF</strong>.",
        whySection: {
          title: "Why IVM?",
          points: [
            "Useful for women with polycystic ovary syndrome (PCOS) or those at risk of Ovarian Hyperstimulation Syndrome (OHSS)",
            "Reduces the need for high doses of hormonal medication",
            "Provides an effective alternative for women who cannot undergo conventional ovarian stimulation"
          ]
        },
        closing: "At Maa Kauvery, our embryologists use <strong>precision-controlled lab environments</strong> to nurture eggs into maturity, ensuring the best chances for fertilization and embryo development."
      }
    },
    {
      id: 'laser-assisted-hatching',
      title: "Laser-Assisted Hatching",
      icon: <Zap className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "A precise laser technique to assist the embryo in the hatching process, improving implantation success.",
      fullContent: {
        intro: "Sometimes, even a healthy embryo needs a little help to implant successfully in the uterus. <strong>Laser-Assisted Hatching (LAH)</strong> is an advanced laboratory technique where a precise laser is used to gently thin or create an opening in the embryo's outer shell (<em>zona pellucida</em>).",
        benefitsSection: {
          title: "Benefits of LAH:",
          points: [
            "Improves implantation rates, especially in women over 35",
            "Helpful for couples with previous IVF failures",
            "Enhances outcomes when embryos have thicker shells"
          ]
        },
        closing: "At Maa Kauvery, our use of <strong>state-of-the-art laser systems</strong> ensures accuracy, safety, and the best support for embryo development."
      }
    },
    {
      id: 'cryopreservation',
      title: "Cryopreservation (Egg, Sperm & Embryo Freezing)",
      icon: <Snowflake className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Safe freezing and storage of eggs, sperm, or embryos for future use.",
      fullContent: {
        intro: "Cryopreservation is the process of <strong>safely freezing and storing eggs, sperm, or embryos</strong> for future use. This gives couples the flexibility to plan parenthood at their own pace while preserving fertility potential.",
        whenSection: {
          title: "When Cryopreservation Helps:",
          points: [
            "Women or men undergoing medical treatments (like chemotherapy) that may affect fertility",
            "Couples wanting to delay parenthood but preserve high-quality eggs/sperm",
            "Storing surplus embryos from IVF cycles for later use"
          ]
        },
        closing: "Our advanced freezing techniques, such as <strong>vitrification</strong>, ensure high survival rates after thawing, giving you peace of mind that your fertility is safely preserved."
      }
    }
  ];

  const comparisonData = [
    {
      procedure: "In Vitro Maturation (IVM)",
      whatItInvolves: "Immature eggs are retrieved and matured in the lab before being fertilized via IVF.",
      whoItsFor: "Women with PCOS or those at risk of Ovarian Hyperstimulation Syndrome (OHSS); patients who cannot undergo full hormonal stimulation.",
      advantages: [
        "Less hormone medication needed",
        "Reduces risk of OHSS",
        "Provides effective IVF alternative"
      ],
      considerations: [
        "Not as widely available as conventional IVF",
        "May have slightly lower success rates in some cases"
      ]
    },
    {
      procedure: "Laser-Assisted Hatching (LAH)",
      whatItInvolves: "A precision laser creates a small opening in the embryo's outer shell (<em>zona pellucida</em>) to aid implantation.",
      whoItsFor: "Women over 35, couples with previous IVF failures, or cases where embryos have thick outer shells.",
      advantages: [
        "Improves implantation rates",
        "Increases chances after repeated IVF failures",
        "Safe, accurate technique"
      ],
      considerations: [
        "Only recommended in specific cases",
        "Requires advanced lab expertise"
      ]
    },
    {
      procedure: "Cryopreservation (Egg, Sperm & Embryo Freezing)",
      whatItInvolves: "Eggs, sperm, or embryos are safely frozen using vitrification for future use.",
      whoItsFor: "Couples wanting to delay parenthood, patients undergoing medical treatments like chemotherapy, or storing extra embryos after IVF.",
      advantages: [
        "Preserves fertility for the future",
        "Provides flexibility in family planning",
        "High survival rates with advanced freezing"
      ],
      considerations: [
        "Storage & future treatment costs",
        "Requires long-term monitoring & planning"
      ]
    }
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && sectionRefs[hash]?.current) {
      setTimeout(() => {
        sectionRefs[hash].current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        const cardIndex = procedures.findIndex(p => p.id === hash);
        if (cardIndex !== -1) {
          setExpandedCard(cardIndex);
        }
      }, 100);
    }
  }, [location]);

  const toggleCard = (idx) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
<div className={navBarHeight}>
    <div className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] min-h-screen">
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Fertility Procedures
          </h1>
          <p className="text-lg text-purple-100">
            Going beyond conventional treatments to improve success rates and provide more options
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-8">
          {procedures.map((proc, idx) => (
            <motion.div
              key={idx}
              ref={sectionRefs[proc.id]}
              id={proc.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#9781bc] scroll-mt-[190px]" // navbarheight + 20
            >
              <div className="flex items-start gap-6 mb-4">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  {proc.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {proc.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {proc.shortDescription}
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleCard(idx)}
                className="flex items-center gap-2 text-[#9781bc] font-semibold hover:text-purple-700 transition-colors mt-4"
              >
                {expandedCard === idx ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Learn more</span>
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>

              {expandedCard === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: proc.fullContent.intro }} />

                  {proc.fullContent.whySection && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{proc.fullContent.whySection.title}</h3>
                      <ul className="space-y-2">
                        {proc.fullContent.whySection.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {proc.fullContent.benefitsSection && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{proc.fullContent.benefitsSection.title}</h3>
                      <ul className="space-y-2">
                        {proc.fullContent.benefitsSection.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {proc.fullContent.whenSection && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{proc.fullContent.whenSection.title}</h3>
                      <ul className="space-y-2">
                        {proc.fullContent.whenSection.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {proc.fullContent.closing && (
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: proc.fullContent.closing }} />
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Comparing Advanced Fertility Procedures
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#9781bc] text-white">
                    <th className="text-left p-4 text-sm font-semibold border-r border-purple-400">Procedure</th>
                    <th className="text-left p-4 text-sm font-semibold border-r border-purple-400">What It Involves</th>
                    <th className="text-left p-4 text-sm font-semibold border-r border-purple-400">Who It's For</th>
                    <th className="text-left p-4 text-sm font-semibold border-r border-purple-400">Advantages</th>
                    <th className="text-left p-4 text-sm font-semibold">Considerations</th>
                  </tr>
                </thead>
                <tbody>
            {comparisonData.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                      <td className="p-4 text-sm font-semibold text-[#9781bc] border-r border-gray-200 align-top">
                        {item.procedure}
                      </td>
                      <td className="p-4 text-xs text-gray-700 border-r border-gray-200 align-top leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: item.whatItInvolves }} />
                  </td>
                      <td className="p-4 text-xs text-gray-700 border-r border-gray-200 align-top leading-relaxed">
                        {item.whoItsFor}
                      </td>
                      <td className="p-4 text-xs text-gray-700 border-r border-gray-200 align-top">
                    <ul className="space-y-1">
                      {item.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-green-600 flex-shrink-0">-</span>
                          <span className="leading-relaxed">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                    <td className="p-4 text-xs text-gray-700 align-top">
                    <ul className="space-y-1">
                      {item.considerations.map((con, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-amber-600 flex-shrink-0">-</span>
                          <span className="leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
              </tr>
            ))}
</tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6"
        >
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
            <p className="text-gray-700 leading-relaxed">
              <strong>Note for Patients:</strong> These procedures are often used <strong>in combination with IVF or ICSI</strong> to improve outcomes, preserve fertility, and provide flexibility. Your doctor will recommend them only if they truly benefit your journey.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
            <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
              At Maa Kauvery Fertility Centre, these advanced procedures complement our core ART treatments, ensuring that every couple receives the most effective, personalized fertility care available today.
            </p>
            <p className="text-gray-700 font-semibold">
              Book a consultation with Maa Kauvery experts to explore the best fertility options for you.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
</div>
  );
}