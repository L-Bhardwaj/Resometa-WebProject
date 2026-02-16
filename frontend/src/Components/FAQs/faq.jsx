import { useState } from "react";


const FAQ = ({ title, subtitle, faqs }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="resometa-faq-wrapper">
      {/* Header */}
      <div className="resometa-faq-header">
        <h2 className="resometa-faq-title">{title}</h2>
        <p className="resometa-faq-subtitle">{subtitle}</p>
      </div>

      {/* FAQ Cards */}
      <div className="resometa-faq-list">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`resometa-faq-card ${
              openId === faq.id ? "active" : ""
            }`}
            onClick={() => handleToggle(faq.id)}
          >
            <div className="resometa-faq-question-row">
              <h3 className="resometa-faq-question">{faq.question}</h3>
              <span className="resometa-faq-icon">
                {openId === faq.id ? "−" : "+"}
              </span>
            </div>

            <div className="resometa-faq-answer-wrapper">
              <p className="resometa-faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
