import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Syringe, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function ARTServices() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const sectionRefs = {
    'ivf': useRef(null),
    'icsi': useRef(null),
    'iui': useRef(null)
  };

  const services = [
    {
      id: 'ivf',
      title: "In Vitro Fertilization (IVF)",
      icon: <FlaskConical className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Healthy eggs are retrieved and fertilized with sperm in our advanced IVF labs, followed by careful embryo transfer.",
      fullContent: {
        intro: "IVF is one of the most trusted and widely used fertility treatments worldwide. In this procedure, <strong>healthy eggs are retrieved from the ovaries and fertilized with sperm in our advanced IVF laboratories</strong>. Once fertilization occurs, the best-quality embryos are selected and carefully transferred into the uterus.",
        supportedBy: {
          title: "At Maa Kauvery, our IVF process is supported by:",
          points: [
            "<strong>Cutting-edge incubators</strong> that mimic natural conditions for embryo growth",
            "<strong>Advanced genetic screening (PGT/PGS)</strong> to select the healthiest embryos (optional)",
            "<strong>Personalized protocols</strong> tailored to your health, age, and fertility goals"
          ]
        },
        closing: "This ensures that every couple receives the <strong>best possible chance of success</strong>."
      }
    },
    {
      id: 'icsi',
      title: "Intracytoplasmic Sperm Injection (ICSI)",
      icon: <Microscope className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "A single sperm is injected directly into an egg, ideal for couples facing severe male factor infertility.",
      fullContent: {
        intro: "ICSI is a highly specialized form of IVF, especially beneficial for couples experiencing <strong>severe male factor infertility</strong> (such as low sperm count, poor motility, or abnormal morphology). In this procedure, a <strong>single healthy sperm is directly injected into the egg</strong>, ensuring fertilization even in complex cases.",
        benefits: {
          title: "Benefits of ICSI at Maa Kauvery:",
          points: [
            "Overcomes challenges of poor sperm quality",
            "Higher fertilization success in difficult cases",
            "Expert embryologists using <strong>precision micromanipulation systems</strong>"
          ]
        },
        closing: "This advanced technique maximizes the chances of creating healthy embryos, giving hope to couples who may have faced multiple setbacks."
      }
    },
    {
      id: 'iui',
      title: "Intrauterine Insemination (IUI)",
      icon: <Syringe className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Concentrated sperm is introduced directly into the uterus to improve the chances of conception.",
      fullContent: {
        intro: "IUI is a simpler, less invasive ART procedure where <strong>concentrated, motile sperm is directly introduced into the uterus during ovulation</strong>. This helps increase the chances of sperm reaching and fertilizing the egg naturally.",
        whyRecommended: {
          title: "Why IUI may be recommended:",
          points: [
            "Unexplained infertility",
            "Mild male factor infertility",
            "Cervical or ovulation-related issues"
          ]
        },
        closing: "With careful cycle monitoring and advanced laboratory preparation of sperm, IUI offers a cost-effective and accessible solution for many couples."
      }
    }
  ];

  const comparisonData = [
    {
      treatment: "IVF (In Vitro Fertilization)",
      whatItInvolves: "Eggs are retrieved and fertilized with sperm in the lab; embryos are transferred to the uterus.",
      whoItsFor: "Couples with blocked fallopian tubes, unexplained infertility, endometriosis, or ovulation issues.",
      advantages: [
        "High success rates",
        "Can screen/select healthiest embryos",
        "Widely used, globally trusted"
      ],
      considerations: [
        "More expensive than IUI",
        "Involves ovarian stimulation and egg retrieval"
      ]
    },
    {
      treatment: "ICSI (Intracytoplasmic Sperm Injection)",
      whatItInvolves: "A single healthy sperm is injected directly into an egg to aid fertilization.",
      whoItsFor: "Couples with severe male factor infertility (low count, poor motility, abnormal shape) or repeated IVF failure.",
      advantages: [
        "Bypasses sperm-related issues",
        "Higher fertilization rate",
        "Uses precision lab technology"
      ],
      considerations: [
        "Requires IVF lab setup",
        "More advanced & slightly costlier"
      ]
    },
    {
      treatment: "IUI (Intrauterine Insemination)",
      whatItInvolves: "Prepared sperm is directly placed into the uterus during ovulation.",
      whoItsFor: "Couples with mild male infertility, unexplained infertility, or ovulation/cervical problems.",
      advantages: [
        "Simple and minimally invasive",
        "Cost-effective",
        "Can be tried before advanced ART"
      ],
      considerations: [
        "Lower success rates compared to IVF/ICSI",
        "May need multiple attempts"
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
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Assisted Reproductive Technologies (ART)
          </h1>
          <p className="text-lg text-purple-100">
          At Maa Kauvery Fertility Centre, we specialize in the most advanced Assisted Reproductive Technologies (ART) to help couples achieve their dream of parenthood. With a combination of world-class infrastructure, expert specialists, and compassionate care, our treatments are designed to deliver the <strong>highest success rates</strong> while ensuring safety and comfort at every step.
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

                  {service.fullContent.supportedBy && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{service.fullContent.supportedBy.title}</h3>
                      <ul className="space-y-2">
                        {service.fullContent.supportedBy.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
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

                  {service.fullContent.whyRecommended && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{service.fullContent.whyRecommended.title}</h3>
                      <ul className="space-y-2">
                        {service.fullContent.whyRecommended.points.map((point, i) => (
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

                  {/* IVF Complete Guide Button */}
                  {service.id === 'ivf' && expandedCard === idx && (
                    <div className="mt-6 pt-6 border-t border-gray-200 flex justify-center">
                      <button
                        onClick={() => navigate('/fertility/ivf-complete-guide')}
                        className="bg-[#9781bc] hover:[#70308A] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        <span>Read Complete Guide to IVF</span>
                      </button>
                    </div>
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
            Comparing ART Options
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#9781bc] text-white">
                    <th className="text-left p-4 text-sm font-semibold border-r border-purple-400">Treatment</th>
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
                        {item.treatment}
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
              <strong>Tip for Patients:</strong> Every case is unique. What works best for one couple may not be the right choice for another. At <em>Maa Kauvery Fertility Centre</em>, our specialists carefully evaluate your medical history, fertility reports, and lifestyle before recommending the right ART solution.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              At Maa Kauvery Fertility Centre, we understand that every couple's journey is unique. That's why our ART solutions are always customized, combining medical excellence with compassionate guidance—because parenthood deserves nothing less.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
</div>
  );
}