// ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStepIndex, steps, stepNames }) => {
    const progressPercentage = (currentStepIndex / (steps.length - 1)) * 100;

    return (
        <div className="progress-bar-container">
            <div className="step-info">
                {stepNames.map((step, idx) => {
                    const stepPosition = (idx / (steps.length - 1)) * 100;
                    return (
                        <div key={idx} className="step-item flex flex-col items-center" style={{ left: `${stepPosition}%` }}>
                            <div className={`step-number text-[0.8rem] ${currentStepIndex >= idx ? 'active-number' : ''}`}>
                                <div>{idx + 1}</div>
                            </div>
                            <div className={`step-label ${currentStepIndex >= idx ? 'font-medium' : ''}`}>
                                {step}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="progress-bar-background">
                <div className="progress-bar rounded-lg" style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
