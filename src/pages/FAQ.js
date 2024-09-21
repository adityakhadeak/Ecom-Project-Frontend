// src/components/FAQ.js
import React, { useState } from 'react';
import '../utils/pages-css/FAQ.css';

const faqData = [
  {
    question: "What is QuickCart?",
    answer: "QuickCart is an eCommerce platform specializing in electronic products. We offer a wide range of gadgets, home appliances, and tech accessories at competitive prices.",
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button at the top right corner of the page and fill in your details. You’ll receive a confirmation email to verify your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, PayPal, and online banking. All transactions are secure and encrypted.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking link via email. You can also track your order by logging into your QuickCart account and navigating to the 'Order History' section.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on most items. To initiate a return, please visit the 'Returns' section on our website and follow the instructions provided.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team via email at support@quickcart.com or call us at (123) 456-7890. Our team is available from 9 AM to 6 PM, Monday to Friday.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most commonly asked questions about QuickCart.</p>
      </div>
      
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
