import React from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';

const ReceiverForm = ({
    receiverName,
    receiverEmail,
    receiverMobileNumber,
    receiverDistrict,
    receiverLandmark,
    receiverCity,
    receiverAddress,
    updateFields, fetchedFormData }) => {
    const { country, city } = fetchedFormData
    return (
        <FormWrapper title="Receiver Details">
            <div className="flex w-full sender-form-container my-10">
                <input
                    autoFocus
                    required
                    type="text"
                    placeholder='Receiver Name'
                    value={receiverName}
                    onChange={e => updateFields({ receiverName: e.target.value })}
                    className="w-full border-0 outline-none mr-4 rounded-lg"
                />
                <input
                    required
                    type="email"
                    placeholder='Receiver Email'
                    value={receiverEmail}
                    onChange={e => updateFields({ receiverEmail: e.target.value })}
                    className="w-full border-0 outline-none ml-4 rounded-lg"
                />
            </div>

            <div className="flex w-full sender-form-container my-10">
                <input
                    autoFocus
                    required
                    type="number"
                    placeholder='Receiver Mobile Number'
                    value={receiverMobileNumber}
                    onChange={e => updateFields({ receiverMobileNumber: e.target.value })}
                    className="w-full border-0 outline-none mr-4 rounded-lg"
                />

                <select
                    
                    value={receiverDistrict}
                    onChange={e => updateFields({ receiverDistrict: e.target.value })}
                    className="w-full border-0 outline-none ml-4 rounded-lg"
                >
                    <option value={""} disabled selected hidden>Country</option>
                    {
                        country?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                    }
                </select>
            </div>

            <div className="flex w-full sender-form-container my-10">
                <select
                    
                    value={receiverCity}
                    onChange={e => updateFields({ receiverCity: e.target.value })}
                    className="w-full border-0 outline-none mr-4 rounded-lg"
                >
                    <option value={""} disabled selected hidden>City</option>
                    {
                        city?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                    }
                </select>

                <input
                    type="text"
                    placeholder='Nearest Landmark (Optional)'
                    value={receiverLandmark}
                    onChange={e => updateFields({ receiverLandmark: e.target.value })}
                    className="w-full border-0 outline-none ml-4 rounded-lg"
                />
            </div>

            <div className="sender-form-container mt-20 mb-16">
                <textarea
                    cols={10}
                    row={4}
                    placeholder='Receiver Additional Address Information'
                    value={receiverAddress}
                    onChange={e => updateFields({ receiverAddress: e.target.value })}
                    className="w-full border-0 outline-none rounded-lg"
                ></textarea>
            </div>
        </FormWrapper>
    );
};

export default ReceiverForm;