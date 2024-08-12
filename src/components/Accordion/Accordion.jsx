"use client"
import React, {useState} from 'react';
import './accordion.css';

const dataCollection = [
    {
        question: 'How do I access the courses?',

        answer: 'Courses are accessible online through our platform. Simply log in and start learning. ',
    },

    {
        question: 'Can I learn at my own pace?',
        answer: 'Yes, our platform allows for self-paced learning. Learn anytime, anywhere!',
    },

    {
        question: 'Are there any prerequisites for the courses?',
        answer: ' Some courses may have prerequisites. Check the course description for details.',
    },

    {
        question: 'Can I get certified upon completion?',
        answer: ' Yes, we offer certification upon successful completion of select courses and programs.',
    },
    {
        question: `'How do I get support if I'm struggling with a course?'`,
        answer: ' Reach out to our support team through the platform, email, or live chat.',
    },

];


const Accord = () => {
    const [accordion, setOnAccordion] = useState(0);
    
    function toggleAccordion(index){
        if(index === accordion){
            setOnAccordion(-1)
            return
        }
        setOnAccordion(index)
    }

  return (
    <>
    <div className='accord_main_container'>
    <div className='accord_containner'>
        <div className='accordion_h1'>
            <span className='accordion_title'></span>
            <h1 className='font-bold text-5xl'>Frequently Asked Questions</h1>
            <p className='mt-5 text-[16px]'>Some of our student have something to say.</p>
        
        </div>
        <div className='accordion_cont'>
            {dataCollection.map((item, index)=> (
                <div key={index} onClick={()=> toggleAccordion(index)}>
                     <div className="accordion_cont_heading border rounded px-5 py-5">
                     <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                    </div>
                    
                    <div className='plus_minus'>
                        {accordion === index? (<>  <span className='verti pb-5 pr-5'>-</span></>): (<> <span className='verti pb-5 pr-5 font-bold'> ^ </span></>)}
                    </div>
                    <div>
                        <p className={accordion === index ? "active": "inactive"}>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
    </>
  );
};

export default Accord;