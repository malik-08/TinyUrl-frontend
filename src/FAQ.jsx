import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      q: "What Is a URL Shortener?",
      a: "A URL shortener is a tool that converts a long web address into a much shorter link that redirects to the same destination.",
    },
    {
      q: "How Does a URL Shortener Work?",
      a: "It generates a unique short code, maps it to your original long URL in a database, and redirects visitors automatically when they click the short link.",
    },
    {
      q: "What Are the Benefits of Using a Short URL?",
      a: "Short URLs are easier to share, look cleaner, are easier to remember, and can be tracked for clicks and analytics.",
    },
    {
      q: "What Is a Custom URL Shortener?",
      a: "A custom URL shortener lets you choose your own alias or branded domain instead of a randomly generated short code.",
    },
    {
      q: "How Do I Shorten a URL for Free?",
      a: "Simply paste your long URL into the input box above, click 'Shorten Link', and you'll instantly get a shortened version — no account required.",
    },
    {
      q: "How Do I Know Your Service Is Reliable and Scalable?",
      a: "Our platform is built to handle high traffic volumes and has been trusted by millions of users since 2002.",
    },
    {
      q: "Can I Use a Domain I Already Own?",
      a: "Yes, with our branded domain feature you can connect your own domain to create fully custom short links.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 px-10 py-16 flex flex-wrap gap-10">
      <h2 className="text-3xl font-bold w-full max-w-xs">Frequently Asked Questions</h2>

      <div className="flex-1 min-w-[300px]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-slate-200 py-4">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left font-semibold text-[#0a2540]"
            >
              {faq.q}
              <span className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === i && (
              <p className="text-slate-600 text-sm mt-3">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;