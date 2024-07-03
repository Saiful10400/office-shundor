// ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStepIndex, steps, stepNames,data }) => {
    const progressPercentage = (currentStepIndex / (steps.length - 1)) * 100;


    // data show according steps.

    const datafield=[
        {
            index:0,
            fields:["route"]
        }
        ,
        {
            index:1,
            fields:["senderName","senderEmail"]
        }
        ,
        {
            index:2,
            fields:["receiverName","receiverEmail"]
        }
        ,
        {
            index:3,
            fields:[]
        }
        ,
        {
            index:4,
            fields:["pickupCountry","scheduledDate"]
        }
        ,
        {
            index:5,
            fields:["cargoType"]
        }
        ,
        {
            index:6,
            fields:["paymentType"]
        }
        ,
        {
            index:7,
            fields:[]
        }
        ,
    ]

    const validateStepsData=(index)=>{
        console.log(index)

        const indexDataObject=datafield.find(item=>item.index===(index))
        

        if(indexDataObject.index===3){
            if(!data.productWeight||!data.productLength||!data.productWidth || !data.productHeight) return []
            const weight=`${data.productWeight} kg`
            const date=`${data.productLength} x ${data.productWidth} x ${data.productHeight} in`
            return [weight,date]
        }
        if(indexDataObject.index===4){
            const pickupCity=data.pickupCountry
            const date=data.scheduledDate
            if(!date.weekday||!date.day||!date.month) return []
            const time=`${date.weekday} ${date.day} ${date.month}`
            return [pickupCity,time]
        }
        else{
            const outputData=indexDataObject.fields.map(item=>data[item])
            return outputData
        }
    }
console.log(stepNames)
    return (
        <div className=' h-[700px] w-0 flex items-center justify-center'>
        <div className='mt-[100px]'>
            <div className="progress-bar-background rotate-90 w-[750px]  ">
                <div className="progress-bar rounded-lg " style={{ width: `${progressPercentage}%` }}></div>
            </div>


            <div className="step-info  rotate-90  ">
                {stepNames.map((step, idx) => {
                    const stepPosition =idx===0?((idx / (steps.length - 1)) * 100):((idx / (steps.length - 1)) * 100)-2.5
                    return (
                        <div key={idx} className="step-item flex items-start gap-x-11  w-[300px] h-[80px] " style={{ left: `${stepPosition}%` }}>
                            <div>
                            <div className={`step-number w-[14px] h-[14px] rounded-full ${currentStepIndex >= idx ? 'active-number' : ''}`}> 
                            </div>
                            </div>
                            <div className={`step-label  text-start w-full h-full ${currentStepIndex >= idx ? 'font-bold' : ''}`}>
                                <h1 className='text-xl'>{step}</h1>
                                <div className={`font-semibold mt-2`}>
                                {validateStepsData(idx).map((item,idx)=><h1 className='font-semibold text-base text-gray-800' key={idx}>{item}</h1>)}
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
        </div>
    );
};

export default ProgressBar;
