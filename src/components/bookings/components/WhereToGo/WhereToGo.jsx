import React from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';
import DropDown from '../../Shared_components/DropDown';

const WhereToGo = ({ route, fetchedFormData, updateFields }) => {
    // const { Route } = fetchedFormData
    const Route=["hi","go","now"]

    return (
        <FormWrapper title={"Route"}>
            <div className='min-h-44 flex justify-center items-center'>
                {/* <select 
                    value={route}
                    onChange={(e) => updateFields({ route: e.target.value })}
                    className=" payment-input outline-none"
                >
                    <option value="" selected disabled hidden>Select a destination</option>

                    {
                        Route?.map(item => <option value={item.routeName} key={item.id}>{item.routeName}</option>)
                    }

                </select> */}
                <DropDown alltimeValue={Route} valueUpdate={e=>updateFields({ route: e.target.value })} placeHolder={"Select a route"}>
                    { Route?.map(item => <option value={item.routeName} key={item}>{item}</option>)}
                </DropDown>
            </div>
        </FormWrapper>
    );
};

export default WhereToGo;