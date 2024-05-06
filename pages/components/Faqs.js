import React, { useState } from 'react';

// ... (other imports and code)

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col border-2 border-custom-orange justify-between w-full py-4 pl-4 pr-3 mb-3 transition-all text-black rounded-xl shadowtransition-all duration-300">
            <div className="flex items-center text-black justify-between cursor-pointer" onClick={toggleAnswer}>
                <span className={`font-bold text-custom-orange`}>{question}</span>
                <div className={`p-2 bg-custom-orange rounded transform rotate-${isOpen ? '0' : '180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="mt-1 text-sm text-black answer">
                    {answer}
                </div>
            )}
        </div>
    );
};;

const FaqSection = () => {
    const faqData = [
        {
            question: 'What kind of support do you offer for college applications?',
            answer: 'We provide comprehensive support for college applications, including personalized guidance, application strategy development, assistance with essay writing, and preparation for interviews. Our goal is to ensure that each student presents a compelling and unique application that stands out to admissions committees.',
        },
        {
            question: 'Can you help with scholarship Applications?',
            answer: 'Absolutely! We offer dedicated assistance for scholarship applications. Our services include guidance on identifying suitable scholarships, crafting compelling application essays, and ensuring all required documentation is in order. We aim to maximize your chances of securing scholarships that align with your academic and personal achievements.',
        },
        {
            question: 'How experienced are your consultants?',
            answer: 'Our consultants are highly experienced professionals with a wealth of expertise in education consulting. Each member of our team possesses a strong background in academia, admissions, and career guidance. Rest assured, our consultants are committed to providing you with the highest level of expertise and personalized support to help you achieve your academic and career goals.',
        },
    ];

    return (
        <section className="font-poppins">
            <div className="py-24 mb-10  lg:block">
                <div className="max-w-4xl mx-auto mb-14">
                    <h1 className="mb-4 text-3xl font-bold text-center text-custom-orange">FAQs-Frequently Asked Questions</h1>
                    <p className="text-center mb-7 mx-auto text-gray-500">
                        We tailor the college selection by analyzing each student&apos;s academics, interests, and career goals,
                        ensuring a perfect match between student aspirations and college offerings
                    </p>
                    <p className=' '>
                        How do you personalize the college selection process?
                    </p>
                    <p className="mb-2 mx-auto text-gray-400">
                        Our personalization process for college selection is thorough and student-focused. We begin by evaluating the student&apos;s academic achievements and understanding their individual interests and passions. From there, we assess their long-term career aspirations. Combining these insights, we then curate a list of colleges that align perfectly with their unique academic and career objectives, ensuring a tailored match for each student.






                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="w-full p-4 rounded-md shadow-lg bg-stone-50 -mt-36 lg:full">
                    <div className="flex-1">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
