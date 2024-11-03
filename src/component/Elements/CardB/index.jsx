const CardB = ({
  cardTitle = "Credit Card",
  logoSrc = "", // Default to an empty string
  accountNumber = "1234 5678 9012",
  totalAmount = "$25,000",
  cardType = "Master Card",
}) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-lg transition-transform transform hover:scale-105 w-120 h-144">
      {/* Header Card */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-500">{cardTitle}</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">{cardType}</span>
          {/* Conditional rendering for the logo */}
          {logoSrc ? <img src={logoSrc} alt={cardType} className="h-6" /> : <span className="text-gray-500 text-sm"></span>}
        </div>
      </div>

      {/* Account Details */}
      <div className="mb-2">
        <p className="text-xl font-bold">{accountNumber}</p>
        <p className="text-gray-500 text-sm">Account number</p>
      </div>
      <div className="mb-4">
        <p className="text-2xl font-bold">{totalAmount}</p>
        <p className="text-gray-500 text-sm">Total amount</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="text-primary font-medium">Remove</button>
        <button className="bg-primary text-white py-1 px-3 rounded-md text-sm">Details &gt;</button>
      </div>
    </div>
  );
};

export default CardB;
