import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Activity, Dna, ClipboardList, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function DiagnosticServices() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const sectionRefs = {
    'infertility-evaluation': useRef(null),
    'pgt': useRef(null),
    'era': useRef(null)
  };

  const services = [
    {
      id: 'infertility-evaluation',
      title: "Comprehensive Infertility Evaluation",
      icon: <ClipboardList className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Detailed testing including blood, urine, immunological, and culture diagnostics.",
      fullContent: {
        intro: "Every fertility journey begins with a thorough evaluation. At Maa Kauvery, we offer <strong>detailed and comprehensive testing</strong> that includes:",
        tests: [
          "<strong>Blood tests</strong> for hormone levels, ovarian reserve, and reproductive health",
          "<strong>Urine analysis</strong> for metabolic or infection-related conditions",
          "<strong>Immunological testing</strong> to detect underlying immune factors affecting fertility",
          "<strong>Culture diagnostics</strong> to identify and treat infections that may interfere with conception"
        ],
        closing: "With these tests, our specialists can create a <strong>personalized treatment plan</strong>, ensuring no underlying issue is overlooked."
      }
    },
    {
      id: 'pgt',
      title: "Preimplantation Genetic Testing (PGT)",
      icon: <Dna className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Identifies genetic abnormalities to enhance treatment outcomes.",
      fullContent: {
        intro: "Healthy embryos lead to healthy pregnancies. <strong>PGT is an advanced genetic screening procedure</strong> performed during IVF to identify embryos with genetic abnormalities before transfer.",
        benefits: {
          title: "Benefits of PGT:",
          points: [
            "Increases the chances of successful implantation",
            "Reduces the risk of miscarriage",
            "Helps prevent the transmission of genetic disorders",
            "Assists in selecting the healthiest embryos for transfer"
          ]
        },
        closing: "At Maa Kauvery, our embryology and genetics teams use <strong>cutting-edge technology</strong> to ensure that every embryo transferred has the best chance of leading to a healthy pregnancy."
      }
    },
    {
      id: 'era',
      title: "Endometrial Receptivity Testing (ERA)",
      icon: <Activity className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Ensures the best timing for embryo transfer.",
      fullContent: {
        intro: "Even a healthy embryo needs the <strong>right uterine environment</strong> to implant successfully. Endometrial Receptivity Testing (ERA) helps determine the <strong>optimal timing for embryo transfer</strong>, ensuring the uterus is most receptive.",
        helpfulFor: {
          title: "ERA is especially helpful for:",
          points: [
            "Women with repeated IVF failures despite transferring healthy embryos",
            "Identifying personalized embryo transfer windows",
            "Maximizing the chances of implantation in every cycle"
          ]
        },
        closing: "By combining ERA with IVF, Maa Kauvery ensures a <strong>higher success rate</strong> for couples who may have struggled in the past."
      }
    }
  ];

  const comparisonData = [
    {
      service: "Comprehensive Infertility Evaluation",
      whatItInvolves: "Blood, urine, immunological, and culture tests to identify underlying fertility issues.",
      whoItsFor: "All couples beginning fertility treatment; those with unexplained infertility.",
      advantages: [
        "Identifies root causes",
        "Guides personalized treatment plans",
        "Prevents unnecessary delays"
      ],
      considerations: [
        "May require multiple tests",
        "Results may take time depending on complexity"
      ]
    },
    {
      service: "Preimplantation Genetic Testing (PGT)",
      whatItInvolves: "Screening embryos created via IVF for genetic abnormalities before transfer.",
      whoItsFor: "Couples with recurrent miscarriages, advanced maternal age, or family history of genetic disorders.",
      advantages: [
        "Selects healthiest embryos",
        "Reduces miscarriage risk",
        "Prevents inherited conditions"
      ],
      considerations: [
        "Requires IVF",
        "Additional cost",
        "Not needed in every IVF case"
      ]
    },
    {
      service: "Endometrial Receptivity Testing (ERA)",
      whatItInvolves: "Analyzes uterine lining to identify the optimal time for embryo transfer.",
      whoItsFor: "Women with repeated IVF failures despite healthy embryos.",
      advantages: [
        "Personalizes embryo transfer timing",
        "Increases implantation chances",
        "Helps improve IVF success"
      ],
      considerations: [
        "Requires endometrial biopsy",
        "May not be necessary for first-time IVF patients"
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
        const cardIndex = services.findIndex(s => s.id === hash);
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
            Diagnostic & Genetic Services
          </h1>
          <p className="text-lg text-purple-100">
          At Maa Kauvery Fertility Centre, we believe that accurate diagnosis is the foundation of successful fertility treatment. Our advanced diagnostic and genetic services are designed to uncover hidden causes of infertility, improve treatment planning, and increase your chances of a healthy pregnancy.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              ref={sectionRefs[service.id]}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#9781bc] scroll-mt-[190px]"
            >
              <div className="flex items-start gap-6 mb-4">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.shortDescription}
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
                  <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.fullContent.intro }} />

                  {service.fullContent.tests && (
                    <ul className="space-y-2 mb-4">
                      {service.fullContent.tests.map((test, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#9781bc] mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: test }} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.fullContent.benefits && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{service.fullContent.benefits.title}</h3>
                      <ul className="space-y-2">
                        {service.fullContent.benefits.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.fullContent.helpfulFor && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{service.fullContent.helpfulFor.title}</h3>
                      <ul className="space-y-2">
                        {service.fullContent.helpfulFor.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.fullContent.closing && (
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.fullContent.closing }} />
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Comparing Diagnostic & Genetic Services
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#9781bc] text-white">
                    <th className="text-left p-4 text-sm font-semibold border-r border-purple-400">Service</th>
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
                        {item.service}
                      </td>
                      <td className="p-4 text-xs text-gray-700 border-r border-gray-200 align-top leading-relaxed">
                        {item.whatItInvolves}
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

        {/* Closing Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6"
        >
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
            <p className="text-gray-700 leading-relaxed">
              <strong>Note for Patients:</strong> Diagnostic and genetic services are not always about "extra tests." They are about ensuring <strong>clarity, precision, and confidence</strong> in your fertility journey. At <em>Maa Kauvery Fertility Centre</em>, we recommend these only when they truly benefit your treatment.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
            <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
              With the right diagnosis and advanced genetic testing, your fertility journey becomes clearer, more precise, and more successful. At Maa Kauvery Fertility Centre, science and compassion come together to give you the best chance at parenthood.
            </p>
            <p className="text-gray-700 font-semibold">
              Book a consultation today and discover which services may support your path to parenthood.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
</div>
  );
}