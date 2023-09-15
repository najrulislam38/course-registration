import PropTypes from "prop-types";
import { BsBook } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

const Course = ({ course, handleAddToCart, ToastContainer }) => {
  const { course_name, image, details, credit, price } = course;
  return (
    <div className="p-4 bg-base-100 rounded-xl">
      <figure>
        <img
          src={image}
          alt={`${course_name} image`}
          className="w-full h-36 rounded-lg"
        />
      </figure>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">
          {course_name}
          {/* {`${
          course_name.length <= 25
            ? course_name
            : course_name.slice(0, 25) + "."
        }`}*/}
        </h2>
        <p className="text-sm text-gray-600 mb-4">{details}</p>
        <div className="flex flex-wrap justify-between items-center text-gray-600 font-medium mb-6">
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-xl" />
            <span>Price: {price}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsBook className="text-xl" />
            <span>Credit : {credit}hr</span>
          </div>
        </div>
        <div className="">
          <button
            onClick={() => handleAddToCart(course)}
            className="btn bg-[#2F80ED] hover:bg-[#2F80ED] hover:opacity-80 text-white w-full text-center"
          >
            Select
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func,
  ToastContainer: PropTypes.any,
};

export default Course;
