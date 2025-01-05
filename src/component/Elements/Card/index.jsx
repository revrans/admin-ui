const Card = (props) => {
const { title = false, desc, variant } = props;

  return (
    <div className={`flex flex-col flex-1 mb-6 ${variant}`}>
      {title && (
        <>
          {title.length == 1 ? (
            <div className="hidden md:block md:text-lg Omd:text-gray-02 md: mb-4"> {title}
          </div>
          ) : (
            <div className="text-1g text-gray-02 mb-4">{title}</div>
            )}
          </>
          )}
          <div className="bg-white rounded-1g px-6 py-5 shadow-xl flex-1">
          {desc}
          </div>
          </div>
      );
    };
    
export default Card;
