import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Syringe, ChevronDown, ChevronUp, TrendingUp, AlertTriangle, Heart, Calendar, ClipboardList } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navBarHeight } from "../../utils/constants";

export default function ControlledOvarianStimulation() {
  const [expandedCard, setExpandedCard] = useState(null);
  const location = useLocation();
  
  const sectionRefs = {
    'what-is-cos': useRef(null),
    'when-needed': useRef(null),
    'process': useRef(null),
    'protocols': useRef(null),
    'success-rates': useRef(null),
    'post-cos': useRef(null),
    'faqs': useRef(null)
  };

  const sections = [
    {
      id: 'what-is-cos',
      title: "What is Controlled Ovarian Stimulation?",
      icon: <Syringe className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "A fertility treatment using special medications to encourage your ovaries to produce multiple eggs during one menstrual cycle.",
      fullContent: {
        intro: "Controlled ovarian stimulation (COS) is a treatment used in fertility care to help <strong>increase the chances of pregnancy</strong>. It involves using special medications to encourage your ovaries to produce <strong>multiple eggs during one menstrual cycle</strong>. This is important because having more eggs improves the chances of successful fertilization.",
        keyPoints: [
          "Uses hormonal medications to stimulate egg production",
          "Increases the number of available eggs for fertilization",
          "Essential component of IVF and other ART procedures",
          "Carefully monitored throughout the process"
        ]
      }
    },
    {
      id: 'when-needed',
      title: "When is COS Needed?",
      icon: <ClipboardList className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Your doctor may suggest COS for various fertility challenges or treatment plans.",
      fullContent: {
        intro: "Your doctor may suggest COS if:",
        conditions: [
          "<strong>Trouble releasing eggs naturally:</strong> Issues with natural ovulation",
          "<strong>Planning IVF treatment:</strong> To maximize eggs available for fertilization",
          "<strong>Egg freezing or donation:</strong> To increase the number of eggs for preservation or donation",
          "<strong>Preparing for fertility preservation:</strong> Before medical treatments that may affect fertility"
        ]
      }
    },
    {
      id: 'process',
      title: "Step-by-Step Process of COS",
      icon: <Calendar className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "A carefully monitored process typically lasting 10-14 days with regular monitoring.",
      fullContent: {
        steps: [
          {
            title: "Initial Assessment and Planning",
            description: "Before starting, the doctor evaluates your overall health and ovarian reserve (number of available eggs) through blood tests and ultrasounds. This helps tailor the treatment plan to your specific needs."
          },
          {
            title: "Stimulation Phase",
            description: "Hormonal medications, usually daily injections, are prescribed to stimulate your ovaries. Common drugs include follicle-stimulating hormone (FSH) and luteinizing hormone (LH), which promote the growth of multiple follicles (sacs containing eggs)."
          },
          {
            title: "Monitoring and Adjustments",
            description: "Regular ultrasound scans and blood tests are done to monitor follicle growth and hormone levels. The doctor may adjust the dosage or type of medication to optimize egg development and prevent complications."
          },
          {
            title: "Triggering Ovulation",
            description: "When the eggs are mature, a trigger shot (usually hCG or a GnRH agonist) is given to finalize egg maturation. Egg retrieval is scheduled approximately 36 hours later."
          },
          {
            title: "Egg Retrieval",
            description: "This is a minor outpatient procedure where eggs are collected using a thin needle under ultrasound guidance. Sedation is provided to ensure comfort."
          }
        ],
        timeframe: "COS typically lasts <strong>10-14 days</strong>, but the timeline can vary depending on how your body responds."
      }
    },
    {
      id: 'protocols',
      title: "Different COS Protocols",
      icon: <ClipboardList className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Various protocols tailored to individual needs and fertility factors.",
      fullContent: {
        protocols: [
          {
            name: "Antagonist Protocol (Short Protocol)",
            usedFor: "Women with normal ovarian reserve, older women, or those who have had poor response to other protocols",
            details: [
              "Stimulation begins on day 2 or 3 of menstrual cycle",
              "GnRH antagonists prevent premature ovulation",
              "Typically lasts 10-14 days",
              "Reduces risk of OHSS",
              "Fewer injections required"
            ]
          },
          {
            name: "Long Protocol",
            usedFor: "Women with high ovarian reserve or first-time IVF patients",
            details: [
              "Starts with GnRH agonists around day 21 of previous cycle",
              "Lasts about 3 weeks total",
              "Better control over ovulation timing",
              "Ensures synchronized egg growth"
            ]
          },
          {
            name: "Microflare Protocol",
            usedFor: "Women with low ovarian reserve or poor responders",
            details: [
              "Low dose GnRH agonists trigger 'flare' response",
              "Stimulation starts day 2 or 3 of cycle",
              "Encourages ovaries to produce more eggs",
              "Helpful for diminished ovarian reserve"
            ]
          },
          {
            name: "Flare Protocol",
            usedFor: "Poor ovarian reserve or older women with previous poor response",
            details: [
              "High doses of GnRH agonists at cycle start",
              "Creates temporary hormone level increase",
              "Encourages egg development",
              "More aggressive stimulation approach"
            ]
          },
          {
            name: "Minimal Stimulation (Mini-IVF)",
            usedFor: "Poor ovarian reserve or those seeking less invasive approach",
            details: [
              "Lower medication doses",
              "Focus on quality over quantity",
              "Fewer injections needed",
              "More cost-effective",
              "Reduced risk of OHSS"
            ]
          },
          {
            name: "Egg Donor Protocol",
            usedFor: "Women unable to produce viable eggs",
            details: [
              "Uses donor eggs instead of patient's own",
              "Recipient's uterus prepared for embryo transfer",
              "Increases pregnancy chances with poor ovarian reserve"
            ]
          }
        ],
        note: "The choice of COS protocol depends on various factors, including age, ovarian reserve, previous fertility treatments, and overall health. Your fertility specialist will recommend the best protocol for your unique situation."
      }
    },
    {
      id: 'success-rates',
      title: "COS Success Rates",
      icon: <TrendingUp className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Success depends on age, ovarian reserve, and overall health.",
      fullContent: {
        generalRates: {
          title: "General Success Rates:",
          rates: [
            "<strong>Egg Retrieval Success:</strong> Around 70-80% of stimulated cycles result in successful egg retrieval with multiple eggs collected",
            "<strong>Fertilization Success:</strong> 50-70% of retrieved eggs typically fertilize after being combined with sperm",
            "<strong>Embryo Development Success:</strong> Approximately 30-50% of fertilized eggs develop into viable embryos suitable for transfer or freezing"
          ]
        },
        pregnancyRates: {
          title: "Pregnancy Success (IVF Outcomes):",
          byAge: [
            "<strong>Under 35 years:</strong> ~32% chance of live birth per embryo transfer",
            "<strong>35-37 years:</strong> ~25%",
            "<strong>38-39 years:</strong> ~19%",
            "<strong>40-42 years:</strong> ~11%",
            "<strong>Over 42 years:</strong> Less than 5%"
          ]
        },
        factors: {
          title: "Factors Influencing Success:",
          list: [
            "<strong>Age:</strong> Younger patients have higher chances of retrieving good-quality eggs",
            "<strong>Ovarian Reserve:</strong> Higher AMH levels and antral follicle count generally mean better response",
            "<strong>Lifestyle Factors:</strong> Optimal weight, avoiding alcohol, smoking, and caffeine improve outcomes",
            "<strong>Underlying Conditions:</strong> PCOS or endometriosis may affect ovarian response",
            "<strong>Protocol Customization:</strong> Tailored stimulation protocols significantly impact egg quality and quantity"
          ]
        },
        faqs: [
          {
            question: "Does a higher number of eggs mean better success?",
            answer: "Not necessarily. While more eggs increase the likelihood of obtaining high-quality embryos, it's the quality of eggs, not just the quantity, that matters most."
          },
          {
            question: "Are success rates the same for everyone?",
            answer: "No. Success rates vary widely based on individual factors like age, fertility diagnosis, and how your body responds to medications."
          },
          {
            question: "How can I improve my chances during COS?",
            answer: "Follow your doctor's advice, attend all monitoring appointments, and adopt a healthy lifestyle. Proper hydration and stress management also help."
          }
        ]
      }
    },
    {
      id: 'post-cos',
      title: "What Happens After COS?",
      icon: <Heart className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Understanding the journey from egg retrieval to embryo transfer and beyond.",
      fullContent: {
        nextSteps: [
          {
            title: "Monitoring and Assessment",
            description: "Your fertility specialist monitors your response through blood tests and ultrasounds to assess follicle growth in your ovaries."
          },
          {
            title: "Triggering Ovulation",
            description: "Once follicles reach optimal size, a final hCG trigger shot is given to stimulate ovulation, ensuring eggs mature and are ready for retrieval."
          },
          {
            title: "Egg Retrieval (Aspiration)",
            description: "About 36 hours after the trigger shot, eggs are retrieved from ovaries under sedation using a needle to collect eggs from follicles."
          },
          {
            title: "Fertilization",
            description: "Retrieved eggs are fertilized in the laboratory using either IVF or ICSI, depending on your fertility situation."
          },
          {
            title: "Embryo Development",
            description: "Fertilized eggs (embryos) are monitored for development over the next few days to identify those with the best chance of implantation."
          },
          {
            title: "Embryo Transfer",
            description: "After 3-5 days of embryo culture, the best embryos are selected and transferred into your uterus under ultrasound guidance."
          },
          {
            title: "Post-Transfer Care",
            description: "You'll typically be prescribed hormones (such as progesterone) to support the uterine lining and enhance chances of successful implantation."
          },
          {
            title: "Pregnancy Test",
            description: "About 10-14 days after embryo transfer, you'll have a blood test to determine if the embryo has implanted and pregnancy has been achieved."
          }
        ],
        eggOptions: "After eggs are collected, they can be: (1) Fertilized in a lab for IVF treatment, or (2) Frozen for future use."
      }
    },
    {
      id: 'faqs',
      title: "Frequently Asked Questions",
      icon: <AlertTriangle className="w-12 h-12 text-[#9781bc]" />,
      shortDescription: "Common questions about the COS process and experience.",
      fullContent: {
        questions: [
          {
            q: "How do I prepare for COS?",
            a: "Start by following a nutrient-rich diet and drinking plenty of water. Your doctor may recommend prenatal vitamins and lifestyle adjustments to improve egg quality."
          },
          {
            q: "Will I need to take time off work?",
            a: "Most appointments, like ultrasounds and injections, are quick. However, you may need to take a day off for egg retrieval."
          },
          {
            q: "Can the treatment fail?",
            a: "Yes, not all cycles result in mature eggs or embryos. Your doctor can review options for another cycle or alternative treatments if needed."
          },
          {
            q: "Are there long-term effects of COS?",
            a: "Studies show no long-term health risks from COS medications when properly administered. However, your doctor will discuss any individual risks based on your health."
          },
          {
            q: "Can I exercise during COS?",
            a: "Light activities like walking or yoga are fine, but avoid high-impact exercises to reduce the risk of ovarian twisting (ovarian torsion)."
          },
          {
            q: "What if I over-respond to the medication?",
            a: "If your ovaries produce too many eggs, you may develop ovarian hyperstimulation syndrome (OHSS). This condition is rare but manageable with early intervention. Your doctor will monitor for this closely."
          },
          {
            q: "Can I take other medications during COS?",
            a: "Always inform your doctor about any other medicines or supplements you are taking to avoid potential interactions."
          },
          {
            q: "Is age a significant factor?",
            a: "Yes, age plays a crucial role in how your body responds to COS and the quality of eggs retrieved. Younger patients generally have a higher chance of success."
          },
          {
            q: "What if COS doesn't work?",
            a: "If stimulation doesn't yield sufficient eggs or follicles, your doctor may adjust the protocol or recommend alternative options like donor eggs."
          },
          {
            q: "Is COS safe?",
            a: "Controlled ovarian stimulation is a widely used and safe procedure. However, like any treatment, it may have side effects such as mild bloating or discomfort. Your doctor will monitor you closely to ensure your safety."
          }
        ],
        importantDetails: [
          {
            title: "Impact of Lifestyle Choices",
            description: "A healthy lifestyle can significantly influence COS success. Maintaining a balanced diet, regular exercise, and avoiding alcohol, caffeine, and smoking can enhance outcomes."
          },
          {
            title: "Emotional Preparation",
            description: "Hormonal treatments can cause mood swings, stress, or anxiety. Many clinics offer counseling or support groups to help you manage emotional challenges during the process."
          },
          {
            title: "Costs and Insurance Coverage",
            description: "While NHS coverage exists in some cases, patients should clarify the financial aspects, including costs of medication, monitoring, and additional procedures like embryo freezing."
          },
          {
            title: "Alternative Outcomes",
            description: "Not all eggs retrieved will fertilize or develop into healthy embryos. It's important to discuss possible outcomes and next steps, including donor options, with your doctor."
          }
        ]
      }
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
        const cardIndex = sections.findIndex(s => s.id === hash);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Controlled Ovarian Stimulation (COS)
            </h1>
            <p className="text-lg text-purple-100">
              A foundational fertility treatment to optimize egg production and enhance pregnancy chances
            </p>
          </motion.div>
        </section>

        {/* Main Content Sections */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                ref={sectionRefs[section.id]}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#9781bc] scroll-mt-[190px]"
              >
                <div className="flex items-start gap-6 mb-4">
                  <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.shortDescription}
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

                {/* Expanded Content */}
                {expandedCard === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    {/* What is COS */}
                    {section.id === 'what-is-cos' && (
                      <>
                        <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.fullContent.intro }} />
                        <div className="bg-purple-50 rounded-xl p-6">
                          <h3 className="font-semibold text-gray-800 mb-3">Key Points:</h3>
                          <ul className="space-y-2">
                            {section.fullContent.keyPoints.map((point, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700">
                                <span className="text-[#9781bc] mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {/* When Needed */}
                    {section.id === 'when-needed' && (
                      <>
                        <p className="text-gray-700 mb-4 leading-relaxed">{section.fullContent.intro}</p>
                        <ul className="space-y-3">
                          {section.fullContent.conditions.map((condition, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-[#9781bc] mt-1">•</span>
                              <span dangerouslySetInnerHTML={{ __html: condition }} />
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* Process */}
                    {section.id === 'process' && (
                      <>
                        <div className="space-y-6 mb-6">
                          {section.fullContent.steps.map((step, i) => (
                            <div key={i} className="pl-4 border-l-2 border-purple-200">
                              <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                                {i + 1}. {step.title}
                              </h3>
                              <p className="text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.fullContent.timeframe }} />
                        </div>
                      </>
                    )}

                    {/* Protocols */}
                    {section.id === 'protocols' && (
                      <>
                        <div className="space-y-6 mb-6">
                          {section.fullContent.protocols.map((protocol, i) => (
                            <div key={i} className="bg-purple-50 rounded-xl p-6">
                              <h3 className="font-bold text-gray-800 mb-2">{protocol.name}</h3>
                              <p className="text-sm text-gray-600 mb-3 italic">Used for: {protocol.usedFor}</p>
                              <ul className="space-y-2">
                                {protocol.details.map((detail, j) => (
                                  <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                                    <span className="text-[#9781bc] mt-1">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Important:</strong> {section.fullContent.note}
                          </p>
                        </div>
                      </>
                    )}

                    {/* Success Rates */}
                    {section.id === 'success-rates' && (
                      <>
                        <div className="space-y-6">
                          {/* General Rates */}
                          <div>
                            <h3 className="font-bold text-gray-800 mb-3">{section.fullContent.generalRates.title}</h3>
                            <ul className="space-y-3">
                              {section.fullContent.generalRates.rates.map((rate, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <span className="text-green-600 mt-1">•</span>
                                  <span dangerouslySetInnerHTML={{ __html: rate }} />
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pregnancy Rates */}
                          <div className="bg-purple-50 rounded-xl p-6">
                            <h3 className="font-bold text-gray-800 mb-3">{section.fullContent.pregnancyRates.title}</h3>
                            <ul className="space-y-2">
                              {section.fullContent.pregnancyRates.byAge.map((rate, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <span className="text-[#9781bc] mt-1">•</span>
                                  <span dangerouslySetInnerHTML={{ __html: rate }} />
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Factors */}
                          <div>
                            <h3 className="font-bold text-gray-800 mb-3">{section.fullContent.factors.title}</h3>
                            <ul className="space-y-3">
                              {section.fullContent.factors.list.map((factor, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <span className="text-[#9781bc] mt-1">•</span>
                                  <span dangerouslySetInnerHTML={{ __html: factor }} />
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* FAQs within Success Rates */}
                          <div className="bg-blue-50 rounded-xl p-6">
                            <h3 className="font-bold text-gray-800 mb-4">Common Questions:</h3>
                            <div className="space-y-4">
                              {section.fullContent.faqs.map((faq, i) => (
                                <div key={i}>
                                  <p className="font-semibold text-gray-800 mb-1">{faq.question}</p>
                                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Post-COS */}
                    {section.id === 'post-cos' && (
                      <>
                        <div className="space-y-6 mb-6">
                          {section.fullContent.nextSteps.map((step, i) => (
                            <div key={i} className="pl-4 border-l-2 border-purple-200">
                              <h3 className="font-semibold text-gray-800 mb-2">
                                {i + 1}. {step.title}
                              </h3>
                              <p className="text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Next Options:</strong> {section.fullContent.eggOptions}
                          </p>
                        </div>
                      </>
                    )}

                    {/* FAQs */}
                    {section.id === 'faqs' && (
                      <>
                        <div className="space-y-4 mb-6">
                          {section.fullContent.questions.map((faq, i) => (
                            <div key={i} className="bg-purple-50 rounded-xl p-4">
                              <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                              <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-800 text-xl">Important Details to Keep in Mind:</h3>
                          {section.fullContent.importantDetails.map((detail, i) => (
                            <div key={i} className="bg-blue-50 rounded-xl p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">{detail.title}</h4>
                              <p className="text-gray-700 text-sm leading-relaxed">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing Message */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Maa Kauvery?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Maa Kauvery, our experienced team uses the latest technology to provide safe, personalized fertility care. We will guide you through every step of the process and support you in your journey to parenthood.
            </p>
            <p className="text-gray-700 italic">
              Controlled ovarian stimulation can be an important stage in overcoming infertility and creating the family you dream of. Talk to our specialists today to learn more.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}