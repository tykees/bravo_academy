"use client"
import React, {useState} from 'react';
import './accordion.css';

const dataCollection = [
    {
        question: 'Projects Investment Reward',

        answer: ' Decentrabuilds will support projects that are building on web3 based on the decison through voting of the community and token holders. The projects we fund will have the obligation to support the investors($DBUILDS token holders) at the successful launch of the their project and token. The token received from the dapps will be distributed to all the people that participated in the voting round in proprotion to the $DBUILDS token they locked. There is a vesting period of 4 months for the token to be distributed to all holders. ',
    },

    {
        question: 'Lottery Reward',
        answer: ' Lottery reward is an engaging system to distribute reward from a pool. Ticket will be sold to participants and the lucky people wins the reward. Read the Litepaper for more info',
    },

    {
        question: 'Locking Reward',
        answer: ' Locking tokens allows you to participate in the voting rounds for projects which gives you back the reward through your votes and you also earn: 30days(12%APR), 90days(28%APR), 180days(58%APY) and 360days(88%APR).',
    },

    {
        question: 'Token burning ',
        answer: '  of the tokens in lottery will be burnt. 90% of BNB generated through vote will be used to buy back and burn.',
    },
    {
        question: 'Governance',
        answer: ' LDS tokens gives access to join the decision makers in the ecosystem.',
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
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat id dolorum?</p>
        
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