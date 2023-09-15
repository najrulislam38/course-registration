import PropTypes from "prop-types";

const Cart = ({
  selectedCourses,
  totalCredit,
  remainingCredit,
  totalPrice,
}) => {
  let count = 0;
  return (
    <div className="p-6 bg-base-100 rounded-xl">
      <h4 className="text-lg text-[#2F80ED] font-bold mb-4">
        Credit Hour Remaining {remainingCredit} hr
      </h4>
      <hr />
      <h3 className="text-xl font-bold mt-3">Course Name</h3>
      <div className="space-y-2 text-gray-500 my-4">
        {selectedCourses.map((selectedCourse, idx) => (
          <li key={idx} className="list-none">
            {`${(count = count + 1)}. ${selectedCourse.course_name}`}
          </li>
        ))}
      </div>
      <hr />
      <h4 className="text-gray-500 font-medium my-4">
        Total Credit Hour : {totalCredit}
      </h4>
      <h4 className="text-gray-500 font-medium my-4">
        Total Price : {totalPrice} USD
      </h4>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.array,
  totalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Cart;
