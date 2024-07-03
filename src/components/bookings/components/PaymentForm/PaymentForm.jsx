import "./PaymentForm.css";
import FormWrapper from '../FormWrapper/FormWrapper';

const PaymentForm = ({
    paymentType,
    updateFields
}) => {
    return (
        <FormWrapper title="Payment Details">
            <div className="payment-container">
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
            </div>
        </FormWrapper>
    );
};

export default PaymentForm;