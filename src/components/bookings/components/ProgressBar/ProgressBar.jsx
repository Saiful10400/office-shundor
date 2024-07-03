// ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';

// import steps images.
import route from "../../../../assets/images/booking/icons/route.png"
import sender from "../../../../assets/images/booking/icons/sender.png"
import receiver from "../../../../assets/images/booking/icons/receiver.png"
import parcel from "../../../../assets/images/booking/icons/parcel.png"
import pickup from "../../../../assets/images/booking/icons/pickup.png"
import shipment from "../../../../assets/images/booking/icons/shipment.png"
import payment from "../../../../assets/images/booking/icons/payment.png"
import review from "../../../../assets/images/booking/icons/review.png"


const ProgressBar = ({ currentStepIndex, steps, stepNames }) => {
    const progressPercentage = (currentStepIndex / (steps.length - 1)) * 100;

    const stepsData=[
        {
            index:0,
            icon:route
        }
        ,
        {
            index:1,
            icon:sender
        }
        ,
        {
            index:2,
            icon:receiver
        }
        ,
        {
            index:3,
            icon:parcel
        }
        ,
        {
            index:4,
            icon:pickup
        }
        ,
        {
            index:5,
            icon:shipment
        }
        ,
        {
            index:6,
            icon:payment
        }
        ,
        {
            index:7,
            icon:review
        }
    ]

    // progress steps icon validation.
    const getIcon=(index)=>{
        let icon=stepsData.find(item=>item.index===index)?.icon
        return icon

    }

    return (
        <div className="progress-bar-container">
            <div className="step-info ">
                {stepNames.map((step, idx) => {
                    const stepPosition = (idx / (steps.length - 1)) * 100;
                    return (
                        <div key={idx} className="step-item flex flex-col items-center" style={{ left: `${stepPosition}%` }}>
                            <div className={`step-number text-[0.8rem] ${currentStepIndex >= idx ? 'active-number' : ''}`}>
                                {/* <div>{getIcon(idx + 1)}</div> */}
                                <img className='w-[27px] h-[27px] object-contain' src={getIcon(idx)} alt="" />
                            </div>
                            <div className={`step-label ${currentStepIndex >= idx ? 'font-medium' : ''}`}>
                                {step}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="progress-bar-background ">
                <div className="progress-bar rounded-lg " style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
