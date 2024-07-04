import "./PaymentForm.css";
import FormWrapper from '../FormWrapper/FormWrapper';
import DropDown from "../../Shared_components/DropDown";

const PaymentForm = ({
    paymentType,
    updateFields
}) => {

    const paymentMethod=[
        "Credit Card","Visa Card","Master Card","Cash"
    ]
    return (
        <FormWrapper title="Payment Details">
            {/* <div className="payment-container">
                <div className="text-center font-semibold text-xl">How Would you like to pay</div>
                <select
                    
                    value={paymentType}
                    onChange={e => updateFields({ paymentType: e.target.value })}
                    className="w-full payment-input outline-none"
                >
                    <option value="" selected disabled hidden>Select Payment Method</option>
                    <option>Credit card</option>
                    <option>Visa Card</option>
                    <option>Master Card</option>
                    <option>Cash</option>
                </select>
            </div> */}

            <div className=' w-[40%] mx-auto flex justify-center items-center'>
                <DropDown required={true} alltimeValue={paymentType} valueUpdate={e => updateFields({ paymentType: e.target.value })} placeHolder={"Select Payment Method"}>
                    { paymentMethod?.map(item => <option value={item.routeName} key={item}>{item}</option>)}
                </DropDown>
            </div>


        </FormWrapper>
    );
};

export default PaymentForm;