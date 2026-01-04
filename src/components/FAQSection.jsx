import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is an AI Model?",
      answer: "An AI model is a program that has been trained on a set of data to recognize patterns or make decisions without being explicitly programmed. It's the core of artificial intelligence applications.",
    },
    {
      question: "How can I add a new model?",
      answer: "To add a new model, you need to log in to your account, go to the 'Add Model' page, and fill in the required details like name, type, and description.",
    },
    {
      question: "Is this platform free to use?",
      answer: "Yes, we offer a free tier for individual developers to manage and explore AI models. We also have premium plans for enterprise needs.",
    },
    {
      question: "How do I update model details?",
      answer: "You can update any model you've added by navigating to 'My Models' and clicking the 'Update' button on the specific model card.",
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center heading-text-dark-aware font-bold mb-14">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title text-xl font-medium heading-text-dark-aware">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
