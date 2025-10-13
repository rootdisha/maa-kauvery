import React from "react";
import { motion } from "framer-motion";
import { Scissors, Sparkles, FlaskConical, Baby, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function SurgicalProceduresHub() {
  const navigate = useNavigate();

  const procedureCategories = [
    {
      id: "laparoscopic",
      title: "Laparoscopic Procedures",
      icon: <Scissors className="w-16 h-16" />,
      description: "Minimally invasive surgical interventions for fertility enhancement including diagnostic hysterolaparoscopy, myomectomy, cystectomy, and tubal procedures.",
      procedures: [
        "Diagnostic Hysterolaparoscopy",
        "Hysteroscopic Septal Resection",
        "Laparoscopic Myomectomy",
        "Laparoscopic Cystectomy",
        "Tubal Procedures (Recanalisation, Salpingectomy, Salpingostomy)"
      ],
      route: "/fertility/laparoscopic-procedures",
      color: "from-purple-100 to-purple-200"
    },
    {
      id: "rejuvenative",
      title: "Rejuvenative Therapies",
      icon: <Sparkles className="w-16 h-16" />,
      description: "Advanced regenerative treatments using PRP and stem cell therapy to enhance endometrial receptivity, ovarian function, and male fertility.",
      procedures: [
        "Sub-Endometrial PRP Therapy",
        "Ovarian PRP / Rejuvenation",
        "Stem Cell Therapy (Experimental)",
        "Testicular PRP Therapy"
      ],
      route: "/fertility/rejuvenative-therapies",
      color: "from-pink-100 to-pink-200"
    },
    {
      id: "art",
      title: "ART Procedures",
      icon: <FlaskConical className="w-16 h-16" />,
      description: "Specialized assisted reproductive technology procedures including oocyte retrieval, sperm extraction techniques, embryo handling, and cryopreservation.",
      procedures: [
        "Oocyte Retrieval",
        "TESA / PESA / Micro TESE",
        "Embryo Transfer",
        "Embryo, Semen & Oocyte Freezing"
      ],
      route: "/fertility/art-procedures",
      color: "from-blue-100 to-blue-200"
    },
    {
      id: "obstetric",
      title: "Obstetric Procedures",
      icon: <Baby className="w-16 h-16" />,
      description: "Surgical interventions during pregnancy including cesarean sections and cervical cerclage for high-risk pregnancies.",
      procedures: [
        "Lower Segment Caesarean Section (LSCS)",
        "Cervical Cerclage"
      ],
      route: "/fertility/obstetric-procedures",
      color: "from-green-100 to-green-200"
    }
  ];

  return (
    <div className={navBarHeight}>
    <div className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] min-h-screen">
      {/* Header */}
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Clinical Procedures
          </h1>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            Comprehensive fertility, rejuvenative, ART, and obstetric procedures delivered with precision and care
          </p>
        </motion.div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {procedureCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
              onClick={() => navigate(category.route)}
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${category.color} p-8 flex items-center justify-center`}>
                <div className="text-[#9781bc] group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Procedures List */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Includes:
                  </h3>
                  <ul className="space-y-2">
                    {category.procedures.map((proc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#9781bc] mt-1 flex-shrink-0">•</span>
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Button */}
                <button
                  className="w-full bg-[#9781bc] hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"
        >
          <p className="text-gray-700 leading-relaxed text-center">
            <strong>Clinical Excellence:</strong> All procedures are performed by our experienced specialists using the latest techniques and equipment. Each procedure is carefully explained, and our team ensures you understand the benefits, risks, and expected outcomes before proceeding.
          </p>
        </motion.div>
      </section>
    </div>
    </div>
  );
}