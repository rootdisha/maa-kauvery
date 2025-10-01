import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Stethoscope, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function AdditionalTreatments() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const sectionRefs = {
    'fertility-preservation': useRef(null),
    'third-party-reproduction': useRef(null),
    'surgical-sperm-retrieval': useRef(null),
    'counselling-support': useRef(null)
  };

  const treatments = [
    {
      id: 'fertility-preservation',
      title: "Fertility Preservation",
      icon: <Heart className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Freeze and store eggs, sperm, or embryos safely for future use.",
      fullContent: {
        intro: "For many individuals, medical treatments such as <strong>chemotherapy, radiation, or certain surgeries</strong> can impact fertility. With <strong>fertility preservation</strong>, you can <em>freeze and store eggs, sperm, or embryos safely</em> for future use.",
        benefits: [
          "Patients undergoing cancer treatment",
          "Couples wanting to delay parenthood",
          "Women planning pregnancy at a later stage in life"
        ],
        closing: "Using advanced <strong>cryopreservation techniques</strong>, we ensure <em>excellent survival rates</em> after thawing, keeping your fertility options open when the time is right."
      }
    },
    {
      id: 'third-party-reproduction',
      title: "Third-Party Reproduction",
      icon: <Users className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Ethical guidance and support for egg/sperm donation and surrogacy.",
      fullContent: {
        intro: "For couples who may not be able to conceive with their own eggs, sperm, or uterus, <strong>third-party reproduction options</strong> are available at Maa Kauvery.",
        options: [
          "Egg donation",
          "Sperm donation",
          "Surrogacy"
        ],
        closing: "We provide <strong>ethical guidance, legal clarity, and compassionate support</strong> to help couples navigate these sensitive options with <em>confidence and dignity</em>."
      }
    },
    {
      id: 'surgical-sperm-retrieval',
      title: "Surgical Sperm Retrieval",
      icon: <Stethoscope className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Minimally invasive procedures (TESA, PESA, TESE, MESA) to retrieve sperm.",
      fullContent: {
        intro: "In certain cases of <strong>male infertility</strong> where sperm cannot be found in the ejaculate, <strong>surgical sperm retrieval procedures</strong> are performed. These <em>minimally invasive techniques</em> include:",
        procedures: [
          "<strong>TESA</strong> – Testicular Sperm Aspiration",
          "<strong>PESA</strong> – Percutaneous Epididymal Sperm Aspiration",
          "<strong>TESE</strong> – Testicular Sperm Extraction",
          "<strong>MESA</strong> – Microsurgical Epididymal Sperm Aspiration"
        ],
        benefits: [
          "Enables biological parenthood even in cases of <strong>azoospermia</strong> (no sperm in semen)",
          "Sperm retrieved can be used in advanced treatments like <strong>ICSI</strong>",
          "<em>Safe, effective, and performed by experienced specialists</em>"
        ]
      }
    },
    {
      id: 'counselling-support',
      title: "Counselling & Psychological Support",
      icon: <MessageCircle className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Emotional support to manage stress, anxiety, and uncertainty throughout your journey.",
      fullContent: {
        intro: "Infertility treatments can be <strong>emotionally challenging</strong>. At Maa Kauvery, we believe in caring for your <em>emotional well-being</em> alongside your physical health.",
        services: [
          "One-on-one sessions with <strong>experienced fertility counsellors</strong>",
          "Emotional support to manage <strong>stress, anxiety, and uncertainty</strong>",
          "Guidance for couples making difficult decisions (like third-party reproduction)"
        ],
        closing: "Because fertility care isn't just about science—it's also about <em>healing hearts and strengthening hope</em>."
      }
    }
  ];

  // Scroll to section based on hash in URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && sectionRefs[hash]?.current) {
      setTimeout(() => {
        sectionRefs[hash].current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        // Auto-expand the card when navigating to it
        const cardIndex = treatments.findIndex(t => t.id === hash);
        if (cardIndex !== -1) {
          setExpandedCard(cardIndex);
        }
      }, 100);
    }
  }, [location]);

  const toggleCard = (idx) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  const handleCardClick = (treatmentId) => {
    navigate(`/fertility/additional-treatments#${treatmentId}`);
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
            Additional Treatments & Support
          </h1>
          <p className="text-lg text-purple-100">
            Comprehensive care that extends beyond core medical treatments
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={idx}
              ref={sectionRefs[treatment.id]}
              id={treatment.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#9781bc] scroll-mt-[190px]"
            >
              <div className="flex items-start gap-6 mb-4">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  {treatment.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {treatment.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {treatment.shortDescription}
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
                  <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: treatment.fullContent.intro }} />

                  {treatment.fullContent.benefits && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Who Benefits:</h3>
                      <ul className="space-y-2">
                        {treatment.fullContent.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: benefit }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {treatment.fullContent.options && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Available Options:</h3>
                      <ul className="space-y-2">
                        {treatment.fullContent.options.map((option, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: option }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {treatment.fullContent.procedures && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Procedures Include:</h3>
                      <ul className="space-y-2">
                        {treatment.fullContent.procedures.map((procedure, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: procedure }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {treatment.fullContent.services && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Our Services Include:</h3>
                      <ul className="space-y-2">
                        {treatment.fullContent.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#9781bc] mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: service }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {treatment.fullContent.closing && (
                    <p className="text-gray-700 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: treatment.fullContent.closing }} />
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
          className="mt-16 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200"
        >
          <p className="text-lg text-gray-700 italic leading-relaxed">
            At Maa Kauvery Fertility Centre, we walk with you every step of the way—through advanced treatments, supportive care, and compassionate guidance—because parenthood is a journey we share together.
          </p>
        </motion.div>
      </section>
    </div>
</div>
  );
}