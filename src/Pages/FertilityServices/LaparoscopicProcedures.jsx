import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Scissors, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Stethoscope } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function LaparoscopicProcedures() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  
  const sectionRefs = {
    'diagnostic-hysterolaparoscopy': useRef(null),
    'hysteroscopic-septal-resection': useRef(null),
    'laparoscopic-myomectomy': useRef(null),
    'laparoscopic-cystectomy': useRef(null),
    'tubal-recanalisation': useRef(null),
    'tubal-recanulation': useRef(null),
    'salpingectomy': useRef(null),
    'salpingostomy': useRef(null)
  };

  const procedures = [
    {
      id: 'diagnostic-hysterolaparoscopy',
      title: "Diagnostic Hysterolaparoscopy",
      overview: "Minimally invasive dual procedure combining hysteroscopy and laparoscopy for comprehensive evaluation of uterus, fallopian tubes, and ovaries. Enables both diagnosis and simultaneous therapeutic intervention.",
      indications: [
        "Unexplained infertility",
        "Suspected endometriosis, pelvic adhesions, or uterine abnormalities"
      ],
      complications: [
        "Hemorrhage, infection, injury to pelvic organs",
        "Shoulder pain due to insufflation gas"
      ],
      steps: [
        "General anesthesia administered",
        "Periumbilical incision for laparoscope insertion",
        "Accessory port placed for instruments if required",
        "Chromopertubation performed using cervical dye injection to assess tubal patency",
        "Hysteroscope introduced transvaginally for uterine cavity inspection"
      ]
    },
    {
      id: 'hysteroscopic-septal-resection',
      title: "Hysteroscopic Septal Resection",
      overview: "Corrective hysteroscopic procedure for congenital uterine septum, restoring cavity shape to reduce miscarriage risk and enhance fertility.",
      indications: [
        "Recurrent pregnancy loss due to uterine septum",
        "Infertility associated with uterine septum"
      ],
      complications: [
        "Uterine perforation",
        "Hemorrhage, infection"
      ],
      steps: [
        "Performed under general or local anesthesia",
        "Hysteroscope advanced via cervix",
        "Resection of septum with specialized cutting instruments",
        "Post-op management: prophylactic antibiotics, hormonal support"
      ]
    },
    {
      id: 'laparoscopic-myomectomy',
      title: "Laparoscopic Myomectomy",
      overview: "Fibroid excision preserving uterine integrity and fertility. Preferred for women desiring conception.",
      indications: [
        "Symptomatic large fibroids causing infertility, pain, or menorrhagia"
      ],
      complications: [
        "Uterine adhesions/scarring",
        "Hemorrhage, infection"
      ],
      steps: [
        "General anesthesia administered",
        "Multiple small abdominal incisions for laparoscope and instruments",
        "Excision of fibroids with careful dissection",
        "Uterine wall reconstructed via laparoscopic suturing"
      ]
    },
    {
      id: 'laparoscopic-cystectomy',
      title: "Laparoscopic Cystectomy",
      overview: "Excision of ovarian cysts with maximal preservation of healthy ovarian tissue.",
      indications: [
        "Ovarian cysts causing infertility or pelvic pain"
      ],
      complications: [
        "Ovarian damage",
        "Bleeding, infection"
      ],
      steps: [
        "General anesthesia administered",
        "Laparoscopic entry through abdominal ports",
        "Cyst carefully dissected and removed, preserving normal ovarian tissue"
      ]
    },
    {
      id: 'tubal-recanalisation',
      title: "Laparoscopic Tubal Recanalisation",
      overview: "Restoration of patency in blocked fallopian tubes to enable natural conception.",
      indications: [
        "Bilateral tubal block leading to infertility"
      ],
      complications: [
        "Ectopic pregnancy risk",
        "Re-scarring of tubes"
      ],
      steps: [
        "Laparoscope introduced to identify obstruction",
        "Microinstruments employed to clear tubal lumen"
      ]
    },
    {
      id: 'tubal-recanulation',
      title: "Laparoscopic Tubal Recanulation",
      overview: "Targeted intervention for proximal tubal obstruction using catheter-based approach.",
      indications: [
        "Proximal tubal blockages"
      ],
      complications: [
        "Tubal trauma",
        "Infection"
      ],
      steps: [
        "Catheter or cannula inserted laparoscopically",
        "Precision reopening of obstructed segment"
      ]
    },
    {
      id: 'salpingectomy',
      title: "Laparoscopic Salpingectomy",
      overview: "Surgical removal of a diseased or damaged fallopian tube. Enhances IVF outcomes in hydrosalpinx cases.",
      indications: [
        "Ectopic pregnancy",
        "Severe tubal pathology (hydrosalpinx)"
      ],
      complications: [
        "Hemorrhage, infection",
        "Injury to adjacent pelvic organs"
      ],
      steps: [
        "Performed under general anesthesia",
        "Diseased tube identified, dissected, and removed laparoscopically"
      ]
    },
    {
      id: 'salpingostomy',
      title: "Laparoscopic Salpingostomy",
      overview: "Creation of a distal tubal opening to restore fertility in hydrosalpinx or distal obstruction.",
      indications: [
        "Mild hydrosalpinx",
        "Distal tubal occlusion"
      ],
      complications: [
        "Infection",
        "Recurrence of obstruction"
      ],
      steps: [
        "Laparoscopic access to fallopian tube",
        "Distal incision created to establish a functional opening"
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
            <Scissors className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Laparoscopic Procedures
            </h1>
          </div>
          <p className="text-lg text-purple-100">
            Minimally invasive surgical interventions for fertility enhancement
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
              transition={{ duration: 0.5, delay: idx * 0.05 }}
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
            <strong>Note:</strong> All laparoscopic procedures are performed by our experienced surgical team using advanced minimally invasive techniques. Your specialist will discuss the most appropriate procedure for your specific condition during your consultation.
          </p>
        </motion.div>
      </section>
    </div>
    </div>
  );
}