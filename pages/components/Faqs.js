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
            question: 'Why should we join Changepay?            ',
            answer: 'Delivery of food and other services orders on app Easy delivery through smart boxes Exclusive offers and promotions for students.',
        },
        {
            question: 'What are the features other than buying from merchants?             ',
            answer: 'Changepay is not only a commerce platform but also enables the student sellers, selling tickets in  events and other college club networks. Changepay is a one stop solution for students for any commerce activities.             ',
        },
        {
            question: 'Can students order or buy from outside merchants?             ',
            answer: 'Its left to the courtesy college administration.     ',
        },
        {
            question: 'How are smart boxes useful?             ',
            answer: 'Smart boxes eliminate crowding in front of shops. Students can order and pick up whenever they want which helps in saving lot of time for students.  ',
        }
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
