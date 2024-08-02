// src/FAQ.js
import React, { useState } from 'react';
import './style.css';

export const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'What is the typical turnaround time for a website project?',
            answer: 'The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, I work closely with my clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.',
            open: false,
        },
        {
            question: 'Can you help with website maintenance and updates after the project is completed?',
            answer: 'Yes, I offer ongoing website maintenance and support services for my clients. Whether you need to update content, fix issues, or add new features, I am here to help.',
            open: false,
        },
        {
            question: 'What is your process for website design and development?',
            answer: 'My process typically involves a discovery call to discuss the client needs and goals, followed by research and strategy development. From there, I move into the design and development phase, where I create wireframes, prototypes, and design concepts before finalizing the website. I then perform quality assurance and testing before launching the website.',
            open: false,
        },
        {
            question: 'Do you have experience with responsive design?',
            answer: 'Yes, I have experience with responsive design. Ensuring that websites and applications look great and function well on all devices is a priority for me. I use flexible grid layouts, media queries, and other responsive design techniques to achieve this.',
            open: false,
        },
        {
            question: 'How do you ensure the quality of your work?',
            answer: 'Quality is a top priority for me. I follow best practices and industry standards in both design and development. I also conduct thorough testing and seek feedback at various stages of the project to ensure the final product meets or exceeds expectations.',
            open: false,
        },
        {
            question: 'What tools do you use for design and development?',
            answer: 'I use a variety of tools depending on the project requirements. For design, I primarily use Figma and Framer. For development, I use HTML, CSS, JavaScript, and frameworks like React. Additionally, I utilize tools like Git for version control and collaboration, and WordPress and Wix',
            open: false,
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    return { ...faq, open: !faq.open };
                } else {
                    return { ...faq, open: false };
                }
            })
        );
    };

    return (
        <section>
            <div className='faq-container'>
                <div className='faq-headerbox'>
                    <p>FAQ</p>
                    <h1>Common Questions</h1>
                </div>
                <div className='faqbox'>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFAQ(i)}>
                                    <span className="question-number"></span> {faq.question}
                                    <span className={`dropdown-icon ${faq.open ? 'open' : ''}`}>
                                        {faq.open ? '▲' : '▼'}
                                    </span>
                                </div>
                                {faq.open && (
                                    <div className="faq-answer">
                                        <span className="answer-number"></span> {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

