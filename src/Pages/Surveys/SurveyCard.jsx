
const SurveyCard = ({ survey, handleDelete }) => {
  const { title, question, option_1, option_2, option_3, description, _id } = survey;

  return (
    <div>
      <div className="card my-10 mx-auto w-5/6 md:w-11/12 lg:w-full h-96 md:h-80 lg:h-80 bg-[#3698f3] text-white shadow-2xl shadow-blue-400 mt-4 hover:-translate-y-3 hover:duration-200 hover:cursor-pointer">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{title}</h2>

          <div className="options">
            <p className='flex justify-center items-center gap-1'>{question}</p>
            <p className='flex justify-center items-center gap-1'>{option_1}</p>
            <p className='flex justify-center items-center gap-1'>{option_2}</p>
            <p className='flex justify-center items-center gap-1'>{option_3}</p>
          </div>

          <p className='flex justify-center items-center gap-1'>{description}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-ghost bg-[#427D9D] text-white">
             
              Edit
            </button>
            <button className="btn btn-ghost bg-[#FF6C22] text-white" onClick={() => handleDelete(_id)}>
             
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
