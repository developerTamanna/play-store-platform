import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this website about?",
      answer:
        "This website provides the best apps and tools that are top-rated and handpicked for users.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes! You can explore most of the apps for free. Some may have premium features.",
    },
    {
      question: "How often do you update the apps?",
      answer:
        "We regularly update our app list to make sure you get the latest and most useful tools.",
    },
    {
      question: "Can I suggest an app?",
      answer:
        "Absolutely! You can contact us and suggest any app you think should be added.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-6 md:px-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl">
        {/* Image Section */}
        <div data-aos="slide-right" className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6146/6146581.png"
            alt="FAQ illustration"
            className="w-80 h-auto object-contain"
          />
        </div>
        {/* FAQ Section */}
        <div data-aos="slide-left">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow border border-base-300 bg-white rounded-lg shadow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium text-primary">
                  {faq.question}
                </div>
                <div className="collapse-content text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
