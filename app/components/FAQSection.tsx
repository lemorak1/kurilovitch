"use client";

import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  backgroundColor?: string;
  fontColor?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  backgroundColor = "#ffffff",
  fontColor = "#000000",
}) => {
  return (
    <section
      className="py-12"
      style={{ backgroundColor, color: fontColor }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border-b border-gray-300 pb-4 group"
            >
              <summary className="text-lg font-medium cursor-pointer group-hover:text-blue-500">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
