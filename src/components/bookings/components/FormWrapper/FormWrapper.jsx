import "./FormWrapper.css";

const FormWrapper = ({ title, children }) => {
    return (
        <>
            <h2 className="font-medium text-center text-4xl w-full poppins-font absolute left-0 top-[40px]">
                {title}
            </h2>
            <div className="container">
                {children}
            </div>
        </>
    )
};

export default FormWrapper;