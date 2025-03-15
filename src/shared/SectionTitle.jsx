

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-4/5 mx-auto text-center py-16">
            <h3 className="text-blue-600 text-6xl font-bold my-12 uppercase">{heading}</h3>
            <p className="text-gray-600 text-xl font-medium mb-16">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
