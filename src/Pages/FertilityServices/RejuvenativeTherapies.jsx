import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Stethoscope } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function RejuvenativeTherapies() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  
  const sectionRefs = {
    'sub-endometrial-prp': useRef(null),
    'ovarian-prp': useRef(null),
    'stem-cell-therapy': useRef(null),
    'testicular-prp': useRef(null)
  };

  const therapies = [
    {
      id: 'sub-endometrial-prp',
      title: "Sub-Endometrial PRP Therapy",
      overview: "Platelet-rich plasma injection into endometrium to enhance receptivity and endometrial thickness.",
      indications: [
        "Thin endometrium",
        "Repeated implantation failures"
      ],
      complications: [
        "Rare infection at injection site"
      ],
      steps: [
        "Autologous blood sample collected and centrifuged for PRP",
        "PRP injected into endometrium under ultrasound guidance"
      ]
    },
    {
      id: 'ovarian-prp',
      title: "Ovarian PRP / Rejuvenation",
      overview: "Intra-ovarian PRP injection to activate dormant follicles and enhance ovarian reserve.",
      indications: [
        "Diminished ovarian reserve",
        "Early menopause"
      ],
      complications: [
        "Minimal risk of infection, transient pelvic pain"
      ],
      steps: [
        "Autologous PRP prepared",
        "Injection into ovarian cortex under guidance"
      ]
    },
    {
      id: 'stem-cell-therapy',
      title: "Stem Cell Therapy (Experimental)",
      overview: "Application of stem cells for ovarian regeneration in cases of insufficiency. Currently investigational.",
      indications: [
        "Ovarian insufficiency",
        "Damaged ovarian tissue"
      ],
      complications: [
        "Immunological reaction",
        "Infection risk"
      ],
      steps: [
        "Stem cells isolated and prepared in laboratory",
        "Intra-ovarian transplantation performed"
      ]
    },
    {
      id: 'testicular-prp',
      title: "Testicular PRP Therapy",
      overview: "Application of PRP to testes for improving spermatogenesis.",
      indications: [
        "Oligospermia",
        "Asthenospermia"
      ],
      complications: [
        "Minor injection-site infection or discomfort"
      ],
      steps: [
        "PRP prepared from patient's blood",
        "Ultrasound-guided testicular injection"
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
        const cardIndex = therapies.findIndex(t => t.id === hash);
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
      {/* Header */}
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Rejuvenative Therapies
            </h1>
          </div>
          <p className="text-lg text-purple-100">
            Advanced regenerative treatments using PRP and stem cell therapy
          </p>
        </motion.div>
      </section>

      {/* Therapies */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-6">
          {therapies.map((therapy, idx) => (
            <motion.div
              key={idx}
              ref={sectionRefs[therapy.id]}
              id={therapy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#9781bc] scroll-mt-[190px]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {therapy.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {therapy.overview}
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
                    <span>View details</span>
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Expanded Content */}
              {expandedCard === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-3 gap-6"
                >
                  {/* Indications */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-gray-800">Indications</h3>
                    </div>
                    <ul className="space-y-2">
                      {therapy.indications.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complications */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <h3 className="font-semibold text-gray-800">Complications</h3>
                    </div>
                    <ul className="space-y-2">
                      {therapy.complications.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Procedure Steps */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Stethoscope className="w-5 h-5 text-[#9781bc]" />
                      <h3 className="font-semibold text-gray-800">Procedure</h3>
                    </div>
                    <ol className="space-y-2">
                      {therapy.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#9781bc] font-semibold flex-shrink-0">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200"
        >
          <p className="text-gray-700 leading-relaxed text-center">
            <strong>Note:</strong> Rejuvenative therapies represent cutting-edge approaches in fertility treatment. Your specialist will evaluate whether these advanced therapies are appropriate for your specific condition and treatment goals.
          </p>
        </motion.div>
      </section>
    </div>
    </div>
  );
}