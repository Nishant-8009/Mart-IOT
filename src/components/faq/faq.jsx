import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './faq.css'; // Import custom CSS

const faqData = [
  {
    question: "How does your AI recruitment process work?",
    answer: "Our AI recruitment process leverages advanced algorithms to match candidates with job opportunities based on their skills, experience, and preferences. This ensures a more efficient and accurate hiring process."
  },
  {
    question: "What sets your company apart from traditional recruitment agencies?",
    answer: "Unlike traditional recruitment agencies, our platform uses data-driven insights and automation to streamline the hiring process. This allows us to offer faster, more effective recruitment solutions."
  },
  {
    question: "How do you ensure fairness and diversity in your candidate selection process?",
    answer: "We use unbiased algorithms that focus on qualifications and performance metrics to ensure a fair and diverse candidate selection process. Our commitment to diversity and inclusion is reflected in every stage of our hiring practices."
  },
  {
    question: "Can recruiters customize their candidate search criteria?",
    answer: "Yes, recruiters can customize their search criteria to find candidates who best match their specific needs. Our platform offers a variety of filters and tools to refine the search process."
  },
  {
    question: "How quickly can recruiters expect to find suitable candidates using your platform?",
    answer: "Our platform is designed to accelerate the recruitment process. Recruiters can expect to find suitable candidates much faster than traditional methods, often within a matter of days."
  },
  {
    question: "What support services do you offer to recruiters using your platform?",
    answer: "We provide comprehensive support services, including training, technical assistance, and dedicated account managers to ensure recruiters have everything they need to succeed."
  }
];

function FaqSection() {
  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="faq-section" id='faq'>
      <div className="btn-section">FAQs</div>
        <h2 style={{background: 'linear-gradient(90deg, #37C592 -0.99%, #7D25EC 104.61%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', 
    padding: '10px',
    marginBottom: '30px'
    }}>Frequently Asked Questions</h2>
      <Accordion className="accordion">
        {faqData.map((faq, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="faq-item"
          >
            <Accordion.Header onClick={() => toggleActiveKey(index.toString())}>
              {faq.question}
              <span className="faq-toggle-icon">
                {activeKey === index.toString() ? '−' : '+'}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqSection;
