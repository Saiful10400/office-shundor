import React from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';
import DropDown from '../../Shared_components/DropDown';

const WhereToGo = ({ route, fetchedFormData, updateFields }) => {
    const { Route } = fetchedFormData // fetcherd data form server


    return (
        <FormWrapper title={"Route"}>
            <div className=' w-[40%] mx-auto flex justify-center items-center'>
                <DropDown required={true} alltimeValue={route} valueUpdate={e=>updateFields({ route: e.target.value })} placeHolder={"Select a route"}>
                    { Route?.map(item => <option value={item.routeName} key={item}>{item}</option>)}
                </DropDown>
            </div>
        </FormWrapper>
    );
};

export default WhereToGo;