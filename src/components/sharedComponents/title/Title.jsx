/* eslint-disable react/prop-types */


const Title = ({ heading }) => {
    return (
        <div>
            <h2 className="text-center text-5xl font-bold mb-4">{heading}</h2>
            <hr className="w-36 border-2 border-orange-600 mx-auto mb-8" />
        </div>
    );
};

export default Title;