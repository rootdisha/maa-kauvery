import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Beaker, Syringe, Heart, TrendingUp, DollarSign, AlertTriangle, Lightbulb, HelpCircle, ShieldCheck } from "lucide-react";
import { navBarHeight } from "../../utils/constants";

export default function IVFCompleteGuide() {
  const sections = [
    {
      id: "what-is-ivf",
      title: "What is IVF?",
      icon: <BookOpen className="w-8 h-8" />,
      content: "IVF is a medical process where eggs are taken from a woman's ovaries and fertilized with sperm in a lab. The fertilized egg, called an embryo, is then placed back into the woman's womb (uterus) to grow into a baby."
    },
    {
      id: "who-can-benefit",
      title: "Who Can Benefit from IVF?",
      icon: <Users className="w-8 h-8" />,
      content: "IVF can help people who face challenges such as:",
      list: [
        "<strong>Blocked or Damaged Fallopian Tubes:</strong> Preventing natural fertilization.",
        "<strong>Male Factor Infertility:</strong> Low sperm count or poor motility.",
        "<strong>Unexplained Infertility:</strong> When no clear cause of infertility is found.",
        "<strong>Age-Related Infertility:</strong> Women over 35 may benefit from IVF.",
        "<strong>Genetic Conditions:</strong> To avoid passing on certain genetic disorders.",
        "<strong>Same-Sex Couples or Single Parents:</strong> Using donor eggs or sperm to have a baby."
      ]
    },
    {
      id: "ivf-steps",
      title: "The Steps of IVF",
      icon: <Beaker className="w-8 h-8" />,
      steps: [
        {
          title: "Preparation with Medications",
          content: "Your doctor may prescribe oestrogen or birth control pills before starting the IVF process. These help regulate your cycle and improve the chances of retrieving multiple mature eggs."
        },
        {
          title: "Ovarian Stimulation",
          content: "You'll take medications to stimulate your ovaries to produce multiple eggs instead of the usual single egg per cycle. Regular ultrasounds and blood tests will monitor your progress to ensure the eggs are growing well."
        },
        {
          title: "Monitoring Progress",
          content: "Vaginal ultrasounds are used to check how your ovaries respond to the medications. If needed, adjustments to your treatment plan may be made."
        },
        {
          title: "Egg Retrieval",
          content: "About 36 hours after the final hormone injection, your doctor will use a thin needle guided by ultrasound to remove mature eggs from your ovaries. This is done under mild sedation and takes 15–30 minutes."
        },
        {
          title: "Sperm Collection",
          content: "A fresh semen sample is usually collected on the day of egg retrieval. If a fresh sample isn't available, a frozen one can be used."
        },
        {
          title: "Fertilization in the Lab",
          content: "The eggs are combined with sperm in a lab to create embryos. In some cases, a single sperm is injected into an egg (ICSI - Intracytoplasmic Sperm Injection)."
        },
        {
          title: "Embryo Culture",
          content: "The fertilized eggs are observed as they develop into embryos. This process takes about 3–5 days. Any extra good-quality embryos may be frozen for future use."
        },
        {
          title: "Embryo Transfer",
          content: "The best embryo(s) is placed into your womb using a thin catheter. This procedure is usually painless and takes a few minutes."
        },
        {
          title: "The Two-Week Wait",
          content: "After the transfer, you'll wait about 14 days before taking a pregnancy test to check if the procedure was successful."
        }
      ],
      closing: "By following these steps, IVF provides a structured pathway to help couples achieve pregnancy. Each stage is carefully monitored to maximize the chances of success."
    },
    {
      id: "hormonal-injections",
      title: "IVF and Hormonal Injections",
      icon: <Syringe className="w-8 h-8" />,
      content: "Injections are a key part of the IVF process, helping at every stage to increase the chances of success:",
      subsections: [
        {
          title: "Stimulating Egg Growth:",
          content: "Hormonal injections like FSH and LH encourage the ovaries to produce multiple eggs instead of the single egg typically released in a natural cycle."
        },
        {
          title: "Triggering Maturation:",
          content: "Once the eggs are ready, a trigger shot containing hCG ensures they mature fully for retrieval. Timing this injection precisely is essential."
        },
        {
          title: "Preparing the Uterus:",
          content: "After egg retrieval, progesterone injections help prepare the uterine lining for the embryo to implant successfully. This creates an ideal environment for pregnancy."
        },
        {
          title: "Special Techniques:",
          content: "For some cases, a method called ICSI (intracytoplasmic sperm injection) is used to inject a single sperm directly into an egg, improving fertilization chances."
        }
      ],
      note: "Though temporary side effects from injections may occur, they play a vital role in achieving a successful pregnancy. Advances in technology continue to improve these methods, offering hope to couples facing infertility challenges.",
      tip: "Your doctor will guide you on when and how to take these injections. If you're nervous, ask for advice or assistance to make the process easier."
    },
    {
      id: "what-to-expect",
      title: "What to Expect During the Process",
      icon: <Heart className="w-8 h-8" />,
      subsections: [
        {
          title: "Physical Impact:",
          content: "Hormonal injections may cause mild side effects like mood swings, bloating, or headaches."
        },
        {
          title: "Emotional Impact:",
          content: "IVF can feel overwhelming. Talking to a counselor or joining a support group can help."
        },
        {
          title: "Time Commitment:",
          content: "The process requires regular doctor visits for monitoring and procedures."
        }
      ]
    },
    {
      id: "success-rates",
      title: "Success Rates of IVF",
      icon: <TrendingUp className="w-8 h-8" />,
      content: "The success of IVF depends on factors such as age, health, and the cause of infertility.",
      list: [
        "<strong>Women under 35:</strong> ~40% success rate per cycle.",
        "<strong>Women aged 35–37:</strong> ~30% success rate per cycle.",
        "<strong>Women over 40:</strong> Success rates decrease to 10–15% or lower."
      ],
      note: "Your doctor will discuss your specific chances based on your situation."
    },
    {
      id: "costs",
      title: "Costs of IVF",
      icon: <DollarSign className="w-8 h-8" />,
      content: "IVF can be expensive, especially if not covered by insurance. Discuss costs with your doctor, including additional fees for medications or procedures like ICSI."
    },
    {
      id: "complications",
      title: "Potential Complications Associated with IVF",
      icon: <AlertTriangle className="w-8 h-8" />,
      content: "While IVF is generally safe, like any medical procedure, it comes with some risks. Understanding them helps you stay informed:",
      subsections: [
        {
          title: "Ovarian Hyperstimulation Syndrome (OHSS):",
          content: "A condition where ovaries overreact to fertility medications, causing swelling, pain, or fluid buildup. Severe cases are rare."
        },
        {
          title: "Multiple Pregnancies:",
          content: "IVF increases the chance of twins or triplets, which can lead to higher risks during pregnancy."
        },
        {
          title: "Ectopic Pregnancy:",
          content: "In rare cases, the embryo implants outside the uterus, such as in the fallopian tubes."
        },
        {
          title: "Emotional Stress:",
          content: "The emotional toll of IVF failure can be challenging for patients and their partners."
        },
        {
          title: "Birth Complications:",
          content: "Though rare, there may be a slightly higher risk of premature delivery or low birth weight."
        },
        {
          title: "Reaction to Medications:",
          content: "Side effects like headaches, bloating, or mood swings may occur."
        }
      ],
      note: "Always discuss risks with your doctor and seek help if you notice unusual symptoms."
    },
    {
      id: "preparation",
      title: "How to Prepare for IVF",
      icon: <Lightbulb className="w-8 h-8" />,
      subsections: [
        {
          title: "Maintain a Healthy Lifestyle:",
          content: "Eat well, exercise moderately, and avoid smoking, alcohol, and caffeine."
        },
        {
          title: "Reduce Stress:",
          content: "Yoga, meditation, or counseling can help you stay positive."
        },
        {
          title: "Ask Questions:",
          content: "Understand every step of the process and know what to expect."
        },
        {
          title: "Build a Support System:",
          content: "Rely on your partner, family, or friends for emotional support."
        }
      ]
    },
    {
      id: "faqs",
      title: "FAQs About IVF",
      icon: <HelpCircle className="w-8 h-8" />,
      faqs: [
        {
          question: "Does IVF hurt?",
          answer: "Most steps are painless, though some, like egg retrieval, may cause mild discomfort. Sedation is used to keep you comfortable."
        },
        {
          question: "How long does one IVF cycle take?",
          answer: "An entire cycle takes about 4–6 weeks, but this can vary."
        },
        {
          question: "Can I choose the gender of my baby?",
          answer: "In some countries, gender selection is allowed only for medical reasons."
        },
        {
          question: "What happens if IVF fails?",
          answer: "You may try another cycle or consider other options like donor eggs or sperm, or surrogacy."
        },
        {
          question: "Is IVF safe for the baby?",
          answer: "Studies show that babies born through IVF are as healthy as those conceived naturally."
        }
      ]
    },
    {
      id: "precautions",
      title: "Precautions Following an IVF Procedure",
      icon: <ShieldCheck className="w-8 h-8" />,
      content: "After an IVF procedure, taking care of your body is essential to improve the chances of success and avoid complications. Here are some precautions:",
      subsections: [
        {
          title: "Take it Easy:",
          content: "Avoid heavy lifting, strenuous activities, or intense workouts. Resting doesn't mean complete bed rest, but give your body time to recover."
        },
        {
          title: "Stay Hydrated:",
          content: "Drink plenty of water to help your body process medications and support overall health."
        },
        {
          title: "Avoid Alcohol and Smoking:",
          content: "These can harm your chances of a successful pregnancy and should be avoided during treatment and after embryo transfer."
        },
        {
          title: "Eat a Balanced Diet:",
          content: "Focus on nutritious, protein-rich meals with plenty of fruits, vegetables, and whole grains. Avoid junk food and raw or undercooked foods."
        },
        {
          title: "Avoid High Stress:",
          content: "Engage in relaxing activities like meditation or light reading. Mental health plays an important role in IVF success."
        },
        {
          title: "Follow Medical Advice:",
          content: "Take prescribed medications on time, and don't skip appointments with your doctor."
        },
        {
          title: "Monitor Symptoms:",
          content: "If you experience severe pain, unusual bleeding, or other concerns, contact your doctor immediately."
        }
      ]
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
            A Complete Guide to IVF
          </h1>
          <p className="text-lg text-purple-100">
            In Vitro Fertilization
          </p>
          <p className="mt-4 text-purple-50 max-w-3xl mx-auto">
            If you're considering IVF (In Vitro Fertilization) or just want to understand it better, this is for you. IVF is a well-known fertility treatment that has helped many people become parents. Let's explore what it involves, what to expect, and the common questions people have.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#9781bc] scroll-mt-[190px]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl text-[#9781bc] flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pt-2">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.content }} />
              )}

              {section.list && (
                <ul className="space-y-3 mb-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#9781bc] mt-1 flex-shrink-0">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              )}

              {section.steps && (
                <>
                  <div className="space-y-6 mb-4">
                    {section.steps.map((step, i) => (
                      <div key={i} className="pl-4 border-l-2 border-purple-200">
                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                          {i + 1}. {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{step.content}</p>
                      </div>
                    ))}
                  </div>
                  {section.closing && (
                    <p className="text-gray-700 leading-relaxed italic bg-purple-50 p-4 rounded-lg">
                      {section.closing}
                    </p>
                  )}
                </>
              )}

              {section.subsections && (
                <div className="space-y-4">
                  {section.subsections.map((sub, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        <em>{sub.title}</em>
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.note && (
                <p className="text-gray-700 leading-relaxed mt-4 bg-purple-50 p-4 rounded-lg">
                  {section.note}
                </p>
              )}

              {section.tip && (
                <p className="text-gray-700 leading-relaxed mt-4 italic">
                  {section.tip}
                </p>
              )}

              {section.faqs && (
                <div className="space-y-4">
                  {section.faqs.map((faq, i) => (
                    <div key={i} className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {i + 1}. {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
</div>
  );
}