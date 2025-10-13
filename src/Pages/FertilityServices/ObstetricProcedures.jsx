import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Baby, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Stethoscope } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function ObstetricProcedures() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  
  const sectionRefs = {
    'lscs': useRef(null),
    'cervical-cerclage': useRef(null)
  };

  const procedures = [
    {
      id: 'lscs',
      title: "Lower Segment Caesarean Section (LSCS)",
      overview: "Surgical delivery of fetus via lower abdominal and uterine incision.",
      indications: [
        "Fetal distress",
        "Cephalopelvic disproportion",
        "Failed labor progression"
      ],
      complications: [
        "Hemorrhage, infection",
        "Prolonged recovery"
      ],
      steps: [
        "Regional or general anesthesia",
        "Low transverse abdominal and uterine incision",
        "Delivery of fetus and placenta"
      ]
    },
    {
      id: 'cervical-cerclage',
      title: "Cervical Cerclage",
      overview: "Cervical reinforcement with suture to prevent mid-trimester pregnancy loss due to incompetence.",
      indications: [
        "History of cervical insufficiency",
        "Short cervix on ultrasound",
        "Recurrent 2nd trimester losses"
      ],
      complications: [
        "Infection, bleeding",
        "Preterm rupture of membranes",
        "Preterm labor"
      ],
      steps: [
        "Preoperative evaluation with USG",
        "Regional/general anesthesia",
        "Placement of suture at internal os (McDonald or Shirodkar technique)",
        "Post-procedure monitoring for contractions, infection",
        "Elective removal at 36–37 weeks or earlier if labor ensues"
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
      {/* Header */}
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Baby className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Obstetric Procedures
            </h1>
          </div>
          <p className="text-lg text-purple-100">
            Surgical interventions during pregnancy for high-risk cases
          </p>
        </motion.div>
      </section>

      {/* Procedures */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-6">
          {procedures.map((procedure, idx) => (
            <motion.div
              key={idx}
              ref={sectionRefs[procedure.id]}
              id={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#9781bc] scroll-mt-[190px]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {procedure.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {procedure.overview}
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
                      {procedure.indications.map((item, i) => (
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
                      {procedure.complications.map((item, i) => (
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
                      {procedure.steps.map((step, i) => (
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
            <strong>Note:</strong> Our obstetric surgical team is experienced in managing high-risk pregnancies and ensuring the safety of both mother and baby. All procedures are performed with comprehensive pre-operative assessment and post-operative care.
          </p>
        </motion.div>
      </section>
    </div>
    </div>
  );
}