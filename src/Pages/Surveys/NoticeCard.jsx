import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const NoticeCard = ({ survey, handleDelete }) => {
  const { date, title, _id } = survey;

  const [isAdmin] = useAdmin();

  return (
    <div>
      <Link to={`/notice/${_id}`}>
        <div className="card my-10 pb-8 mx-auto w-5/6 md:w-11/12 lg:w-full h-5/6 md:h-5/6 lg:h-5/6 bg-yellow-200 text-black shadow-2xl mt-4 hover:-translate-y-3 hover:duration-200 hover:cursor-pointer">
          <div className="card-body items-center text-center">
            <AiOutlineExclamationCircle className="text-red-600 font-bold"></AiOutlineExclamationCircle>
            <h1 className="font-bold underline">{date}</h1>
            <h2 className="card-title font-bold">{title}</h2>
            <div className="card-actions justify-end">
              {isAdmin && (
                <>
                  
                  <button
                    className="btn btn-ghost bg-[#FF6C22] text-white"
                    onClick={() => handleDelete(_id)}
                  > <AiFillDelete></AiFillDelete>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NoticeCard;
